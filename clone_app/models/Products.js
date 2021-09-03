const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
    product_name: {
        type: Sequelize.STRING,
    },
    product_price: {
        type: Sequelize.FLOAT,
    },
    product_year: {
        type: Sequelize.INTEGER,
    },
    product_about: {
        type: Sequelize.STRING,
    },
    product_uID: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Product;