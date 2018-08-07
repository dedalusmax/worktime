import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service'
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-worktime-report',
  templateUrl: './worktime-report.component.html',
  styleUrls: ['./worktime-report.component.scss']
})
export class WorktimeReportComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  workTimeRecords: any;

  constructor(
    private timeIntervalService: TimeIntervalService, 
    private reportsService: ReportService
  ) { }

  ngOnInit() {
    combineLatest(
      this.timeIntervalService.startDateSource,
      this.timeIntervalService.endDateSource
    ).pipe(
      switchMap(([startDate, endDate]) => {
        this.startDate = startDate;
        this.endDate = endDate;
        return this.reportsService.getWorkRecordsInPeriod(startDate, endDate);
      })
    ).subscribe(data => this.workTimeRecords = data);
  }

  downloadData(): void {
    //TODO   
  }

}
