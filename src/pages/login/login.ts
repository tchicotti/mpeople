import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading, MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  formLogin = { usuario: 'chicotti.tafarel', password: '123456'};

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private menu: MenuController, private storage: NativeStorage) {
    this.menu.enable(false);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.formLogin).then(user => {
      this.storage.setItem('usuario', user);
      this.menu.enable(true);
      this.nav.setRoot(HomePage);
    }).catch(err => this.showError(err) );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }

}
