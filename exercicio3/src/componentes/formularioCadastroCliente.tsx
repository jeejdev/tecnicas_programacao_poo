import { Component } from "react"

type props = {
  tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
  render() {
    let tema = this.props.tema
    return (
      <div className="container-fluid">
        <div>
          <h2 className="text-center">Cadastro de Usuários:</h2>
        </div>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              aria-label="Nome"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome social"
              aria-label="Nome social"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="E-mail"
              aria-label="E-mail"
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
