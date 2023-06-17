import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function CadastroPet() {
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    nome: "",
    idade: "",
    raca: "",
    genero: "",
    status_pet: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/pet/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });

      if (response.ok) {
        // Cadastro bem-sucedido
        alert("Pet cadastrado com sucesso.");
        navigate("/pets");
      } else {
        // Ocorreu um erro no cadastro
        alert("Ocorreu um erro ao cadastrar o pet.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao cadastrar o pet.");
    }
  };

  return (
    <div>
      <Navbar />
      <form className="mx-auto w-screen max-w-xl" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="nome">
            Nome:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="nome"
            name="nome"
            value={pet.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="tipo">
            Tipo:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="tipo"
            name="tipo"
            value={pet.tipo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="raca">
            Raça:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="raca"
            name="raca"
            value={pet.raca}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="genero">
            Genero:
          </label>
          <select
            className="w-full px-3 py-2 border rounded"
            id="genero"
            name="genero"
            value={pet.genero}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
        <div className="mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroPet;
