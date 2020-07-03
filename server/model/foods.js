"use strict";

module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    "Food",
    {
      food_name: DataTypes.STRING,
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

  Food.associate = function (models) {
    models.Food.hasMany(models.Food_user);
  };

  return Food;
};
