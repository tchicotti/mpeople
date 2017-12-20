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
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    HomePage,
    ConsultaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    HomePage,
    ConsultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchProvider,
    HttpClientModule,
    AuthServiceProvider
  ]
})
export class AppModule {}
