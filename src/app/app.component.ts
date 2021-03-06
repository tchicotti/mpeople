import { ConvivioPage } from './../pages/convivio/convivio';
import { ExtratoServicosPage } from './../pages/extrato-servicos/extrato-servicos';
import { DocumentosPage } from './../pages/documentos/documentos';
import { ContatosEnderecosPage } from './../pages/contatos-enderecos/contatos-enderecos';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Pages } from '../interfaces/general/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  showLevel1 = null;

  pages: Array<Pages>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthServiceProvider, private menu: MenuController) {
    this.initializeApp();

    // let docChildrens = [
    //   new Pages('Prioritários', DocumentosPage),
    //   new Pages('Secundários', DocumentosSecundariosPage),
    //   new Pages('Outros', DocumentosOutrosPage)
    // ];

    // used for an example of ngFor and navigation
    this.pages = [
      new Pages('Home', HomePage, 'home'),
      // new Pages('Documentos', DocumentosP, 'document', null, docChildrens),
      new Pages('Documentos', DocumentosPage, 'document'),
      new Pages('Informações', ContatosEnderecosPage, 'document'),
      new Pages('Extrato de Serviços', ExtratoServicosPage, 'analytics'),
      new Pages('Convívio', ConvivioPage, 'people'),
      new Pages('Logout', null, 'exit', { methodName: 'logout', methodParam: null })
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: Pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.close();
    if (page.command)
      this[page.command.methodName](page.command.methodParam);
    else if (page.component)
      this.nav.setRoot(page.component);
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage);
    });
  }
}
