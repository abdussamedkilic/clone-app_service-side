const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    user_name: {
        type: Sequelize.STRING,
    },
    user_email: {
        type: Sequelize.STRING,
    },
    user_password: {
        type: Sequelize.STRING,
    },
});

module.exports = User;