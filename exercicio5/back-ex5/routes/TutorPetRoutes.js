const router = require('express').Router();

const TutorPetController = require('../controllers/TutorPetController');

router.post('/cadastrar', TutorPetController.assignUserToPet);
router.get('/listar', TutorPetController.listPetAssignments);
router.put('/excluir/:id', TutorPetController.deletePetAssignment);

module.exports = router;
