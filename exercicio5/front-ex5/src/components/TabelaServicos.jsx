import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function TabelaServicos () {
  const [servicos, setServicos] = useState([]);
  const [servicosAtivos, setServicosAtivos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/service/listar");
        const data = await response.json();
        console.log("Meus serviços", data);
        setServicos(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate("/cadastrarServico");
  };

  useEffect(() => {
    if (servicos.length > 0) {
      const servicosAtivos = servicos.filter((servico) => servico.status === true);
      setServicosAtivos(servicosAtivos);
      console.log('Serviços Ativos:', servicosAtivos);
    }
  }, [servicos]);

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <button className="w-screen bg-gray-500 text-white" onClick={handleRedirect}>
        Cadastrar Serviço
      </button>
      <div className="table-responsive">
        <table className="mx-auto w-screen text-center">
          <thead className="bg-gray-200">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 p-2">
            {servicosAtivos.length > 0 ? (
              servicosAtivos.map((servico) => (
                <tr key={servico.id_servico} className="border border-solid">
                  <td>{servico.id_servico}</td>
                  <td>{servico.nome}</td>
                  <td>{servico.descricao}</td>
                  <td>{servico.preco}</td>
                  <td>
                    <Link to={`/servicos/${servico.id_servico}`}>Visualizar</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum serviço cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
