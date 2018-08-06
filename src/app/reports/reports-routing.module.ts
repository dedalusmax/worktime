import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { ProjectsReportsComponent } from './projects-reports/projects-reports.component';

const routes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            {
                path: '',
                redirectTo: 'daily'
            },
            {
                path: 'daily',
                component: DailyReportsComponent,
            },
            {
                path: 'projects',
                component: ProjectsReportsComponent
            }
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
