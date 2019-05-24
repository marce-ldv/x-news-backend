const mysql = require('mysql2');

const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: 'a',
    database: 'news',
    insecureAuth : true
});

module.exports = conn.promise();