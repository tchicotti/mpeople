import { ExtratoSocialPage } from './../pages/extrato-social/extrato-social';
import { DependentesPage } from './../pages/dependentes/dependentes';
import { DocumentosPage } from './../pages/documentos/documentos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConsultaPage } from '../pages/consulta/consulta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchProvider } from '../providers/search/search';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { ConsultaServiceProvider } from '../providers/consulta-service/consulta-service';
import { DocumentosSecundariosPage } from '../pages/documentos-secundarios/documentos-secundarios';
import { DocumentosOutrosPage } from '../pages/documentos-outros/documentos-outros';
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
    DocumentosSecundariosPage,
    DocumentosOutrosPage,
    DependentesPage,
    ExtratoSocialPage
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
    DocumentosSecundariosPage,
    DocumentosOutrosPage,
    DependentesPage,
    ExtratoSocialPage
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
