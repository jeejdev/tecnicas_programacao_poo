const User = require("../models/User")

module.exports = class UserController {
  static async cadastrarUsuario(req, res) {
    const response = req.body
    const data = response[0]
    const usuario = {
      nome: data.nome,
      CPF: data.CPF,
      senha: data.senha,
      funcao: data.funcao,
      dataNascimento: data.dataNascimento,
      genero: data.genero,
      celular: data.celular,
      cep: data.cep,
      status_usuario: data.status_usuario,
    }

    try {
      const criar = await User.create(usuario)
      console.log("Callback da Criação de Usuário", criar)
      return res.json({ message: "Sucesso ao criar usuário!", status: 201 }).status(201)
    } catch (error) {
      console.log(error)
      return res.json({ message: "Erro ao criar usuário!", status: 500 }).status(500)
    }
  }

  static async listarUsuario(req, res) {
    try {
      const usuario = await User.findAll({
        where: { status_usuario: 1 },
      })
      return res.json(usuario).status(201)
    } catch (error) {
      console.log(error)
      return res.json(error).status(500)
    }
  }

  static async procurarUsuario(req, res) {
    const oId_usuario = req.params.id

    try {
      const usuario = await User.findByPk(oId_usuario)
      return res.json(usuario)
    } catch (error) {
      return res.json(error).status(500)
    }
  }


  static async atualizarUsuario(req, res) {
    const idUsuario = req.params.id
    const data = req.body
    console.log('Atualização', data)
    if (!data.senha) {
      return res.json({ message: "Por favor, adicione uma senha!", status: 500 }).status(500)
    } else if (!data.nome) {
      return res.json({ message: "Por favor, adicione um nome!", status: 500 }).status(500)
    } else if (!data.CPF) {
      return res.json({ message: "Por favor, adicione um CPF!", status: 500 }).status(500)
    } else if (!data.dataNascimento) {
      return res.json({ message: "Por favor, adicione a data de nascimento!", status: 500 }).status(500)
    } else if (!data.genero) {
      return res.json({ message: "Por favor, adicione o gênero!", status: 500 }).status(500)
    } else if (!data.celular) {
      return res
        .json({ message: "Por favor, adicione um numero de celular valido!", status: 500 })
        .status(500)
    } else if (!data.cep) {
      return res.json({ message: "Por favor, adicione um cep valido!", status: 500 }).status(500)
    }

    try {
      await User.update(
        {
          senha: data.senha,
          nome: data.nome,
          CPF: data.CPF,
          dataNascimento: data.dataNascimento,
          genero: data.genero,
          celular: data.celular,
          cep: data.cep,
        },
        {
          where: {
            id_usuario: idUsuario,
          },
        }
      )
      return res.json({ message: "Usuário atualizado com sucesso!" }).status(200)
    } catch (error) {
      console.log(error)
      return res.json({ message: "Erro!!", error }).status(500)
    }
  }

  static async alterarStatusUsuario(req, res) {
    const oId_usuario = req.params.id;

    try {
      const usuario = await User.findByPk(oId_usuario);

      if (!usuario) {
        return res.json({ message: "Usuário não encontrado!", status: 404 }).status(404);
      }

      const novoStatus = !usuario.status_usuario;

      await User.update(
        {
          status_usuario: novoStatus,
        },
        {
          where: {
            id_usuario: oId_usuario,
          },
        }
      );

      console.log('Terminou o try');
      return res.json({ message: "Status do usuário alterado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      console.log(error);
      return res.json({ message: "Erro ao alterar o status do usuário!", status: 500 }).status(500);
    }
  }

}
