import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import monkeyImage from "./assets/monkey.jpg";

function App() {
  const handleImageClick = () => {
    alert("Você fez carinho no macaco! 😄🐒");
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center">Seja bem-vindo ao PetLovers!</h1>
      <h2 className="text-center">Na aba 'Visualizar', você conseguirá listar, cadastrar, editar e excluir os Clientes, Pets, Produtos e Serviços.</h2>
      <div className="flex justify-center mt-4">
        <img
          src={monkeyImage}
          alt="Monkey"
          className="w-128 h-128 rounded-md shadow-md cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
    </>
  );
}

export default App;
