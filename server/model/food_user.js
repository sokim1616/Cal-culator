const { sequelize, DataTypes } = require("./index");

const food_user = sequelize.define(
  "food_user",
  {
    amount: DataTypes.INTEGER,
    time: DataTypes.DATE,
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

module.exports = food_user;
