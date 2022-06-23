export class Turma {
  public id: string;
  public nome: string;
  public modulo: number;

  constructor(nome: string, modulo: number) {
    this.id = String(Date.now());
    this.nome = nome;
    this.modulo = modulo;
  }
}
