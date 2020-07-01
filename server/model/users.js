// const { sequelize, DataTypes } = require("./index");
// const { food_user } = require("./food_user");

module.exports = (sequelize, DataTypes) => {
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

  users.associate = function (models) {
    models.users.hasMany(models.food_user);
  };

  return users;
};
