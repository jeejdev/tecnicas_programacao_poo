import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function VisualizarPet() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  const navigate = useNavigate();

  const handleEditar = () => {
    navigate(`/atualizarPet/${id}`);
  };

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

  const handleDelete = () => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir o pet?");

    if (confirmDelete) {
      fetch(`http://localhost:3000/pet/alterarStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          if (response.ok) {
            // Exclusão bem-sucedida
            alert("Pet excluído com sucesso.");
            navigate("/pets");
          } else {
            // Ocorreu um erro na exclusão
            alert("Ocorreu um erro ao excluir o pet.");
            navigate("/pets");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (!pet) {
    return <div>Pet não encontrado...</div>;
  }

  return (
    <div>
      <Navbar />
      <table className="mx-auto w-screen h-96">
        <tbody className="bg-gray-200">
          <tr className="border border-black">
            <th>Nome</th>
            <td>{pet.nome}</td>
          </tr>
          <tr className="border border-black">
            <th>Tipo</th>
            <td>{pet.tipo}</td>
          </tr>
          <tr className="border border-black">
            <th>Raça</th>
            <td>{pet.raca}</td>
          </tr>
          <tr className="border border-black">
            <th>Gênero</th>
            <td>{pet.genero}</td>
          </tr>
        </tbody>
        <tfoot className="bg-gray-500 text-white cursor-pointer text-center h-2">
          <td className="w-screen border border-black" onClick={handleEditar}>
            Editar
          </td>
          <td className="w-screen border border-black" onClick={handleDelete}>
            <button>Excluir</button>
          </td>
        </tfoot>
      </table>
    </div>
  );
}

export default VisualizarPet;
