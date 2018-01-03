import { SoapServiceProvider } from './../../providers/soap-service/soap-service';
import { User } from './../../interfaces/auth/user';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as QrCode from 'qrcode';
import * as xml2js from "xml2js";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  qrCode: string;
  newCode: string;


  constructor(public navCtrl: NavController, private auth: AuthServiceProvider, private soap: SoapServiceProvider) {
    this.user = this.auth.getUserInfo();

    this.qrCode = this.user.toString();

    QrCode.toDataURL(this.user.toString(), (err, url) => this.newCode = url);

    this.initializing(989);
  }

  initializing(codPessoa: number) {
    // https://www.mitraonline.com.br/central/modulos/atendimento/arquivos/<<nome>>
    this.soap.consultarPessoa(codPessoa).subscribe(res => {
      const parser = new xml2js.Parser({ explicitArray: false });
      var json = parser.parseString(res, (err, json) => {
        let retorno = json.consultar_pessoa_fisica_resposta.pessoa;
        console.log(retorno)
      });
    });
  }

  calcularIdade(dataNascimento): string {
    let novaData = dataNascimento.split('/');
    var hoje = new Date();
    var nascimento = new Date(`${novaData[2]}-${novaData[1]}-${novaData[0]}`);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    var m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return `${idade} ano` + (idade > 1 ? 's' : '');
  }
}
