const sequelize = require('sequelize');
const conn = require('../util/database');

const CartItem = conn.define('CartItem', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    totalQty: sequelize.INTEGER,
});

module.exports = CartItem;