const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: 3306,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) {
    console.error("MySQL connection error:", error);
    return;
  }
  console.log("Connected to MySQL!");
});

connection.on('error', (err) => {
  console.error('MySQL connection error:', err);
});

module.exports = connection;
