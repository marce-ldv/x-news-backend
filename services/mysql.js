const mysql = require('mysql2');
// const config = require('../config/config');

/**
 *
 * @type {Pool}
 */
const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'a',
    database: 'news'
});

module.exports = conn.promise();