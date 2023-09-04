const sequelize = require('sequelize');
const conn = require('../util/database');

const Cart = conn.define('Cart', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Cart;