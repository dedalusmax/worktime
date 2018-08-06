import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { TimeIntervalService } from './time-interval.service';

import { ReportingRoutingModule } from './reports-routing.module';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { ProjectsReportsComponent } from './projects-reports/projects-reports.component';
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabMenuModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    ReportingRoutingModule
  ],
  declarations: [
    DailyReportsComponent, 
    ProjectsReportsComponent, 
    ReportsComponent
  ],
  providers: [TimeIntervalService]
})
export class ReportsModule { }
