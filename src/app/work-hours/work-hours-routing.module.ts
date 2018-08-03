import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkHoursComponent } from './work-hours.component';

const routes: Routes = [
    {
        path: '',
        component: WorkHoursComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkHoursRoutingModule { }
