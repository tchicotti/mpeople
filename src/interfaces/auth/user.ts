export class User {
  nome: string
  filiacao: { filiacao1: string, filiacao2: string }
  dataNascimento: string
  email: string
  sexo: string
  foto: string

  constructor(nome: string, email: string) {
    this.nome  = nome
    this.email = email
  }

  public toString = (): string => {
    return `Nome:${this.nome}|Filiacao1:${this.filiacao.filiacao1}|Filiacao2:${this.filiacao.filiacao2}|DataNascimento:${this.dataNascimento}|Email:${this.email}|Sexo:${this.sexo}`;
  }
}