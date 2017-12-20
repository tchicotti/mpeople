import { SearchProvider } from './../../providers/search/search';
import { Pesquisa } from './../../interfaces/consulta/pesquisa';
import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'consulta.html'
})
export class ConsultaPage {
  selectedItem: any
  origin: Array<Pesquisa> = []
  items: Array<Pesquisa> = []
  form: Pesquisa = { nome: '', nomeMae: ''}

  constructor(private searchProvider: SearchProvider) {
    this.initializeItems()
  }

  initializeItems() {
    this.items = this.searchProvider.getAll()
  }

  getItems(event: any) {
    // Reset items back to all of the items
    this.initializeItems()

    // set val to the value of the searchbar
    let val = event.target.value

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

  consultar(frm: Pesquisa) {
    this.initializeItems()

    let _items = this.searchProvider.search(frm)
    this.items = _items
    console.log(frm, _items)
  }

}
