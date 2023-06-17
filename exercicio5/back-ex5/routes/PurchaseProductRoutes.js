const router = require('express').Router();

const PurchaseProductController = require('../controllers/PurchaseProductController');

router.post('/cadastrar', PurchaseProductController.assignClientAndPurchaseProduct);
router.get('/listar', PurchaseProductController.listPurchases);
router.put('/excluir/:id', PurchaseProductController.cancelPurchase);

module.exports = router;