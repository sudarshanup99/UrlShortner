const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("urlShortners", "root", "Kimetsu123#", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
