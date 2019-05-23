const mysql = require('mysql2');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'news'
});

module.exports = conn.promise();