const Product = require("../models/Product");

module.exports = class ProductController {
  static async cadastrarProduto(req, res) {
    const response = req.body;
    const data = response[0];
    const produto = {
      nome: data.nome,
      preco: data.preco,
      descricao: data.descricao,
      quantidade: data.quantidade,
      status: data.status,
    };

    try {
      const criar = await Product.create(produto);
      console.log("Callback da Criação de Produto", criar);
      return res
        .json({ message: "Sucesso ao criar produto!", status: 201 })
        .status(201);
    } catch (error) {
      console.log(error);
      return res
        .json({ message: "Erro ao criar produto!", status: 500 })
        .status(500);
    }
  }

  static async listarProdutos(req, res) {
    try {
      const produtos = await Product.findAll();
      return res.json(produtos).status(200);
    } catch (error) {
      console.log(error);
      return res.json(error).status(500);
    }
  }

  static async procurarProduto(req, res) {
    const idProduto = req.params.id;

    try {
      const produto = await Product.findByPk(idProduto);
      return res.json(produto);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  static async atualizarProduto(req, res) {
    const idProduto = req.params.id;
    const data = req.body;

    if (!data.nome) {
      return res
        .json({ message: "Por favor, adicione um nome!", status: 500 })
        .status(500);
    } else if (!data.preco) {
      return res
        .json({ message: "Por favor, adicione um preço!", status: 500 })
        .status(500);
    } else if (!data.descricao) {
      return res
        .json({ message: "Por favor, adicione uma descrição!", status: 500 })
        .status(500);
    } else if (!data.quantidade) {
      return res
        .json({ message: "Por favor, adicione uma quantidade!", status: 500 })
        .status(500);
    } else if (!data.status) {
      return res
        .json({ message: "Por favor, adicione o status do produto!", status: 500 })
        .status(500);
    }

    try {
      await Product.update(
        {
          nome: data.nome,
          preco: data.preco,
          descricao: data.descricao,
          quantidade: data.quantidade,
          status: data.status,
        },
        {
          where: {
            id_produto: idProduto,
          },
        }
      );
      return res
        .json({ message: "Produto atualizado com sucesso!" })
        .status(200);
    } catch (error) {
      console.log(error);
      return res
        .json({ message: "Erro ao atualizar o produto!", error })
        .status(500);
    }
  }

  static async alterarStatusProduto(req, res) {
    const idProduto = req.params.id;

    try {
      const produto = await Product.findByPk(idProduto);

      if (!produto) {
        return res
          .json({ message: "Produto não encontrado!", status: 404 })
          .status(404);
      }

      const novoStatus = !produto.status;

      await Product.update(
        {
          status: novoStatus,
        },
        {
          where: {
            id_produto: idProduto,
          },
        }
      );

      console.log("Status do produto alterado com sucesso!");
      return res
        .json({ message: "Status do produto alterado com sucesso!", status: 200 })
        .status(200);
    } catch (error) {
      console.log(error);
      return res
        .json({ message: "Erro ao alterar o status do produto!", status: 500 })
        .status(500);
    }
  }
}
