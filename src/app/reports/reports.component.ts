import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

import {TimeIntervalService} from './time-interval.service';
import { _localeFactory } from '../../../node_modules/@angular/core/src/application_module';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  items: MenuItem[];

  startDate: Date;
  endDate: Date;

  constructor(private timeIntervalService: TimeIntervalService) { }

  ngOnInit() {
    this.items = [
      {label: 'Daily reports', routerLink: 'daily'},
      {label: 'Projects reports', routerLink: 'projects'}
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
    console.log("end " + this.endDate);
  }

  setStartDate() {
    this.timeIntervalService.sendStartDate(this.startDate);
    console.log("start " + this.startDate);
    
  }

}
