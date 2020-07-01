// const { sequelize, DataTypes } = require("./index");
// const { food_user } = require("./food_user");

module.exports = (sequelize, DataTypes) => {
  const foods = sequelize.define(
    "foods",
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

  foods.associate = function (models) {
    models.foods.hasMany(models.food_user);
  };

  return foods;
};
