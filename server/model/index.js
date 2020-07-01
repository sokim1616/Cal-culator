<<<<<<< HEAD
// const fs = require("fs");
=======
>>>>>>> 4456355b1121dec15835095d6f0f0221e5716671
const path = require("path");
const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");
dotenv.config({ path: path.join(__dirname, "../.env") });
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize.sync();
<<<<<<< HEAD

const users = sequelize.define(
  "users",
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

const foods = sequelize.define(
  "foods",
  {
    user_id: DataTypes.STRING,
    food_name: DataTypes.STRING,
    date: DataTypes.DATE,
    calories: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    carbohydrates: DataTypes.FLOAT,
    sugar: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    sodium: DataTypes.FLOAT,
    cholesterol: DataTypes.FLOAT,
    iron: DataTypes.FLOAT,
    calcium: DataTypes.FLOAT,
    vitamin_A: DataTypes.FLOAT,
    vitamin_D: DataTypes.FLOAT,
    zinc: DataTypes.FLOAT,
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

// module.exports = db;
=======
module.exports = { sequelize, DataTypes };
>>>>>>> 4456355b1121dec15835095d6f0f0221e5716671
