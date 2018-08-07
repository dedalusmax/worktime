import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service'
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

  startDate: Date;
  endDate: Date;

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
        return this.reportService.getIncompleteDaysInPeriod(startDate, endDate);
      })
    ).subscribe(data => this.incompleteRecords = data);
  }

  downloadData(): void {
    //TODO
  }

}
