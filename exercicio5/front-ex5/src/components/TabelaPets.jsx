import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function TabelaPets() {
  const [pets, setPets] = useState([]);
  const [petsAtivos, setPetsAtivos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/pet/listar");
        const data = await response.json();
        console.log("Meus pets", data);
        setPets(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate("/cadastrarPet");
  };

  useEffect(() => {
    if (pets.length > 0) {
      const petsAtivos = pets.filter((pet) => pet.status === true);
      setPetsAtivos(petsAtivos);
      console.log('Pets Ativos:', petsAtivos);
    }
  }, [pets]);

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <button className="w-screen bg-gray-500 text-white" onClick={handleRedirect}>
        Cadastrar Pet
      </button>
      <div className="table-responsive">
        <table className="mx-auto w-screen text-center">
          <thead className="bg-gray-200">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Raça</th>
              <th>Gênero</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 p-2">
            {petsAtivos.length > 0 ? (
              petsAtivos.map((pet) => (
                <tr key={pet.id_pet} className="border border-solid">
                  <td>{pet.id_pet}</td>
                  <td>{pet.nome}</td>
                  <td>{pet.tipo}</td>
                  <td>{pet.raca}</td>
                  <td>{pet.genero}</td>
                  <td>
                    <Link to={`/pets/${pet.id_pet}`}>Visualizar</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Nenhum pet cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
