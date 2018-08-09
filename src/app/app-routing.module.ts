import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkHoursModule } from './work-hours/work-hours.module';
import { ReportsModule } from './reports/reports.module';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'workhours',
    loadChildren: () => WorkHoursModule,
//    canActivateChild : [AuthGuard]
  },
  {
    path: 'reports',
    loadChildren: () => ReportsModule,
//    canActivateChild : [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => WorkHoursModule,
//    canActivateChild : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
