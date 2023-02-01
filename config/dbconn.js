const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if( err ) {
    console.log('Database Connection Error!!');
    return;
  }
  else {
    console.log('Database Connected !!!');
  }
});


module.exports = connection;