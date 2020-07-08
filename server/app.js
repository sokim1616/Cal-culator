const express = require("express");
const session = require("express-session");

const { Users } = require("./model");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const foodRouter = require("./routes/food");
const userRouter = require("./routes/user");
const add_food_user = require("./controller/food/add_food_user");

const PORT = process.env.PORT || 4000;

const app = express();

// use cors with credentials
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// use session with secret key
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user); // user객체가 deserializeUser로 전달됨.
});

passport.deserializeUser((user, done) => {
  done(null, user); // 여기의 user가 req.user가 됨
});

passport.use(
  new GoogleStrategy(
    {
      // options for the google strat
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      let user = profile.emails[0].value;
      // email : profile.emails[0].value
      // console.log("email ---------- ", profile.emails[0].value);

      Users.findOrCreate({
        where: { email: user },
        defaults: {
          username: profile.displayName,
          password: profile.id,
          age: 20,
          gender: "Male",
        },
      }).then(([user, created]) => {
        // if (created) {
        //   // 새로 생성
        //   cb(null, user);
        // } else {
        //   // 이미 있을 때
        console.log("eeeeeewerwerwereeeeeee", user);
        //   cb(null, user);
        // }
        cb(null, user);
        /* { id: 12,
             username: 'JunSeob Kim',
             email: 'wnstjq616@gmail.com',
             password: '101853115948177116651',
             gender: 'Male',
             age: '20',
             createdAt: 2020-07-07T16:55:17.000Z,
             updatedAt: 2020-07-07T16:55:17.000Z
           } */

        // 1. client에서 불러와서 정보를 받고 signin을 한다.
        // 2. 여기서 express session에 저장한다.
      });
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/login" }),
  function (req, res) {
    const sess = req.session;
    console.log("req.starttttttttttttt : ", req.user.dataValues);
    console.log("req.enddddddddddddddd : ");

    sess.userid = req.user.dataValues.id;
    sess.userage = req.user.dataValues.age;
    sess.gender = req.user.dataValues.gender;
    console.log("sesssssss", sess);
    res.send(req.user.dataValues);
  }
);

app.use("/food", foodRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
