export default class Servico {
    public nome!: string
    public valor!: number
    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
    }

    public get nomeServico(): string {
        return this.nome
    }

    public get valorServico(): number {
        return this.valor
    }
}