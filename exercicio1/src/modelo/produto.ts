export default class Produto {
    public nome!: string
    public valor!: number
    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
    }

    public get nomeProduto(): string {
        return this.nome
    }

    public get valorProduto(): number {
        return this.valor
    }
}