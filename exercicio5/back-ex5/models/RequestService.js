const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../db/conexao');

const SolicitacaoServico = db.define('SolicitacaoServico', {
    id_solicitacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id_usuario',
        },
    },
    id_servico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'services',
            key: 'id_servico',
        },
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    timestamps: false,
});

module.exports = SolicitacaoServico;
