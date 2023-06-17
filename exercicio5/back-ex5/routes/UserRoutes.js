const router = require('express').Router()

const UserController = require('../controllers/UserController')

router.post("/cadastrar", UserController.cadastrarUsuario)
router.get("/listar", UserController.listarUsuario)
router.get("/listar/:id", UserController.procurarUsuario)
router.delete("/deletar/:id", UserController.deletarUsuario)
router.put("/atualizarUsuario/:id", UserController.atualizarUsuario)
router.put('/alterarStatus/:id', UserController.alterarStatusUsuario)

module.exports = router