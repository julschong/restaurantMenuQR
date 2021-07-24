const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL_DEV);

module.exports = sequelize;
