const mysql = require('mysql2');
// const config = require('../config/config');

/**
 *
 * @type {Pool}
 */
const conn = mysql.createPool({
    host: 'mysql',
    user: 'user222',
    port: '3306',
    password: 'admin',
    database: 'news'
});

module.exports = conn.promise();