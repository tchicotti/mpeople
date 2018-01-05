
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { SearchProvider } from '../providers/search/search';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

// Pages
import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConsultaPage } from '../pages/consulta/consulta';
import { ConsultaServiceProvider } from '../providers/consulta-service/consulta-service';
import { ContatosEnderecosPage } from '../pages/contatos-enderecos/contatos-enderecos';
import { ExtratoServicosPage } from './../pages/extrato-servicos/extrato-servicos';
import { ConvivioPage } from './../pages/convivio/convivio';
import { DocumentosPage } from './../pages/documentos/documentos';

import { IonicImageViewerModule } from 'ionic-img-viewer';

class StorageMock extends NativeStorage {
  items = [];
  getItem(key) {
    return new Promise((resolve, reject) => {
      let valueToReturn = this.items[key]
      resolve(valueToReturn)
    })
  }

  setItem(key, values) {
    return new Promise((resolve, reject) => {
      this.items[key] = values
      resolve(true)
    })

  }
}

@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    HomePage,
    ConsultaPage,
    DocumentosPage,
    ContatosEnderecosPage,
    ConvivioPage,
    ExtratoServicosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    HomePage,
    ConsultaPage,
    DocumentosPage,
    ContatosEnderecosPage,
    ConvivioPage,
    ExtratoServicosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchProvider,
    HttpClientModule,
    AuthServiceProvider,
    {provide: NativeStorage, useClass: StorageMock},
    ConsultaServiceProvider
  ]
})
export class AppModule {}
