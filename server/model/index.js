const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

sequelize.sync();

module.exports = { sequelize, DataTypes };
