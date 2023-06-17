import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"

// CLIENTES
import AtualizarCliente from "../negocio/atualizarCliente"
import CadastroCliente from "../negocio/cadastroCliente"
import ListagemClientes from "../negocio/listagemClientes"
import RemoverCliente from "../negocio/removerCliente"

// PETS
import CadastroPet from "../negocio/cadastroPet"
import AtualizarPet from "../negocio/atualizarPet"
import RemoverPet from "../negocio/removerPet"

// PRODUTOS
import CadastrarProdutos from "../negocio/cadastrarProdutos"
import AtualizarProduto from "../negocio/atualizarProduto"
import ListagemProdutos from "../negocio/listagemProdutos"
import RemoverProduto from "../negocio/removerProduto"

// SERVICOS
import CadastrarServicos from "../negocio/cadastrarServico"
import AtualizarServicos from "../negocio/atualizarServicos"
import ListagemServicos from "../negocio/listagemServicos"
import RemoverServicos from "../negocio/removerServicos"

/* // GERENCIADORES CONSUMO
import GerenciadorConsumo from '../negocio/gerenciadorConsumo';
import GerenciadorConsumoValor from '../negocio/gerenciadorConsumoValor';
import GerenciadorConsumoPorPet from '../negocio/gerenciadorConsumoPorPet';
 */
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
  console.log(`Opções:`)
  console.log(`1 - Cadastrar cliente`)
  console.log(`2 - Atualizar algum cliente`)
  console.log(`3 - Remover algum cliente`)
  console.log(`4 - Listar todos os clientes`)
  console.log(`5 - Cadastrar um novo pet`)
  console.log(`6 - Atualizar um pet`)
  console.log(`7 - Deletar um pet`)
  console.log(`8 - Cadastrar um produto`)
  console.log(`9 - Listar os produto`)
  console.log(`10 - Atualizar um produto`)
  console.log(`11 - Deletar um produto`)
  console.log(`12 - Cadastrar um serviço`)
  console.log(`13 - Atualizar um serviço`)
  console.log(`14 - Listar serviços`)
  console.log(`15 - Deletar um serviço`)
  console.log(`0 - Sair`)

  let entrada = new Entrada()
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

  switch (opcao) {
    case 1:
      let cadastro = new CadastroCliente(empresa.getClientes)
      cadastro.cadastrar()
      break
    case 2:
      let atualizarCliente = new AtualizarCliente(empresa.getClientes)
      atualizarCliente.atualizar()
      break
    case 3:
      let removerCliente = new RemoverCliente(empresa.getClientes)
      removerCliente.remover()
      break
    case 4:
      let listagemCliente = new ListagemClientes(empresa.getClientes)
      listagemCliente.listar()
      break
    case 5:
      let cadastroPet = new CadastroPet(empresa.getClientes)
      cadastroPet.cadastrar()
      break
    case 6:
      let atualizarPet = new AtualizarPet(empresa.getClientes)
      atualizarPet.atualizar()
      break
    case 7:
      let removerPet = new RemoverPet(empresa.getClientes)
      removerPet.remover()
      break
    case 8:
      let cadastrarProdutos = new CadastrarProdutos(empresa.getProdutos)
      cadastrarProdutos.cadastrar()
      break
    case 9:
      let listarProdutos = new ListagemProdutos(empresa.getProdutos)
      listarProdutos.listar()
      break
    case 10:
      let atualizarProdutos = new AtualizarProduto(empresa.getProdutos)
      atualizarProdutos.atualizar()
      break
    case 11:
      let removerProdutos = new RemoverProduto(empresa.getProdutos)
      removerProdutos.remover()
      break
    case 12:
      let cadastrarServico = new CadastrarServicos(empresa.getServicos)
      cadastrarServico.cadastrar()
      break
    case 13:
      let atualizarServico = new AtualizarServicos(empresa.getServicos)
      atualizarServico.atualizar()
      break
    case 14:
      let listarServico = new ListagemServicos(empresa.getServicos)
      listarServico.listar()
      break
    case 15:
      let removerServico = new RemoverServicos(empresa.getServicos)
      removerServico.remover()
      break
/*     case 16:
      const gerenciadorConsumo = new GerenciadorConsumo(
        gerenciadorClientes,
        gerenciadorProdutos,
        gerenciadorServicos
      )
      gerenciadorConsumo.registrarConsumo()
      break

    // switch case para listar os 10 clientes que mais consumiram produtos ou serviços
    case 17:
      const clientesMaisConsumiram = gerenciadorClientes.obterClientesQueMaisConsumiram()
      console.log("Clientes que mais consumiram produtos:")
      console.log(clientesMaisConsumiram.produtos)
      console.log("Clientes que mais consumiram serviços:")
      console.log(clientesMaisConsumiram.servicos)
      break

    // switch case para listar os serviços ou produtos mais consumidos
    case 18:
      const produtosMaisConsumidos = gerenciadorProdutos.obterProdutosMaisConsumidos()
      const servicosMaisConsumidos = gerenciadorServicos.obterServicosMaisConsumidos()
      console.log("Produtos mais consumidos:")
      console.log(produtosMaisConsumidos)
      console.log("Serviços mais consumidos:")
      console.log(servicosMaisConsumidos)
      break

    // switch case para listar os serviços ou produtos mais consumidos por tipo e raça de pets
    case 19:
      const gerenciadorConsumoPorPet = new GerenciadorConsumoPorPet(
        gerenciadorClientes,
        gerenciadorProdutos,
        gerenciadorServicos
      )
      gerenciadorConsumoPorPet.listarConsumoPorPet()
      break

    // switch case para listar os 5 clientes que mais consumiram em valor
    case 20:
      const gerenciadorConsumoValor = new GerenciadorConsumoValor(
        gerenciadorClientes,
        gerenciadorProdutos,
        gerenciadorServicos
      )
      gerenciadorConsumoValor.listarClientesQueMaisConsumiramValor()
      break */
    case 0:
      execucao = false
      console.log(`Até mais`)
      break
    default:
      console.log(`Operação não entendida :(`)
  }
}
