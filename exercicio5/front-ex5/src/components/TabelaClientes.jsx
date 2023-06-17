import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function TabelaClientes () {
  const [clientes, setClientes] = useState([]);
  const [clientesAtivos, setClientesAtivos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/listar");
        const data = await response.json();
        console.log("Meus clientes", data);
        setClientes(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate("/cadastrar");
  };

  useEffect(() => {
    const clientesAtivos = clientes.filter((cliente) => cliente.status_usuario === true);
    setClientesAtivos(clientesAtivos);
  }, [clientes]);

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <button className="w-screen bg-gray-500 text-white" onClick={handleRedirect}>
        Cadastrar Cliente
      </button>
      <div className="table-responsive">
        <table className="mx-auto w-screen text-center">
          <thead className="bg-gray-200">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Celular</th>
              <th>CEP</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 p-2">
            {clientesAtivos.length > 0 ? (
              clientesAtivos.map((cliente) => (
                <tr key={cliente.id_usuario} className="border border-solid">
                  <td>{cliente.id_usuario}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.genero}</td>
                  <td>{cliente.celular}</td>
                  <td>{cliente.cep}</td>
                  <td>
                    <Link to={`/clientes/${cliente.id_usuario}`}>Visualizar</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Sem clientes cadastrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
