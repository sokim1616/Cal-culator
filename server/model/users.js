const { sequelize, DataTypes } = require("./index");

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

module.exports = users;
