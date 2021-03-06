const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

const name = process.env.MYSQL_DATABASE;

db.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to ${name}!`);
  });

module.exports = db