import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function AtualizarServicos() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [servico, setServico] = useState({
    nome: "",
    descricao: "",
    preco: "",
    duracao: "",
    status_servico: true,
  });

  useEffect(() => {
    const fetchServico = async () => {
      try {
        const response = await fetch(`http://localhost:3000/service/listar/${id}`);
        const data = await response.json();
        setServico(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServico();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServico((prevServico) => ({
      ...prevServico,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/service/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(servico),
      });

      if (response.ok) {
        // Atualização bem-sucedida
        alert("Serviço atualizado com sucesso.");
        navigate("/servicos");
      } else {
        // Ocorreu um erro na atualização
        alert("Ocorreu um erro ao atualizar o serviço.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao atualizar o serviço.");
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
            value={servico.nome}
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
            value={servico.descricao}
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
            value={servico.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="duracao">
            Duração (Dias):
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="duracao"
            name="duracao"
            value={servico.duracao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            type="submit"
          >
            Atualizar Serviço
          </button>
        </div>
      </form>
    </div>
  );
}

export default AtualizarServicos;
