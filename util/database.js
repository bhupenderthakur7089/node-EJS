const sequelize = require('sequelize');
const con = new sequelize('shopCart', 'root', '12345', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = con;