import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class RemoverProduto {
  private produtos: Array<Produto>;
  private entrada: Entrada;
  constructor(produtos: Array<Produto>) {
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public remover(): void {
    console.log(`\nInício da remoção do produto`);
    let valor = this.entrada.receberTexto(
      `Informe o nome do produto que deseja remover: `
    );

    const indexEncontrado = this.produtos.findIndex(
      (produto) => produto.nome === valor
    );
    const produtoEncontrado = this.produtos[indexEncontrado];

    let confirmacao = this.entrada.receberTexto(
      `Deseja remover o produto: ${produtoEncontrado?.nome}? (S/N): `
    );

    if (confirmacao === "S") {
      this.produtos.splice(indexEncontrado, 1);
      console.log(`\nRemoção concluída! :)`);
    } else if (confirmacao === "N") {
      console.log(`\nOperação abortada. :)`);
    } else {
      console.log(`Resposta inválida.`);
    }
  }
}
