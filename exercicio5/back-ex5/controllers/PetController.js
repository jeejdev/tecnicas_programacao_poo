const Pet = require("../models/Pet");

module.exports = class PetController {
  static async cadastrarPet(req, res) {
    const { nome, tipo, raca, genero } = req.body;

    try {
      const pet = await Pet.create({ nome, tipo, raca, genero });
      console.log("Pet cadastrado:", pet);
      return res
        .status(201)
        .json({ message: "Pet cadastrado com sucesso!", pet });
    } catch (error) {
      console.error("Erro ao cadastrar o pet:", error);
      return res.status(500).json({ message: "Erro ao cadastrar o pet" });
    }
  }

  static async listarPets(req, res) {
    try {
      const pets = await Pet.findAll();
      return res.status(200).json(pets);
    } catch (error) {
      console.error("Erro ao obter a lista de pets:", error);
      return res.status(500).json({ message: "Erro ao listar os pets" });
    }
  }

  static async procurarPet(req, res) {
    const idPet = req.params.id;

    try {
      const pet = await Pet.findByPk(idPet);
      if (pet) {
        return res.status(200).json(pet);
      } else {
        return res.status(404).json({ message: "Pet não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao procurar o pet:", error);
      return res.status(500).json({ message: "Erro ao procurar o pet" });
    }
  }

  static async atualizarPet(req, res) {
    const idPet = req.params.id;
    const { nome, tipo, raça, genero } = req.body;

    try {
      const pet = await Pet.findByPk(idPet);

      if (!pet) {
        return res.status(404).json({ message: "Pet não encontrado" });
      }

      await Pet.update({ nome, tipo, raça, genero }, { where: { id_pet: idPet } });

      return res
        .status(200)
        .json({ message: "Pet atualizado com sucesso!" });
    } catch (error) {
      console.error("Erro ao atualizar o pet:", error);
      return res
        .status(500)
        .json({ message: "Erro ao atualizar o pet" });
    }
  }

  static async alterarStatusPet(req, res) {
    const idPet = req.params.id;

    try {
      const pet = await Pet.findByPk(idPet);

      if (!pet) {
        return res.status(404).json({ message: "Pet não encontrado" });
      }

      const novoStatus = !pet.status;

      await Pet.update(
        {
          status: novoStatus,
        },
        {
          where: {
            id_pet: idPet,
          },
        }
      );

      return res
        .status(200)
        .json({ message: "Status do pet alterado com sucesso!" });
    } catch (error) {
      console.error("Erro ao alterar o status do pet:", error);
      return res
        .status(500)
        .json({ message: "Erro ao alterar o status do pet" });
    }
  }
};
