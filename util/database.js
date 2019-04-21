const mysql   = require('mysql2'),
      dotenv  = require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  database        : process.env.DB_DATABASE,
  password        : process.env.DB_PASSWORD
});

module.exports = pool.promise();

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE, 
//   process.env.DB_USER, 
//   process.env.DB_PASSWORD,
//   {dialect: 'mysql', host: process.env.DB_HOST});

// module.exports = sequelize;
