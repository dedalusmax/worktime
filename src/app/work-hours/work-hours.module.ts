import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { WorkHoursComponent } from './work-hours.component';

import { WorkHoursRoutingModule } from './work-hours-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { DateTodayService } from "./date-today.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkHoursRoutingModule,
    CalendarModule,
    DropdownModule, 
    CheckboxModule
  ],
  declarations: [WorkHoursComponent],
  providers: [DateTodayService]
})
export class WorkHoursModule { 

  date: Date;

  startTime: Time;

  endTime: Time;

  project: string;

  comments: string;

}
