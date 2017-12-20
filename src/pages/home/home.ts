import { User } from './../../interfaces/auth/user';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  qrCode: string;


  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo()

    this.user = new User(info['name'], info['email'])

    this.qrCode = `Nome:${this.user.name}|E-mail:${this.user.email}`
  }

}
