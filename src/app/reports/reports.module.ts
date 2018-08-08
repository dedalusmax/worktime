import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';


import { TimeIntervalService } from './time-interval.service';

import { ReportingRoutingModule } from './reports-routing.module';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { ProjectsReportsComponent } from './projects-reports/projects-reports.component';
import { ReportsComponent } from './reports.component';
import { IncompleteRecordsReportComponent } from './incomplete-records-report/incomplete-records-report.component';
import { WorktimeReportComponent } from './worktime-report/worktime-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabMenuModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    ChartModule,
    ReportingRoutingModule
  ],
  declarations: [
    DailyReportsComponent,
    ProjectsReportsComponent,
    ReportsComponent, IncompleteRecordsReportComponent, WorktimeReportComponent
  ],
  providers: [TimeIntervalService]
})
export class ReportsModule { }
