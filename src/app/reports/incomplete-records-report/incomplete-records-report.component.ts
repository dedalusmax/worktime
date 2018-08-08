import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-incomplete-records-report',
  templateUrl: './incomplete-records-report.component.html',
  styleUrls: ['./incomplete-records-report.component.scss']
})
export class IncompleteRecordsReportComponent implements OnInit {

  incompleteRecords: any;

  headersCSV = [
    {
      header: 'Date',
      field: 'workdate'
    }
  ];


  startDate: Date;
  endDate: Date;

  exportCSVFormat({data, field}) {
    if (field === 'workdate') {
      const day = data.getDate();
      const month = 1 + data.getMonth();
      const year = data.getFullYear();
      return `${day}.${month}.${year}.`;
    }
    return data;
  }

  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportService: ReportService) { }

  ngOnInit() {
    combineLatest(
      this.timeIntervalService.startDateSource,
      this.timeIntervalService.endDateSource
    ).pipe(
      switchMap(([startDate, endDate]) => {
        this.startDate = startDate;
        this.endDate = endDate;
        return this.reportService.getIncompleteDaysInPeriod(startDate, endDate);
      })
    ).subscribe(data => this.incompleteRecords = data);
  }


}
