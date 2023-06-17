import React from "react";
import { Link } from "react-router-dom";

const handleSelectOption = (event) => {
  const selectedOption = event.target.value;
  if (selectedOption !== "") {
    window.location.href = selectedOption;
  }
};

export const Navbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between">
      <div className="p-2 text-white hover:text-gray-200">
        <Link to="/">Home</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-200">
        <select className="text-white bg-blue-400 hover:text-gray-200" onChange={handleSelectOption}>
          <option value="">Visualizar</option>
          <option value="/clientes">Clientes</option>
          <option value="/produtos">Produtos</option>
          <option value="/servicos">Serviços</option>
          <option value="/pets">Pets</option>
        </select>
      </div>
      <div className="p-2 text-white hover:text-gray-200">
        <Link to="/compras">Comprar ou Atribuir Tutor</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-200">
        <Link to="/listar">Lista de Compras, Serviços e Pets associados</Link>
      </div>
    </nav>
  );
};
