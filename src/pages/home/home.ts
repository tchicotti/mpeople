import { NativeStorage } from '@ionic-native/native-storage';
import { User } from './../../interfaces/auth/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as QrCode from 'qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  qrCode: string;
  newCode: string;
  baseImage = 'https://www.mitraonline.com.br/central/modulos/atendimento/arquivos/';


  constructor(public navCtrl: NavController, private storage: NativeStorage) {
    this.storage.getItem('usuario').then(result => {
      this.user = result;
      console.log(result);
      this.qrCode = this.user.toString();
      QrCode.toDataURL(this.user.toString(), (err, url) => this.newCode = url);
    });
  }

}
