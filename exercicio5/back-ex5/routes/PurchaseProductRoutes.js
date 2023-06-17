const router = require('express').Router();

const PurchaseProductController = require('../controllers/PurchaseProductController');

router.post('/cadastrar', PurchaseProductController.cadastrarSolicitacao);
router.get('/listar', PurchaseProductController.listarSolicitacoes);
router.put('/excluir/:id', PurchaseProductController.excluirSolicitacao);

module.exports = router;
