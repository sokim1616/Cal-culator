const { sequelize, DataTypes } = require("./index");

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

module.exports = foods;
