import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const TabelaClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/listar");
        const data = await response.json();
        console.log(data);
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

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <button className="w-screen bg-gray-500 text-white" onClick={handleRedirect}>
        Cadastrar Cliente
      </button>
      <table className="mx-auto w-screen text-center">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Gênero</th>
            <th>Celular</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 p-2">
          {clientes.map((cliente) => (
            <tr key={cliente.id_usuario} className="border border-solid">
              <td>{cliente.id_usuario}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.CPF}</td>
              <td>{cliente.dataNascimento}</td>
              <td>{cliente.genero}</td>
              <td>{cliente.celular}</td>
              <td>{cliente.cep}</td>
              <td>
                <Link to={`/clientes/${cliente.id_usuario}`}>Visualizar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
