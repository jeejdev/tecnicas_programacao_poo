import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
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
        const response = await fetch(`http://localhost:3000/user/listar/${id}`)
        const data = await response.json()
        setCliente(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id])

  const handleDelete = () => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir o cliente?")

    if (confirmDelete) {
      fetch(`http://localhost:3000/user/alterarStatus/${id}`, {
        method: "PUT",
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
  }

  if (!cliente) {
    return <div>Cliente não encontrado...</div>
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
            <th>Data de Nascimento</th>
            <td>{cliente.dataNascimento}</td>
          </tr>
          <tr className="border border-black">
            <th>Gênero</th>
            <td>{cliente.genero || "N/A"}</td>
          </tr>
          <tr className="border border-black">
            <th>CPF</th>
            <td>{cliente.CPF}</td>
          </tr>
          <tr className="border border-black">
            <th>Celular</th>
            <td>
              {cliente.cep}
            </td>
          </tr>
          <tr className="border border-black">
            <th>CEP</th>
            <td>
              <ul>
                <td>{cliente.cep || "N/A"}</td>
              </ul>
            </td>
          </tr>
        </tbody>
        <tfoot className="bg-gray-500 text-white cursor-pointer text-center h-2">
          <td className="w-screen border border-black" onClick={handleEditar}>
            Editar
          </td>
          <td className="w-screen border border-black" onClick={handleDelete}>
            <button>Excluir</button>
          </td>
        </tfoot>
      </table>
    </div>
  )
}

export default VisualizarCliente
