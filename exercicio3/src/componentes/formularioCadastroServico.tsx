import { Component } from "react"

type props = {
  tema: string
}

export default class FormularioCadastroServico extends Component<props> {
  render() {
    let tema = this.props.tema
    return (
      <div className="container-fluid">
        <div>
          <h2 className="text-center">Cadastro de Serviços:</h2>
        </div>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Serviço"
              aria-label="Nome do Serviço"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Preço do Serviço"
              aria-label="Preço do Serviço"
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
