import { Pesquisa } from './../../interfaces/consulta/pesquisa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  private _data: Array<Pesquisa>

  constructor(public http: HttpClient) {
    this._data = []
    this._data.push({ nome: 'Tafarel Pereira Chicotti', nomeMae: 'Josina Paes Pereira'})
    this._data.push({ nome: 'Josina Paes Pereira', nomeMae: 'Leticia Bezerra Paes Pereira'})
    this._data.push({ nome: 'Daniel Pereira Chicotti', nomeMae: 'Josina Paes Pereira'})
    this._data.push({ nome: 'Luiz Antonio Chicotti', nomeMae: 'Angelina Rosa de Lima'})
  }

  getAll() {
    return this._data;
  }

  search(pesquisa: Pesquisa) {
    if (pesquisa.nome.length > 0 || pesquisa.nomeMae.length > 0)
      return this.getAll().filter(x => (pesquisa.nome.length > 0 && x.nome.indexOf(pesquisa.nome) != -1) || (pesquisa.nomeMae.length > 0 && x.nomeMae.indexOf(pesquisa.nomeMae) != -1))
    return this.getAll()
  }
}
