import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IncompleteRecordReport } from '../../shared/models/report/incomlete-record-report';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-incomplete-records-report',
  templateUrl: './incomplete-records-report.component.html',
  styleUrls: ['./incomplete-records-report.component.scss']
})
export class IncompleteRecordsReportComponent implements OnInit {

  incompleteRecords: IncompleteRecordReport[];

  headersCSV = [
    {
      header: 'Date',
      field: 'workdate'
    }
  ];

  startDate: Date;
  endDate: Date;

  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportService: ReportService,
    private userService: UserService
  ) { }

  ngOnInit() {
    combineLatest(
      this.timeIntervalService.startDateSource,
      this.timeIntervalService.endDateSource
    ).pipe(
      switchMap(([startDate, endDate]) => {
        this.startDate = startDate;
        this.endDate = endDate;
        return this.reportService.getIncompleteDaysInPeriod(this.userService.userInfo.id, startDate, endDate);
      })
    ).subscribe(data => this.incompleteRecords = data);
  }

  exportCSVFormat({data, field}) {
    if (field === 'workdate') {
      const day = data.getDate();
      const month = 1 + data.getMonth();
      const year = data.getFullYear();
      return `${day}.${month}.${year}.`;
    }
    return data;
  }
}
