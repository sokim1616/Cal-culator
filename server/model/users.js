"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
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

  User.associate = function (models) {
    models.User.hasMany(models.Food_user);
  };

  return User;
};
