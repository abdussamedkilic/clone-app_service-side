const { Sequelize } = require('sequelize');

module.exports = new Sequelize('clone_app', 'postgres', 'kilic24?', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
  },
});