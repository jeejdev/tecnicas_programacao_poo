import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Cadastro from "./cadastro"
import Pet from "../modelo/pet"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Pet`);

        let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor, informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`Por favor, informe o gênero: `);

        let pet = new Pet(nomePet, tipo, raca, genero);
        
        let valor = this.entrada.receberTexto(`Informe o CPF do cliente que será o Tutor do Pet ${pet.getNomePet}: `);

        const indexEncontrado = this.clientes.findIndex(item => item.getCpf.getValor === valor);
        const clienteEncontrado = this.clientes[indexEncontrado]

        let confirmacao = this.entrada.receberTexto(
            `Deseja cadastrar o Pet ${pet.getNomePet}, no Tutor ${clienteEncontrado?.nome}? (S/N): `
          );

        if (confirmacao === "S") {
        this.clientes[indexEncontrado].getPets.push(pet)
        console.log(`\nAnimal cadastrado! :)`);
        } else if (confirmacao === "N") {
        console.log(`\nOperação abortada. :)`);
        } else {
        console.log(`Resposta inválida.`);
        }
    }
}