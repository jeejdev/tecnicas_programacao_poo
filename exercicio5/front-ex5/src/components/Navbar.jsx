import React from "react"

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between ">
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/">Home</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/clientes">Clientes</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/produtos">Produtos</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/servicos">Serviços</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/pets">Pets</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/compras">Comprar ou Atribuir Tutor</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-700">
        <Link to="/lista">Lista de Clientes</Link>
      </div>
    </nav>
  )
}
