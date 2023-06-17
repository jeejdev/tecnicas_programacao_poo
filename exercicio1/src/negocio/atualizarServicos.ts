import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class AtualizarServicos {
  private servicos: Array<Servico>
  private entrada: Entrada
  constructor(servicos: Array<Servico>) {
    this.servicos = servicos
    this.entrada = new Entrada()
  }

  public atualizar(): void {
    console.log("\nInício da atualização cadastral do serviço")
    let input = this.entrada.receberTexto("Informe o nome do serviço que deseja alterar os dados:")

    const servicoEncontrado = this.servicos.find((servico) => servico.nome === input)

    if (servicoEncontrado) {
      console.log(`\nServiço Encontrado: ${servicoEncontrado.nome}`)

      console.log(`\nInsira os novos valores: `)

      let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
      let valor = this.entrada.receberNumero(`Por favor informe o preço do serviço (R$): `)
      let servico = new Servico(nome, valor)

      const index = this.servicos.indexOf(servicoEncontrado)
      this.servicos.splice(index, 1, servico)
      console.log(`\nAtualização concluída! :)\n`)
    } else {
      console.log(`\nServiço não encontrado!\n`)
    }
  }
}
