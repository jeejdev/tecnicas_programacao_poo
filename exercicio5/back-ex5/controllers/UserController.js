const User = require("../models/User")

module.exports = class UserController {
  static async cadastrarUsuario(req, res) {
    const data = req.body

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

  static async deletarUsuario(req, res) {
    const idUsuario = req.params.id
    const usuario = await User.findByPk(idUsuario)

    try {
      if (usuario.status_usuario == true) {
        await Usuario.update(
          {
            status_usuario: false,
          },
          {
            where: {
              id_usuario: idUsuario,
            },
          }
        )
      } else {
        await Usuario.update(
          {
            status_usuario: true,
          },
          {
            where: {
              id_usuario: idUsuario,
            },
          }
        )
      }
      return res.json({ message: "Usuário apagado com sucesso!", status: 201 }).status(201)
    } catch (error) {
      return res.json(error).status(500)
    }
  }

  static async atualizarUsuario(req, res) {
    const idUsuario = req.params.id

    const data = req.body

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

    const salt = bcrypt.genSaltSync(10)
    const hashedSenha = bcrypt.hashSync(data.senha, salt)

    try {
      await User.update(
        {
          senha: hashedSenha,
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
    const oId_usuario = req.params.id

    console.log(oId_usuario)

    const usuario = await User.findByPk(oId_usuario)

    try {
      if (usuario.status_usuario == true) {
        await Usuario.update(
          {
            status_usuario: false,
          },
          {
            where: {
              id_usuario: oId_usuario,
            },
          }
        )
      } else {
        await Usuario.update(
          {
            status_usuario: true,
          },
          {
            where: {
              id_usuario: oId_usuario,
            },
          }
        )
      }
      return res.json({ message: "Status do usuário alterado com sucesso!", status: 201 }).status(201)
    } catch (error) {
      return res.json(error).status(500)
    }
  }
}
