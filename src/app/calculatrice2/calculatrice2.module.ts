import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Calculatrice2PageRoutingModule } from './calculatrice2-routing.module';

import { Calculatrice2Page } from './calculatrice2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Calculatrice2PageRoutingModule
  ],
  declarations: [Calculatrice2Page]
})
export class Calculatrice2PageModule {}
