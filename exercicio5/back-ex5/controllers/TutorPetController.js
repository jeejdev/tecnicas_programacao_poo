const TutorPet = require('../models/TutorPet');
const Usuario = require('../models/User');
const Pet = require('../models/Pet');

// Function to assign a user to a pet
const assignUserToPet = async (req, res) => {
  try {
    const { id_usuario, id_pet } = req.body;

    // Verify if the user exists
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // Verify if the pet exists
    const pet = await Pet.findByPk(id_pet);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado.' });
    }

    // Assign the user to the pet
    const assignment = await TutorPet.create({
      id_usuario,
      id_pet,
    });

    res.status(201).json(assignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atribuir usuário ao pet.' });
  }
};

// Function to delete a pet assignment (by updating the status)
const deletePetAssignment = async (req, res) => {
  try {
    const { id_assignment } = req.params;

    // Verify if the assignment exists
    const assignment = await TutorPet.findByPk(id_assignment);
    if (!assignment) {
      return res.status(404).json({ message: 'Atribuição de pet não encontrada.' });
    }

    // Update the status of the assignment to false
    await assignment.update({ status: false });

    res.status(200).json({ message: 'Atribuição de pet excluída com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir a atribuição de pet.' });
  }
};

// Function to list pet assignments
const listPetAssignments = async (req, res) => {
  try {
    const assignments = await TutorPet.findAll();
    res.status(200).json(assignments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar as atribuições de pet.' });
  }
};

module.exports = {
  assignUserToPet,
  deletePetAssignment,
  listPetAssignments,
};
