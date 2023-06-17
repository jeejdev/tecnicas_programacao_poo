const router = require('express').Router();

const PetController = require('../controllers/PetController');

// Pet routes
router.post('/cadastrar', PetController.cadastrarPet);
router.get('/listar', PetController.listarPets);
router.get('/listar/:id', PetController.procurarPet);
router.put('/atualizar/:id', PetController.atualizarPet);
router.put('/alterarStatus/:id', PetController.alterarStatusPet);

module.exports = router;
