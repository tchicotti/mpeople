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
  formLogin = { email: 'ssampaio@gmail.com', password: 'ssampaio', rememberMe: true };

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private menu: MenuController, private storage: NativeStorage) {
    this.menu.enable(false)

    storage.getItem('formLogin')
      .then(x => {
        if (null != x || undefined != x)
          this.formLogin = x
      })
      .catch(err => console.log('Gerou o erro: ', err))
  }

  public login() {
    this.showLoading()
    this.auth.login(this.formLogin).subscribe(allowed => {
      if (allowed) {
        if (this.formLogin.rememberMe) {
          this.storage.setItem('formLogin', this.formLogin)
          .then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
          );
        }
        this.menu.enable(true)
        this.nav.setRoot(HomePage)
      } else {
        this.showError("Access Denied")
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present()
  }

  showError(text) {
    this.loading.dismiss()

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt)
  }

}
