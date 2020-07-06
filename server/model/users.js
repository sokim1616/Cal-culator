"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.STRING,
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  Users.associate = function (models) {
    models.Users.hasMany(models.Food_users);
  };

  return Users;
};

// setresultSave((prevState) => {
//   ...prevState,
//     {date, foodname, calories}
// })
