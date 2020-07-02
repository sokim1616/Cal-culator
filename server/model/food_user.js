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

  Food_user.associate = function (models) {
    models.Food_user.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
    models.Food_user.belongsTo(models.Foods, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Food_user;
};
