import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function AtualizarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    quantidade: "",
    status_produto: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/listar/${id}`);
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.log(error);
      }
      console.log(produto)
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/product/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        // Atualização bem-sucedida
        alert("Produto atualizado com sucesso.");
        navigate("/produtos");
      } else {
        // Ocorreu um erro na atualização
        alert("Ocorreu um erro ao atualizar o produto.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao atualizar o produto.");
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
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="descricao">
            Descrição:
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            id="descricao"
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="preco">
            Preço:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="number"
            id="preco"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="preco">
            Quantidade:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="number"
            id="quantidade"
            name="quantidade"
            value={produto.quantidade}
            onChange={handleChange}
            required
          />
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

export { AtualizarProduto };
