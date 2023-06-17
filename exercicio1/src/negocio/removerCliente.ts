import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class RemoverCliente {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public remover(): void {
    console.log(`\nInício da remoção do cliente`);
    let valor = this.entrada.receberTexto(
      `Informe o CPF do cliente que deseja remover: `
    );

    const indexEncontrado = this.clientes.findIndex(
      (item) => item.getCpf.getValor === valor
    );
    const clienteEncontrado = this.clientes[indexEncontrado];

    let confirmacao = this.entrada.receberTexto(
      `Deseja remover o cliente: ${clienteEncontrado?.nome}? (S/N): `
    );

    if (confirmacao === "S") {
      this.clientes.splice(indexEncontrado, 1);
      console.log(`\nRemoção concluída! :)`);
    } else if (confirmacao === "N") {
      console.log(`\nOperação abortada. :)`);
    } else {
      console.log(`Resposta inválida.`);
    }
  }
}
