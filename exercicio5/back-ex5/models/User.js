const Sequelize = require("sequelize");
const db = require("../db/conexao");

const User = db.define(
  "User",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CPF: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    genero: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
    celular: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status_usuario: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
