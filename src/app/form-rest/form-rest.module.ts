import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRestPageRoutingModule } from './form-rest-routing.module';

import { FormRestPage } from './form-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRestPageRoutingModule
  ],
  declarations: [FormRestPage]
})
export class FormRestPageModule {}
