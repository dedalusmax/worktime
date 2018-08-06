import { Component, OnInit } from '@angular/core';

import { WorkDayService } from '../../shared/services/work-day.service';
import { WorkDay } from '../../shared/models/work-day';

import { TimeIntervalService } from '../time-interval.service';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})
export class DailyReportsComponent implements OnInit {

  startDate: Date = null;
  endDate: Date = null;

  workDays: WorkDay[] = [];

  constructor(
    private timeIntervalService: TimeIntervalService, 
    private workDaysService: WorkDayService
  ) { }

  ngOnInit() {
    this.timeIntervalService.endDateSource.subscribe(
      (endDate: Date) => {
        this.endDate = endDate;
        this.loadWorkDays();
      }
    );

    this.timeIntervalService.startDateSource.subscribe(
      (startDate: Date) => {
        this.startDate = startDate;
        this.loadWorkDays();
      }
    );
  }

  loadWorkDays(): void {
    if (this.startDate && this.endDate) {
      this.workDaysService.getWorkDaysByDate(this.startDate, this.endDate)
        .subscribe(
          workDays => this.workDays = workDays);
    }
  }

  downloadData(): void {

  }

}

