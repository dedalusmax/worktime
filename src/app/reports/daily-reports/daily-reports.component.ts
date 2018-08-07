import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service'
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})
export class DailyReportsComponent implements OnInit {

  startDate: Date = null;
  endDate: Date = null;

  dailyRecords:any;

  //rowGroupMetadata = [];


  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportService: ReportService 
  ) { }

  ngOnInit() {
    combineLatest(
      this.timeIntervalService.startDateSource,
      this.timeIntervalService.endDateSource
    ).pipe(
      switchMap(([startDate, endDate]) => {
        this.startDate = startDate;
        this.endDate = endDate;
        return this.reportService.getWorkRecordsInPeriod(startDate, endDate);
      })
    ).subscribe(data => this.dailyRecords = data);
  }

  /*
  let-rowIndex="rowIndex"
  *ngIf="rowGroupMetadata[rowIndex] != 0" [attr.rowspan]="rowGroupMetadata[rowIndex]"
  
  updateRowGroupMetaData() {
    this.rowGroupMetadata = [];
    if (!this.workRecords || this.workRecords.length == 0)
      return;

    let lastFound = 0;

    for (let i = 0; i < this.workRecords.length; i++) {
      const workRecord = this.workRecords[i];
      if (i == 0) {
        this.rowGroupMetadata[0] = 1;
      } else {
        if(workRecord.workDate.getTime() == this.workRecords[i-1].workDate.getTime()) {
          this.rowGroupMetadata[lastFound]++;
          this.rowGroupMetadata[i] = 0;
        } else {
          lastFound = i;
          this.rowGroupMetadata[i] = 1;
        }
      }
    }
  }*/

  loadWorkDays(): void {
    if (this.startDate && this.endDate) {
      //TODO
      //this.updateRowGroupMetaData();
    }
  }

  downloadData(): void {
    //TODO  
  }

}

