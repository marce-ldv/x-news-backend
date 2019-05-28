const mysql = require('mysql2');
const config = require('../config/config');

const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: 'a',
    database: 'news'
});

module.exports = conn.promise();