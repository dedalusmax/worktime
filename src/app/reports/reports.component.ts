import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { TimeIntervalService } from './time-interval.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  items: MenuItem[] = [];

  startDate: Date;
  endDate: Date;

  constructor(private timeIntervalService: TimeIntervalService) { }

  ngOnInit() {
    this.items = [
      {label: 'Daily report', routerLink: 'daily'},
      {label: 'Projects report', routerLink: 'projects'},
      {label: 'Worktime report', routerLink: 'worktime'},
      {label: 'Incomplete records', routerLink: 'incomplete'}
    ];

    this.timeIntervalService.endDateSource.subscribe(
      (endDate: Date) => this.endDate = endDate
    );

    this.timeIntervalService.startDateSource.subscribe(
      (startDate: Date) => this.startDate = startDate
    );
  }

  setEndDate() {
    this.timeIntervalService.sendEndDate(this.endDate);
  }

  setStartDate() {
    this.timeIntervalService.sendStartDate(this.startDate);  
  }

}
