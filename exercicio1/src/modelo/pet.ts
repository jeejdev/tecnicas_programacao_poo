export default class Pet {
  private nomePet: string;
  private tipo: string;
  private raca: string;
  private genero: string;

  constructor(nomePet: string, raca: string, genero: string, tipo: string) {
    this.nomePet = nomePet;
    this.raca = raca;
    this.genero = genero;
    this.tipo = tipo;
  }

  public get getNomePet(): string {
    return this.nomePet;
  }

  public get getRaca() {
    return this.raca;
  }

  public get getGenero() {
    return this.genero;
  }
  
  public get getTipo() {
    return this.tipo;
  }
}
