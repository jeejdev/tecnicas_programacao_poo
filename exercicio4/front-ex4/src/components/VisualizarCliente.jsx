import React, { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"

function VisualizarCliente() {
  const { id } = useParams()
  const [cliente, setCliente] = useState(null)

  const navigate = useNavigate()

  const handleEditar = () => {
    navigate(`/atualizar/${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:32831/cliente/${id}`)
        const data = await response.json()
        setCliente(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id])

  const handleDelete = () => {
    fetch(`http://localhost:32831/cliente/excluir`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (response.ok) {
          // Exclusão bem-sucedida
          alert("Cliente excluído com sucesso.")
          navigate("/clientes")
        } else {
          // Ocorreu um erro na exclusão
          alert("Ocorreu um erro ao excluir o cliente.")
          navigate("/clientes")
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  if (!cliente) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <Navbar />
      <table className="mx-auto w-screen h-96">
        <tbody className="bg-gray-200">
          <tr className="border border-black">
            <th>Nome</th>
            <td>{cliente.nome}</td>
          </tr>
          <tr className="border border-black">
            <th>Nome Social</th>
            <td>{cliente.nomeSocial}</td>
          </tr>
          <tr className="border border-black">
            <th>Email</th>
            <td>{cliente.email || "N/A"}</td>
          </tr>
          <tr className="border border-black">
            <th>Endereço</th>
            <td>
              {cliente.endereco.rua}, {cliente.endereco.numero}, {cliente.endereco.bairro},{" "}
              {cliente.endereco.cidade}, {cliente.endereco.estado}, {cliente.endereco.codigoPostal}
            </td>
          </tr>
          <tr className="border border-black">
            <th>Informações Adicionais</th>
            <td>{cliente.endereco.informacoesAdicionais}</td>
          </tr>
          <tr className="border border-black">
            <th>Telefones</th>
            <td>
              <ul>
                {cliente.telefones.map((telefone) => (
                  <li key={telefone.id}>
                    {telefone.ddd} {telefone.numero}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
        <tfoot className="bg-gray-500 text-white cursor-pointer text-center h-2">
          <td className="w-screen border border-black" onClick={handleEditar}>
            Editar
          </td>
          <td className="w-screen border border-black">
            <button onClick={handleDelete}>Excluir</button>
          </td>
        </tfoot>
      </table>
    </div>
  )
}

export default VisualizarCliente
