import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil1PageRoutingModule } from './perfil1-routing.module';

import { Perfil1Page } from './perfil1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil1PageRoutingModule
  ],
  declarations: [Perfil1Page]
})
export class Perfil1PageModule {}
