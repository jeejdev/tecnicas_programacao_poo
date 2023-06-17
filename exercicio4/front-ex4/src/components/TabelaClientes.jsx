import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"

export const TabelaClientes = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:32831/cliente/clientes")
        const data = await response.json()
        setClientes(data)
      } catch (error) {
        console.error("Erro ao obter dados:", error)
      }
    }

    fetchData()
  }, [])

  const navigate = useNavigate()

  const handleRedirect = () => {
    return navigate("/cadastrar")
  }
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <button className="w-screen bg-gray-500 text-white" onClick={handleRedirect}>Cadastrar Cliente</button>
      <table className="mx-auto w-screen text-center">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nome Social</th>
            <th>Estado</th>
            <th>Bairro</th>
            <th>Rua</th>
            <th>Número</th>
            <th>CEP</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 p-2">
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="border border-solid">
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.nomeSocial}</td>
              <td>{cliente.endereco && cliente.endereco.estado}</td>
              <td>{cliente.endereco && cliente.endereco.bairro}</td>
              <td>{cliente.endereco && cliente.endereco.rua}</td>
              <td>{cliente.endereco && cliente.endereco.numero}</td>
              <td>{cliente.endereco && cliente.endereco.codigoPostal}</td>
              <td>
                <Link to={`/clientes/${cliente.id}`}>Visualizar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
