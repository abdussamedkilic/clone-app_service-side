const Sequelize = require('sequelize');
const db = require('../config/database');

const Message = db.define('message', {
    message_sID: {
        type: Sequelize.INTEGER,
    },
    message_rID: {
        type: Sequelize.INTEGER,
    },
    message_content: {
        type: Sequelize.STRING,
    },
});

module.exports = Message;