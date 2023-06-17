import { Component } from "react"

type props = {
  tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
  render() {
    let tema = this.props.tema
    return (
      <div className="container-fluid">
        <div>
          <h2 className="text-center">Cadastro de Produtos:</h2>
        </div>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Produto"
              aria-label="Nome do Produto"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Valor do Produto"
              aria-label="Valor do Produto"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-5">
            <button className="btn btn-outline-secondary m-auto" type="button" style={{ background: tema }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    )
  }
}
