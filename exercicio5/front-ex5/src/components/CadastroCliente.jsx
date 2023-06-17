import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import InputMask from "react-input-mask";

function CadastroCliente() {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nome: "",
    senha: "",
    CPF: "",
    dataNascimento: "",
    genero: "",
    celular: "",
    cep: "",
    status_usuario: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([cliente]),
      });

      if (response.ok) {
        // Cadastro bem-sucedido
        alert("Cliente cadastrado com sucesso.");
        navigate("/clientes");
      } else {
        // Ocorreu um erro no cadastro
        alert("Ocorreu um erro ao cadastrar o cliente.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao cadastrar o cliente.");
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
            value={cliente.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="senha">
            Senha:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="password"
            id="senha"
            name="senha"
            value={cliente.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="dataNascimento">
            Data de Nascimento:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={cliente.dataNascimento}
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
            value={cliente.genero}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="CPF">
            CPF:
          </label>
          <InputMask
            mask="999.999.999-99"
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="CPF"
            name="CPF"
            value={cliente.CPF}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="celular">
            Celular:
          </label>
          <InputMask
            mask="(99) 99999-9999"
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="celular"
            name="celular"
            value={cliente.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="cep">
            CEP:
          </label>
          <InputMask
            mask="99999-999"
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="cep"
            name="cep"
            value={cliente.cep}
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

export default CadastroCliente;
