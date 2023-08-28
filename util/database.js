const mysql = require('mysql2');
const con = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodedemo',
    password:'12345'
});
module.exports=con.promise();