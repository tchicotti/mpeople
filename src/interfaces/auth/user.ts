export class User {
  id: number;
  nome: string;
  descricao: string;
  pessoaId: number;
  dadosCompletos: any;

  constructor(dados: any) {
    this.id         = dados.Id;
    this.nome       = dados.NomeCompleto;
    this.descricao  = dados.Descricao;
    this.pessoaId   = dados.PessoaId;
  }

  public toString = (): string => {
    return `Id:${this.id}|Nome:${this.nome}|Descricao:${this.descricao}|PessoaId:${this.pessoaId}`;
  }
}