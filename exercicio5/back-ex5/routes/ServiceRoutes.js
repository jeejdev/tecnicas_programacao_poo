const router = require('express').Router();

const ServiceController = require('../controllers/ServiceController');

// Service routes
router.post('/cadastrar', ServiceController.cadastrarService);
router.get('/listar', ServiceController.listarServices);
router.get('/listar/:id', ServiceController.procurarService);
router.put('/atualizar/:id', ServiceController.atualizarService);
router.put('/alterarStatus/:id', ServiceController.alterarStatusService);

module.exports = router;
