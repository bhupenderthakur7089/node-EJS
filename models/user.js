const sequelize = require('sequelize');
const con = require('../util/database');

const User = con.define('User', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: sequelize.STRING,
    email: sequelize.STRING
});

module.exports = User;