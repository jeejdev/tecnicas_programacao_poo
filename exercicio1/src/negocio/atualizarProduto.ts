import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class AtualizarProduto {
  private produtos: Array<Produto>
  private entrada: Entrada
  constructor(produtos: Array<Produto>) {
    this.produtos = produtos
    this.entrada = new Entrada()
  }

  public atualizar(): void{
    console.log(`\nInício da atualização cadastral do produto`);
    let input = this.entrada.receberTexto(`Informe o nome do produto que deseja alterar os dados: `);

    const produtoEncontrado = this.produtos.find(produto => produto.nome === input);

    if (produtoEncontrado) {
      console.log(`\nProduto Encontrado: ${produtoEncontrado.nome}`)

      console.log(`\nInsira os novos valores: `);

      let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
      let valor = this.entrada.receberNumero(`Por favor informe o preço do produto (R$): `)
      let produto = new Produto(nome, valor);

      const index = this.produtos.indexOf(produtoEncontrado);
      this.produtos.splice(index, 1, produto);
      console.log(`\nAtualização concluída! :)\n`);
    } else {
      console.log(`\nProduto não encontrado!\n`);
    }
  }
}
