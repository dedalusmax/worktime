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

  rowGroupingMetadata = [];

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
    ).subscribe(data => {
      this.dailyRecords = data;
      this.updateRowGroupMetaData();
    });
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

  recordDatesAreEqual(firstRecord: DailyReport, secondRecord: DailyReport): boolean {
    const firstDate: Date = firstRecord.workdate;
    const secondDate: Date = secondRecord.workdate;

    if (firstDate.getFullYear() !== secondDate.getFullYear()) {
      return false;
    }

    if (firstDate.getMonth() !== secondDate.getMonth()) {
      return false;
    }

    if (firstDate.getDay() !== secondDate.getDay()) {
      return false;
    }

    return true;
  }

  updateRowGroupMetaData(): void {
    this.rowGroupingMetadata = [];
    if (!this.dailyRecords || this.dailyRecords.length === 0) {
      return;
    }

    let lastFound = 0;

    for (let i = 0; i < this.dailyRecords.length; i++) {
      const dailyRecord = this.dailyRecords[i];
      if (i === 0) {
        this.rowGroupingMetadata[0] = 1;
      } else {
        if (this.recordDatesAreEqual(dailyRecord, this.dailyRecords[i - 1])) {
          this.rowGroupingMetadata[lastFound]++;
          this.rowGroupingMetadata[i] = 0;
        } else {
          lastFound = i;
          this.rowGroupingMetadata[i] = 1;
        }
      }
    }
  }
}

