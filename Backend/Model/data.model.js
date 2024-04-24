const { Sequelize } = require("sequelize");
const sequelize = require("../Config/db.config")

const DataModel = sequelize.define("Data", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = DataModel;
