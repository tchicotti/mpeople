import { ConsultaServiceProvider } from './../consulta-service/consulta-service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { User } from './../../interfaces/auth/user';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(public consulta: ConsultaServiceProvider, private storage: NativeStorage) {}

  public login(credentials) {
    return this.consulta.login(credentials.usuario, credentials.password).then( (user) => {
      if (user) {
        return this.consulta.consultarPessoa(user['PessoaId']).then(data => {
          this.currentUser = new User(user);
          this.currentUser.dadosCompletos = data;
          return Promise.resolve(this.currentUser);
        });
      } else {
        return Promise.reject("Usuário não encontrado");
      }
    });
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.storage.clear();
      observer.next(true);
      observer.complete();
    });
  }
}
