import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

export default function FazerCompras() {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [pets, setPets] = useState([]);

  const [idUsuario, setIdUsuario] = useState(1);
  const [idServico, setIdServico] = useState(1);
  const [idProduto, setIdProduto] = useState(1);
  const [idPet, setIdPet] = useState(1);


  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/listar");
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProdutos = async () => {
      try {
        const response = await fetch("http://localhost:3000/product/listar");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchServicos = async () => {
      try {
        const response = await fetch("http://localhost:3000/service/listar");
        const data = await response.json();
        setServicos(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:3000/pet/listar");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClientes();
    fetchProdutos();
    fetchServicos();
    fetchPets();
  }, []);

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const handleOpcaoSelecionada = (e) => {
    setOpcaoSelecionada(e.target.value);
  };

  const handleButtonClick = () => {
    if (opcaoSelecionada === "") {
      alert("Selecione uma opção antes de enviar!");
    } else {
      handleEnviar();
    }
  };

  const handleEnviar = async () => {
    if (opcaoSelecionada === "servico" && idUsuario && idServico) {
      try {
        const response = await fetch("http://localhost:3000/reqservice/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_usuario: idUsuario,
            id_servico: idServico,
          }),
        });

        if (response.ok) {
          alert("Solicitação de serviço cadastrada com sucesso!");
          // Redirecionar ou executar ação desejada após o cadastro
        } else {
          alert("Erro ao cadastrar a solicitação de serviço.");
        }
      } catch (error) {
        console.error(error);
      }
    } else if (opcaoSelecionada === "pet" && idUsuario && idPet) {
      try {
        const response = await fetch("http://localhost:3000/tutor/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_usuario: idUsuario,
            id_pet: idPet,
          }),
        });

        if (response.ok) {
          alert("Tutor cadastrado com sucesso!");
          // Redirecionar ou executar ação desejada após o cadastro
        } else {
          alert("Erro ao cadastrar o tutor.");
        }
      } catch (error) {
        console.error(error);
      }
    } else if (opcaoSelecionada === "produto" && idUsuario && idPet) {
      try {
        const response = await fetch("http://localhost:3000/purchase/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_usuario: idUsuario,
            id_produto: idProduto,
          }),
        });

        if (response.ok) {
          alert("Compra cadastrada com sucesso!");
          // Redirecionar ou executar ação desejada após o cadastro
        } else {
          alert("Erro ao cadastrar a compra.");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Preencha todos os campos antes de enviar a solicitação.");
    }
  };


  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Selecione um cliente:</h2>
            <select className="w-full p-2 border rounded" onChange={(event) => setIdUsuario(event.target.value)}>
              {clientes.length < 1 && (
                <option value="" disabled selected>
                  Nenhum cliente cadastrado
                </option>
              )}
              {clientes.map((cliente) => (
                <option key={cliente.id_usuario} value={cliente.id_usuario} id="idUsuario">
                  {cliente.nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">O que deseja fazer?:</h2>
            <select
              className="w-full p-2 border rounded"
              value={opcaoSelecionada}
              onChange={handleOpcaoSelecionada}
            >
              <option value="">Selecione</option>
              <option value="produto">Comprar um Produto</option>
              <option value="servico">Solicitar um Serviço</option>
              <option value="pet">Atribuir um Pet</option>
            </select>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Opções disponíveis:</h2>
          {opcaoSelecionada === "" && (
            <select className="w-full p-2 border rounded">
              <option value="">Selecione uma opção acima!</option>
            </select>
          )}
          {opcaoSelecionada === "produto" && (
            <select className="w-full p-2 border rounded" onChange={(event) => setIdProduto(event.target.value)}>
              <option value="" aria-required>Selecione um produto</option>
              {produtos.map((produto) => (
                <option key={produto.id_produto} value={produto.id_produto} id="idProduto">
                  {produto.nome}
                </option>
              ))}
            </select>
          )}
          {opcaoSelecionada === "servico" && (
            <select className="w-full p-2 border rounded" onChange={(event) => setIdServico(event.target.value)}>
              <option value="" id='idServico'>Selecione um serviço</option>
              {servicos.map((servico) => (
                <option key={servico.id_servico} value={servico.id_servico}>
                  {servico.nome}
                </option>
              ))}
            </select>
          )}
          {opcaoSelecionada === "pet" && (
            <select className="w-full p-2 border rounded" onChange={(event) => setIdPet(event.target.value)}>
              <option value="">Selecione um pet</option>
              {pets.map((pet) => (
                <option key={pet.id_pet} value={pet.id_pet} id="idPet">
                  {pet.nome}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            onClick={handleButtonClick}
            disabled={!opcaoSelecionada}
          >
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );

}  