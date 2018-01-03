import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { User } from './../../interfaces/auth/user';

@Injectable()
export class AuthServiceProvider {
  currentUser: User

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Por favor informe o usuário e senha de acesso.")
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "ssampaio" && credentials.email === "ssampaio@gmail.com")
        this.currentUser = new User('Sara Bresch Sampaio', 'ssampaio@gmail.com')

        this.currentUser.foto = "https://i.pinimg.com/736x/1a/69/0f/1a690f398ee672eb930ada76e761d77b--sara-sampaio-instagram-instagram-models.jpg"
        this.currentUser.dataNascimento = "07/11/1991"
        this.currentUser.filiacao = { filiacao1: "Jose Aldo Caglomiato Sampaio", filiacao2: "Maria Clara Lures Bresch Sampaio" }
        this.currentUser.sexo = "Feminino"


        observer.next(access);
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    this.currentUser = new User('Sara Bresch Sampaio', 'ssampaio@gmail.com')

    this.currentUser.foto = "https://i.pinimg.com/736x/1a/69/0f/1a690f398ee672eb930ada76e761d77b--sara-sampaio-instagram-instagram-models.jpg"
    this.currentUser.dataNascimento = "23/12/1991"
    this.currentUser.filiacao = { filiacao1: "Jose Aldo Caglomiato Sampaio", filiacao2: "Maria Clara Lures Bresch Sampaio" }
    this.currentUser.sexo = "Feminino"

    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}