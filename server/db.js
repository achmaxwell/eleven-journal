const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Einein13!@localhost:5432/eleven-journal");

module.exports = sequelize;