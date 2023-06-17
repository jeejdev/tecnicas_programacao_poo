const PurchaseProduct = require('../models/PurchaseProduct');
const Usuario = require('../models/User');
const Produto = require('../models/Product');

// Function to assign a client and purchase a product
const assignClientAndPurchaseProduct = async (req, res) => {
    try {
        const { id_usuario, id_produto } = req.body;

        // Verify if the user exists
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Verify if the product exists
        const produto = await Produto.findByPk(id_produto);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        // Assign the client and purchase the product
        const purchase = await PurchaseProduct.create({
            id_usuario,
            id_produto,
        });

        res.status(201).json(purchase);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atribuir cliente e comprar produto.' });
    }
};

// Function to cancel a purchase
const cancelPurchase = async (req, res) => {
    try {
        const { id_compra } = req.params;

        // Verify if the purchase exists
        const purchase = await PurchaseProduct.findByPk(id_compra);
        if (!purchase) {
            return res.status(404).json({ message: 'Compra não encontrada.' });
        }

        // Update the status of the purchase to false
        await purchase.update({ status: false });

        res.status(200).json({ message: 'Compra cancelada com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cancelar a compra.' });
    }
};

// Function to list purchases
const listPurchases = async (req, res) => {
    try {
        const purchases = await PurchaseProduct.findAll();
        res.status(200).json(purchases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao listar as compras.' });
    }
};

module.exports = {
    assignClientAndPurchaseProduct,
    cancelPurchase,
    listPurchases,
};
