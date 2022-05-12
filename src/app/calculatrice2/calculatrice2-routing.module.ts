import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Calculatrice2Page } from './calculatrice2.page';

const routes: Routes = [
  {
    path: '',
    component: Calculatrice2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calculatrice2PageRoutingModule {}
