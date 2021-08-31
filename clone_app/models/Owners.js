const Sequelize = require('sequelize');
const db = require('../config/database');

const Owner = db.define('owner', {
    owner_uID: {
        type: Sequelize.INTEGER,
    },
    owner_pID: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Owner;