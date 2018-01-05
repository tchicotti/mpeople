import { User } from './../../interfaces/auth/user';
import { ENV } from './../../config/environment-dev';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the ExtratoSocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extrato-servicos',
  templateUrl: 'extrato-servicos.html',
})
export class ExtratoServicosPage {

  nome: string;
  atendimentos: Array<any>;
  protocoloAnterior: null;
  url = ENV.URL_BASE + ENV.FILES_URI;

  constructor(public navCtrl: NavController, private storage: NativeStorage) {
    this.storage.getItem('usuario').then((result: User) => {
      this.nome         = result.nome;
      this.atendimentos = result.dadosCompletos.atendimentos;
    });
  }
}
