import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsenceListComponent } from './absence-list.component';

const routes: Routes = [
  {
    path: '',
    component: AbsenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsenceListRoutingModule { }
