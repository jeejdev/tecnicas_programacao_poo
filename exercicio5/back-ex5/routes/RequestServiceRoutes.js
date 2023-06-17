const router = require('express').Router();

const RequestServiceController = require('../controllers/RequestServiceController');

router.post('/cadastrar', RequestServiceController.cadastrarSolicitacao);
router.get('/listar', RequestServiceController.listarSolicitacoes);
router.put('/excluir/:id', RequestServiceController.excluirSolicitacao);

module.exports = router;
