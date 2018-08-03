import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHoursComponent } from './work-hours.component';

import { WorkHoursRoutingModule } from './work-hours-routing.module'; 

@NgModule({
  imports: [
    CommonModule,
    WorkHoursRoutingModule
  ],
  declarations: [WorkHoursComponent]
})
export class WorkHoursModule { }
