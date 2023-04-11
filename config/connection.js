const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

var mysql = require('mysql')
var connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'hacktheplanet',
      database: 'todoagain_db'
    }
  );
}

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     }
//   );
// }

module.exports = sequelize;