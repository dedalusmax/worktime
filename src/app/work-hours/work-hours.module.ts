import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { WorkHoursComponent } from './work-hours.component';

import { WorkHoursRoutingModule } from './work-hours-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

import { DefaultDateService } from './default-date.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkHoursRoutingModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    TableModule
  ],
  declarations: [WorkHoursComponent],
  providers: [DefaultDateService]
})
export class WorkHoursModule {

  date: Date;

  startTime: Time;

  endTime: Time;

  project: string;

  comments: string;

}
