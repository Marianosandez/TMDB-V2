const Sequelize = require("sequelize");
const db = require("../db/index");

class Tv extends Sequelize.Model {}

Tv.init(
  {
    jsonData: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize: db,
    modelName: "Tv",
  }
);

module.exports = Tv;
