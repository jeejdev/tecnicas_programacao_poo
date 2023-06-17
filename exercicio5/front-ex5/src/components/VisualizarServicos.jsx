import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function VisualizarServico() {
  const { id } = useParams();
  const [servico, setServico] = useState(null);

  const navigate = useNavigate();

  const handleEditar = () => {
    navigate(`/atualizarServico/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/service/listar/${id}`);
        const data = await response.json();
        setServico(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir o serviço?");

    if (confirmDelete) {
      fetch(`http://localhost:3000/service/alterarStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          if (response.ok) {
            // Exclusão bem-sucedida
            alert("Serviço excluído com sucesso.");
            navigate("/servicos");
          } else {
            // Ocorreu um erro na exclusão
            alert("Ocorreu um erro ao excluir o serviço.");
            navigate("/servicos");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (!servico) {
    return <div>Serviço não encontrado...</div>;
  }

  return (
    <div>
      <Navbar />
      <table className="mx-auto w-screen h-96">
        <tbody className="bg-gray-200">
          <tr className="border border-black">
            <th>Nome</th>
            <td>{servico.nome}</td>
          </tr>
          <tr className="border border-black">
            <th>Descrição</th>
            <td>{servico.descricao}</td>
          </tr>
          <tr className="border border-black">
            <th>Preço</th>
            <td>{servico.preco}</td>
          </tr>
          <tr className="border border-black">
            <th>Duração</th>
            <td>{servico.duracao}</td>
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

export default VisualizarServico;
