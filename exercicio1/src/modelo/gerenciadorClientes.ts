import Cliente from './cliente';

export default class GerenciadorClientes {
  private clientes: Array<Cliente>;

  constructor() {
    this.clientes = [];
  }

  public adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  public obterClientesQueMaisConsumiramProdutos(): Array<Cliente> {
    const clientesOrdenadosPorQuantidade = this.clientes.sort((a, b) => {
      return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length;
    });
    return clientesOrdenadosPorQuantidade.slice(0, 10);
  }

  public obterClientesQueMaisConsumiramServicos(): Array<Cliente> {
    const clientesOrdenadosPorQuantidade = this.clientes.sort((a, b) => {
      return b.getServicosConsumidos.length - a.getServicosConsumidos.length;
    });
    return clientesOrdenadosPorQuantidade.slice(0, 10);
  }
}
