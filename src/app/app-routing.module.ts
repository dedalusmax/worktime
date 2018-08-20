import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkHoursModule } from './work-hours/work-hours.module';
import { ReportsModule } from './reports/reports.module';
import { AuthGuard } from './shared/services/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'workhours',
    loadChildren: () => WorkHoursModule,
    canActivateChild : [AuthGuard]
  },
  {
    path: 'reports',
    loadChildren: () => ReportsModule,
    canActivateChild : [AuthGuard]
  },
  {
    path: '',
    component: AppComponent,
    redirectTo: 'workhours',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
