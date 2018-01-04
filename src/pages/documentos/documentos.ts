import { NativeStorage } from '@ionic-native/native-storage';
import { ENV } from './../../config/environment-dev';
import { User } from './../../interfaces/auth/user';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class DocumentosPage {
  user: User;
  url = ENV.URL_BASE + ENV.FILES_URI;


  constructor(public navCtrl: NavController, private storage: NativeStorage) {
    this.storage.getItem('usuario').then(result => {
      this.user = result;
      console.log(this.user)
    });
  }
}
