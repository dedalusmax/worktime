import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DailyReport } from '../../shared/models/report/daily-report';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})
export class DailyReportsComponent implements OnInit {

  startDate: Date = null;
  endDate: Date = null;
  user: User;

  dailyRecords: DailyReport[];

  // rowGroupMetadata = [];

  headersCSV = [
    {
      header: 'Date',
      field: 'workdate'
    },
    {
      header: 'Project',
      field: 'projectName'
    },
    {
      header: 'Hours',
      field: 'hours'
    },
    {
      header: 'Comment',
      field: 'comment'
    }
  ];

  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportService: ReportService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.userInfo;
    combineLatest(
      this.timeIntervalService.startDateSource,
      this.timeIntervalService.endDateSource
    ).pipe(
      switchMap(([startDate, endDate]) => {
        this.startDate = startDate;
        this.endDate = endDate;
        return this.reportService.getWorkRecordsInPeriod(this.user.id, startDate, endDate);
      })
    ).subscribe(data => this.dailyRecords = data);
  }

  exportCSVFormat({data, field}) {
    if (field === 'workdate') {
      const day = data.getDate();
      const month = 1 + data.getMonth();
      const year = data.getFullYear();
      return `${day}.${month}.${year}.`;
    }

    if (field === 'hours') {
      return data.toFixed(2).replace('.', ',');
    }

    return data;
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
  }
  */
}

