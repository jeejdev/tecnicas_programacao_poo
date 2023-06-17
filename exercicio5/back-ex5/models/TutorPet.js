const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../db/conexao');

const TutorPet = db.define('TutorPet', {
    id_tutor_pet: {
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
    id_pet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pets',
            key: 'id_pet',
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

module.exports = TutorPet;
