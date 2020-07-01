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
module.exports = { sequelize, DataTypes };
