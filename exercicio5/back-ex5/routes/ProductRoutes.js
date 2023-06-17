const router = require('express').Router();

const ProductController = require('../controllers/ProductController');

router.post("/cadastrar", ProductController.cadastrarProduto);
router.get("/listar", ProductController.listarProdutos);
router.get("/listar/:id", ProductController.procurarProduto);
router.put("/atualizar/:id", ProductController.atualizarProduto);
router.put('/alterarStatus/:id', ProductController.alterarStatusProduto);

module.exports = router;
