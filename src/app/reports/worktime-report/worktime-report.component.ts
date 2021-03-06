import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { WorkTimeReport } from '../../shared/models/report/worktime-report';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-worktime-report',
  templateUrl: './worktime-report.component.html',
  styleUrls: ['./worktime-report.component.scss']
})
export class WorktimeReportComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  workTimeRecords: WorkTimeReport[];

  headersCSV = [
    {
      header: 'Date',
      field: 'workdate'
    },
    {
      header: 'Start Time',
      field: 'startTime'
    },
    {
      header: 'End Time',
      field: 'endTime'
    }
  ];


  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportsService: ReportService,
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
        return this.reportsService.getWorkTimeInPeriod(this.userService.userInfo.id, startDate, endDate);
      })
    ).subscribe(data => this.workTimeRecords = data);
  }

  exportCSVFormat({data, field}) {
    if (field === 'workdate') {
      const day = data.getDate();
      const month = 1 + data.getMonth();
      const year = data.getFullYear();
      return `${day}.${month}.${year}.`;
    }

    if (field === 'startTime' || field === 'endTime') {
      const minutes = data.getMinutes();
      const hours = data.getHours();
      return `${hours}:${minutes}`;
    }

    return data;
  }
}
