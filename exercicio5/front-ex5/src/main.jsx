import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import App from "./App"

// Clientes
import TabelaClientes from "./components/TabelaClientes"
import VisualizarCliente from "./components/VisualizarCliente"
import CadastroCliente from "./components/CadastroCliente"
import AtualizarCliente from "./components/AtualizarCliente"

// Pets
import TabelaPets from "./components/TabelaPets"
import VisualizarPet from "./components/VisualizarPet"
import CadastroPet from "./components/CadastroPet"
import AtualizarPet from "./components/AtualizarPet"


// Serviços
import TabelaServicos from "./components/TabelaServicos"
import VisualizarServicos from "./components/VisualizarServicos"
import CadastroServices from "./components/CadastroServico"
import AtualizarServicos from "./components/AtualizarServico"

// Produtos
import TabelaProdutos from "./components/TabelaProdutos"
import VisualizarProduto from "./components/VisualizarProduto"
import CadastroProduto from "./components/CadastroProduto"
import AtualizarProduto from "./components/AtualizarProduto"

// Compras
import FazerCompras from "./components/FazerCompras"
import ListarAtos from "./components/ListarAtos"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/clientes",
    element: <TabelaClientes />,
  },
  {
    path: "/clientes/:id",
    element: <VisualizarCliente />,
  },
  {
    path: "/produtos/:id",
    element: <VisualizarProduto />,
  },
  {
    path: "/servicos/:id",
    element: <VisualizarServicos />,
  },
  {
    path: "/cadastrar",
    element: <CadastroCliente />,
  },
  {
    path: "/cadastrarProduto",
    element: <CadastroProduto />,
  },
  {
    path: "/cadastrarPet",
    element: <CadastroPet />,
  },
  {
    path: "/cadastrarServico",
    element: <CadastroServices />,
  },
  {
    path: "/atualizarPet/:id",
    element: <AtualizarPet />,
  },
  {
    path: "/atualizarServico/:id",
    element: <AtualizarServicos />,
  },
  {
    path: "/servicos/",
    element: <TabelaServicos />,
  },
  {
    path: "/pets/",
    element: <TabelaPets />,
  },
  {
    path: "/pets/:id",
    element: <VisualizarPet />,
  },
  {
    path: "/atualizar/:id",
    element: <AtualizarCliente />,
  },
  {
    path: "/atualizarProduto/:id",
    element: <AtualizarProduto />,
  },
  {
    path: "/atualizarPet/:id",
    element: <AtualizarPet />,
  },
  {
    path: "/atualizarServico/:id",
    element: <AtualizarServicos />,
  },
  {
    path: "/produtos",
    element: <TabelaProdutos />,
  },
  {
    path: "/compras",
    element: <FazerCompras />,
  },
  {
    path: "/listar",
    element: <ListarAtos />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
