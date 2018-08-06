import { Component, OnInit } from '@angular/core';

import { TimeIntervalService } from '../time-interval.service'

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})
export class DailyReportsComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor(private timeIntervalService: TimeIntervalService) { }

  ngOnInit() {
    this.timeIntervalService.endDateSource.subscribe(
      (endDate: Date) => this.endDate = endDate
    );

    this.timeIntervalService.startDateSource.subscribe(
      (startDate: Date) => this.startDate = startDate
    );
  }

}
