const Sequelize = require('sequelize');
const db = require('../config/database');

const Message = db.define('message', {
    message_uID: {
        type: Sequelize.INTEGER,
    },
    message_pID: {
        type: Sequelize.INTEGER,
    },
    message_content: {
        type: Sequelize.STRING,
    },
});

module.exports = Message;