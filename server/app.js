const express = require("express");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const foodRouter = require("./routes/food");
const userRouter = require("./routes/user");

const PORT = process.env.PORT || 4000;

const app = express();

// use cors with credentials
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://im20-project-cal-culator.s3-website.ap-northeast-2.amazonaws.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use session with secret key
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/food", foodRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
