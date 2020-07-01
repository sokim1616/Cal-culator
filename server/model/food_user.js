"use strict";
module.exports = (sequelize, DataTypes) => {
  var Food_user = sequelize.define(
    "Food_user",
    {
      amount: DataTypes.INTEGER,
      time: DataTypes.DATE,
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  // User.associate = function (models) {
  //   models.User.hasMany(models.Task);
  // };

  return Food_user;
};

// const food_user = sequelize.define(
//   "food_user",
//   {
//     amount: DataTypes.INTEGER,
//     time: DataTypes.DATE,
//   },
//   {
//     charset: "utf8",
//     collate: "utf8_unicode_ci",
//   }
// );
