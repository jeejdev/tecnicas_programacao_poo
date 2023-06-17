import React from "react"

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between">
      <div className="p-5 text-white hover:text-gray-700">
        <Link to="/">Home</Link>
      </div>
      <div className="p-5 text-white hover:text-gray-700">
        <Link to="/clientes">Clientes</Link>
      </div>
    </nav>
  )
}
