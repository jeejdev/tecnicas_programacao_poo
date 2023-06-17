import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Navbar } from "./Navbar"

export function AtualizarCliente() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [cliente, setCliente] = useState({
    id: "",
    nome: "",
    nomeSocial: "",
    email: "",
    endereco: {
      estado: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      codigoPostal: "",
      informacoesAdicionais: "",
    },
    telefones: [],
  })

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const idAtualizar = id.toString()
        const response = await fetch(`http://localhost:32831/cliente/${idAtualizar}`)
        const data = await response.json()
        console.log('Dados encontrados:', data)
        setCliente(data)
      } catch (error) {
        console.error("Erro ao obter dados do cliente:", error)
      }
    }

    fetchCliente()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }))
  }

  const handleEnderecoChange = (e) => {
    const { name, value } = e.target
    setCliente((prevCliente) => ({
      ...prevCliente,
      endereco: {
        ...prevCliente.endereco,
        [name]: value,
      },
    }))
  }

  const handleTelefoneChange = (index, e) => {
    const { name, value } = e.target
    setCliente((prevCliente) => {
      const telefones = [...prevCliente.telefones]
      telefones[index] = {
        ...telefones[index],
        [name]: value,
      }
      return {
        ...prevCliente,
        telefones,
      }
    })
  }

  const handleAddTelefone = () => {
    setCliente((prevCliente) => ({
      ...prevCliente,
      telefones: [...prevCliente.telefones, { id: Date.now().toString(), numero: "", ddd: "" }],
    }))
  }

  const handleRemoveTelefone = (index) => {
    setCliente((prevCliente) => {
      const telefones = [...prevCliente.telefones]
      telefones.splice(index, 1)
      return {
        ...prevCliente,
        telefones,
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`http://localhost:32831/cliente/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      })

      if (response.ok) {
        // Atualização bem-sucedida
        alert("Cliente atualizado com sucesso.")
        navigate("/clientes")
      } else {
        // Ocorreu um erro na atualização
        console.log('Resposta', response)
        alert("Ocorreu um erro ao atualizar o cliente.")
      }
    } catch (error) {
      console.error('Catch', error)
      alert("Ocorreu um erro ao atualizar o cliente.")
    }
  }

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
          <label className="block mb-2" htmlFor="nomeSocial">
            Nome Social:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="nomeSocial"
            name="nomeSocial"
            value={cliente.nomeSocial}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            id="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="estado">
            Estado:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="estado"
            name="estado"
            value={cliente.endereco.estado}
            onChange={handleEnderecoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="cidade">
            Cidade:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="cidade"
            name="cidade"
            value={cliente.endereco.cidade}
            onChange={handleEnderecoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="bairro">
            Bairro:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="bairro"
            name="bairro"
            value={cliente.endereco.bairro}
            onChange={handleEnderecoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="rua">
            Rua:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="rua"
            name="rua"
            value={cliente.endereco.rua}
            onChange={handleEnderecoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="numero">
            Número:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="numero"
            name="numero"
            value={cliente.endereco.numero}
            onChange={handleEnderecoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="codigoPostal">
            Código Postal:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={cliente.endereco.codigoPostal}
            onChange={handleEnderecoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="informacoesAdicionais">
            Informações Adicionais:
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="informacoesAdicionais"
            name="informacoesAdicionais"
            value={cliente.endereco.informacoesAdicionais}
            onChange={handleEnderecoChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Telefones:</label>
          {cliente.telefones.map((telefone, index) => (
            <div key={telefone.id} className="flex mb-2">
              <input
                className="w-1/4 px-3 py-2 border rounded mr-2"
                type="text"
                placeholder="DDD"
                name="ddd"
                value={telefone.ddd}
                onChange={(e) => handleTelefoneChange(index, e)}
              />
              <input
                className="w-3/4 px-3 py-2 border rounded mr-2"
                type="text"
                placeholder="Número"
                name="numero"
                value={telefone.numero}
                onChange={(e) => handleTelefoneChange(index, e)}
              />
              <button
                type="button"
                className="px-3 py-2 bg-red-500 text-white rounded"
                onClick={() => handleRemoveTelefone(index)}
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            className="px-3 py-2 bg-green-500 text-white rounded"
            onClick={handleAddTelefone}
          >
            Adicionar Telefone
          </button>
        </div>
        <div className="mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
            Atualizar
          </button>
        </div>
      </form>
    </div>
  )
}
