/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { Sequelize } = require('sequelize')
const mysql = require('mysql2/promise');

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS gerson_atv5');

  console.log('Banco de Dados criado com sucesso');

  await connection.end();
};

createDatabase();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'fatec',
  database: 'gerson_atv5',
  define: {
    timestamps: true,
    freezeTableName: true
  },
});

module.exports = sequelize;