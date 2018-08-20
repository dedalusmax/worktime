import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';


import { AbsenceListRoutingModule } from './absence-list-routing.module';
import { AbsenceListComponent } from './absence-list.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    AbsenceListRoutingModule
  ],
  declarations: [AbsenceListComponent]
})
export class AbsenceListModule { }
