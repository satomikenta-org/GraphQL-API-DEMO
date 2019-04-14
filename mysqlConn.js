require('dotenv').config();
const mysql = require('mysql');
const util = require('util');


var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})
pool.query = util.promisify(pool.query);

module.exports = pool;


