import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil1Page } from './perfil1.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil1PageRoutingModule {}
