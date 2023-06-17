import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function AtualizarPet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    nome: "",
    tipo: "",
    raca: "",
    genero: "",
    status_pet: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/pet/listar/${id}`);
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

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
      const response = await fetch(`http://localhost:3000/pet/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });

      if (response.ok) {
        // Atualização bem-sucedida
        alert("Pet atualizado com sucesso.");
        navigate("/pets");
      } else {
        // Ocorreu um erro na atualização
        alert("Ocorreu um erro ao atualizar o pet.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao atualizar o pet.");
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
            Gênero:
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
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AtualizarPet;
