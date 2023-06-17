import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function CadastroServices() {
  const navigate = useNavigate();

  const [servico, setServico] = useState({
    nome: "",
    descricao: "",
    preco: "",
    duracao: "",
    status_servico: true,
  });

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
      const response = await fetch("http://localhost:3000/service/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(servico),
      });

      if (response.ok) {
        // Cadastro bem-sucedido
        alert("Serviço cadastrado com sucesso.");
        navigate("/servicos");
      } else {
        // Ocorreu um erro no cadastro
        alert("Ocorreu um erro ao cadastrar o serviço.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao cadastrar o serviço.");
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
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="descricao"
            name="descricao"
            value={servico.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="preco">
            Preço (Reais):
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
            type="number"
            id="duracao"
            name="duracao"
            value={servico.duracao}
            onChange={handleChange}
            required
          />
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

export default CadastroServices;
