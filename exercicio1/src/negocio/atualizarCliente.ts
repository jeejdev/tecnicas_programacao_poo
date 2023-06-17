import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void{
        console.log(`\nInício da atualização cadastral do cliente`);
        let valor = this.entrada.receberTexto(`Informe o CPF do cliente que deseja alterar os dados: `);

        const indexEncontrado = this.clientes.findIndex(cliente => cliente.getCpf.getValor === valor);
        const clienteEncontrado = this.clientes[indexEncontrado]

        console.log(`\nCliente Encontrado: ${clienteEncontrado?.nome}`)

        console.log(`\nInsira os novos valores: `);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);

        this.clientes.splice(indexEncontrado, 1, cliente);
        console.log(`\nAtualização concluída! :)\n`);
    }
}