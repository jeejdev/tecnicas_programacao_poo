const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../db/conexao');

const PurchaseProduct = db.define('PurchaseProduct', {
    id_compra_produto: {
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
    id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id_produto',
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

module.exports = PurchaseProduct;
