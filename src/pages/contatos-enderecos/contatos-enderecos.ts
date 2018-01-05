import { User } from './../../interfaces/auth/user';
import { ENV } from './../../config/environment-dev';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-contatos-enderecos',
  templateUrl: 'contatos-enderecos.html',
})
export class ContatosEnderecosPage {
  nome: string;
  contatos: any;
  enderecos: Array<any>;
  necessidades: Array<any>;
  url = ENV.URL_BASE + ENV.FILES_URI;

  constructor(public navCtrl: NavController, private storage: NativeStorage) {
    this.storage.getItem('usuario').then((result: User) => {
      this.nome         = result.nome;
      this.contatos     = result.dadosCompletos.contatos;
      this.enderecos    = result.dadosCompletos.enderecos;
      this.necessidades = result.dadosCompletos.necessidades;
    });
  }

}
