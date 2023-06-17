import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function VisualizarProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  const navigate = useNavigate();

  const handleEditar = () => {
    navigate(`/atualizarProduto/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/listar/${id}`);
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir o produto?");

    if (confirmDelete) {
      fetch(`http://localhost:3000/product/alterarStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          if (response.ok) {
            // Exclusão bem-sucedida
            alert("Produto excluído com sucesso.");
            navigate("/produtos");
          } else {
            // Ocorreu um erro na exclusão
            alert("Ocorreu um erro ao excluir o produto.");
            navigate("/produtos");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (!produto) {
    return <div>Produto não encontrado...</div>;
  }

  return (
    <div>
      <Navbar />
      <table className="mx-auto w-screen h-96">
        <tbody className="bg-gray-200">
          <tr className="border border-black">
            <th>Nome</th>
            <td>{produto.nome}</td>
          </tr>
          <tr className="border border-black">
            <th>Descrição</th>
            <td>{produto.descricao}</td>
          </tr>
          <tr className="border border-black">
            <th>Preço</th>
            <td>{produto.preco}</td>
          </tr>
          <tr className="border border-black">
            <th>Quantidade</th>
            <td>{produto.quantidade}</td>
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

export default VisualizarProduto;
