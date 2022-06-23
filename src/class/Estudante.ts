export class Estudante {
  public id: string;
  public nome: string;
  public email: string;
  public data_nasc: string;
  public turma_id: string;

  constructor(
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
  ) {
    this.id = String(Date.now());
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
  }

  public pegarIdade(): number {
    const [ano, mes, dia] = this.data_nasc.split("-");
    const data_nasc = new Date(Number(ano), Number(mes), Number(dia));
    const idade = new Date().getFullYear() - data_nasc.getFullYear();
    return idade;
  }
}
