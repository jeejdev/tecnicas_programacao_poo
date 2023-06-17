import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import App from "./App"
import { TabelaClientes } from "./components/TabelaClientes"
import VisualizarCliente from "./components/VisualizarCliente"
import CadastroCliente from "./components/CadastroCliente"
import { AtualizarCliente } from "./components/AtualizarCliente"

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
    path: "/cadastrar",
    element: <CadastroCliente />,
  },
  {
    path: "/atualizar/:id",
    element: <AtualizarCliente />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
