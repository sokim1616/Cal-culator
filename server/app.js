const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const users = require("./model/users");

const foodRouter = require("./routes/food");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("testing");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  users
    .findOne({
      where: {
        email,
        password,
      },
    })
    .then((result) => {
      if (!result) {
        return res.status(403).send("result not found");
      }
      const user = result.dataValues.id;
      jwt.sign({ user }, "secretKey", (err, token) => {
        if (err) {
          return res.status(403).send(err);
        }
        res.cookie("token", token);
        res.send({
          token,
          email,
        });
      });
    });
});

app.get("/user", checkToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        msg: "login successful",
        authData,
      });
    }
  });
});

app.get("logout", (req, res) => {});

function checkToken(req, res, next) {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
}

app.use("/food", foodRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
