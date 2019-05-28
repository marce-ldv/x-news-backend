const mysql = require('mysql2');
const config = require('../config/config');

const conn = mysql.createPool(config.config);

module.exports = conn.promise();