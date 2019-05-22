const mysql = require('mysql2');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'a',
    database: 'news'
});

module.exports = conn.promise();