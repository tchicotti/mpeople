import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatosEnderecosPage } from './contatos-enderecos';

@NgModule({
  declarations: [
    ContatosEnderecosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatosEnderecosPage),
  ],
})
export class ContatosEnderecosPageModule {}
