import Entrada from "../io/entrada"
import Cadastro from "../negocio/cadastro"
import Produto from "../modelo/produto"

export default class CadastrarProdutos extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto.`);

        let nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        let valorProduto = this.entrada.receberNumero(`Por favor, informe o valor do produto: R$ `)

        let produto = new Produto(nomeProduto, valorProduto)

        let confirmacao = this.entrada.receberTexto(
            `Deseja cadastrar o produto ${nomeProduto}, por R$ ${valorProduto}? (S/N): `
          );

        if (confirmacao === "S") {
            this.produtos.push(produto)
        console.log(`\nProduto cadastrado! :)`);
        } else if (confirmacao === "N") {
        console.log(`\nOperação abortada. :)`);
        } else {
        console.log(`Resposta inválida.`);
        }
    }
}