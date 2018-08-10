import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { ProjectsReportsComponent } from './projects-reports/projects-reports.component';
import { IncompleteRecordsReportComponent } from './incomplete-records-report/incomplete-records-report.component';
import { WorktimeReportComponent } from './worktime-report/worktime-report.component';


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
      },
      {
        path: 'incomplete',
        component: IncompleteRecordsReportComponent
      },
      {
        path: 'worktime',
        component: WorktimeReportComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
