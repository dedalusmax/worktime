import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkHoursModule } from './work-hours/work-hours.module';
import { ReportsModule } from './reports/reports.module';

const routes: Routes = [
  { 
    path: 'workhours', 
    loadChildren: () => WorkHoursModule
  },
  { 
    path: 'reports', 
    loadChildren: () => ReportsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
