import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRestPage } from './form-rest.page';

const routes: Routes = [
  {
    path: '',
    component: FormRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRestPageRoutingModule {}
