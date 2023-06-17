import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class RemoverServicos {
  private servicos: Array<Servico>;
  private entrada: Entrada;
  constructor(servicos: Array<Servico>) {
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public remover(): void {
    console.log(`\nInício da remoção do serviço`);
    let valor = this.entrada.receberTexto(
      `Informe o nome do serviço que deseja remover: `
    );

    const indexEncontrado = this.servicos.findIndex(
      (servico) => servico.nome === valor
    );
    const servicoEncontrado = this.servicos[indexEncontrado];

    let confirmacao = this.entrada.receberTexto(
      `Deseja remover o serviço: ${servicoEncontrado?.nome}? (S/N): `
    );

    if (confirmacao === "S") {
      this.servicos.splice(indexEncontrado, 1);
      console.log(`\nRemoção concluída! :)`);
    } else if (confirmacao === "N") {
      console.log(`\nOperação abortada. :)`);
    } else {
      console.log(`Resposta inválida.`);
    }
  }
}
