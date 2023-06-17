import Entrada from "../io/entrada"
import Cadastro from "../negocio/cadastro"
import Servico from "../modelo/servico"

export default class CadastrarServicos extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço.`);

        let nomeServico = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let valorServico = this.entrada.receberNumero(`Por favor, informe o valor do serviço: R$ `)

        let servico = new Servico(nomeServico, valorServico)

        let confirmacao = this.entrada.receberTexto(
            `Deseja cadastrar o serviço ${nomeServico}, por R$ ${valorServico}? (S/N): `
          );

        if (confirmacao === "S") {
            this.servicos.push(servico)
            console.log(`\nServiço cadastrado! :)`);
        } else if (confirmacao === "N") {
            console.log(`\nOperação abortada. :)`);
        } else {
            console.log(`Resposta inválida.`);
        }
    }
}
