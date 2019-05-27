const mysql = require('mysql2');

const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'a',
    database: 'news',
});

module.exports = conn.promise();