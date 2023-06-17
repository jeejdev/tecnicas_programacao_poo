import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class RemoverPet {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public remover(): void {
    console.log(`\nInício da atualização do Pet`);

    let valor = this.entrada.receberTexto(
      `Informe o CPF do tutor do pet que deseja remover: `
    );

    const indexEncontrado = this.clientes.findIndex(
      (item) => item.getCpf.getValor === valor
    );
    const clienteEncontrado = this.clientes[indexEncontrado];

    clienteEncontrado.getPets.forEach((pet, index) => {
      const nomePet = pet.getNomePet;
      console.log(`Nome do Pet ${index + 1}: ${nomePet}`);
    });

    let valorPet = this.entrada.receberTexto(
      `Informe o nome do pet que deseja remover: `
    );
    const indexEncontradoPet = clienteEncontrado.getPets.findIndex(
      (pet) => pet.getNomePet === valorPet
    );

    let confirmacao = this.entrada.receberTexto(
      `Deseja remover o pet de nome ${valorPet}? (S/N): `
    );

    if (confirmacao === "S") {
      this.clientes[indexEncontrado].getPets.splice(indexEncontradoPet, 1);
      console.log(`\nAnimal removido! :)`);
    } else if (confirmacao === "N") {
      console.log(`\nOperação abortada. :)`);
    } else {
      console.log(`Resposta inválida.`);
    }
  }
}
