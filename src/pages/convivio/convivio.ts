import { ENV } from './../../config/environment-dev';
import { User } from './../../interfaces/auth/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-convivio',
  templateUrl: 'convivio.html',
})
export class ConvivioPage {

  nome: string;
  convivios: Array<any>;
  url = ENV.URL_BASE + ENV.FILES_URI;

  constructor(public navCtrl: NavController, private storage: NativeStorage) {
    this.storage.getItem('usuario').then((result: User) => {
      this.nome         = result.nome;
      this.convivios = result.dadosCompletos.convivios;
    });
  }
}
