const router = require('express').Router();

const TutorPetController = require('../controllers/TutorPetController');

router.post('/cadastrar', TutorPetController.cadastrarSolicitacao);
router.get('/listar', TutorPetController.listarSolicitacoes);
router.put('/excluir/:id', TutorPetController.excluirSolicitacao);

module.exports = router;
