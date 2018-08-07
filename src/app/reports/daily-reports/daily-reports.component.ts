import { Component, OnInit } from '@angular/core';

import { WorkDayService } from '../../shared/services/work-day.service';
import { WorkRecord } from '../../shared/models/work-record';

import { TimeIntervalService } from '../time-interval.service';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})
export class DailyReportsComponent implements OnInit {

  startDate: Date = null;
  endDate: Date = null;

  workRecords: WorkRecord[] = [{
    recordId: 1,
    userId: "string",
    projectId: 12,
    workDate: new Date(2018,8,2,0,0,0),
    hours: 2,
    comment: "imam",
    fieldWork: false,
    businessTrip: false
},{
    recordId: 1,
    userId: "string",
    projectId: 12,
    workDate: new Date(2018,8,3,0,0,0),
    hours: 2,
    comment: "imam",
    fieldWork: false,
    businessTrip: false
},{
    recordId: 1,
    userId: "string",
    projectId: 12,
    workDate: new Date(2018,8,3,0,0,0),
    hours: 2,
    comment: "imam",
    fieldWork: false,
    businessTrip: false
},{
    recordId: 1,
    userId: "string",
    projectId: 12,
    workDate: new Date(2018,8,5,0,0,0),
    hours: 2,
    comment: "imam",
    fieldWork: false,
    businessTrip: false
},{
  recordId: 2,
  userId: "string",
  projectId: 13,
  workDate: new Date(2018,8,5,0,0,0),
  hours: 6,
  comment: "nemam",
  fieldWork: false,
  businessTrip: false
}
,{
  recordId: 2,
  userId: "string",
  projectId: 19,
  workDate: new Date(2018,8,5,0,0,0),
  hours: 1,
  comment: "nkdakdaskdd",
  fieldWork: false,
  businessTrip: false
}
,{
  recordId: 3,
  userId: "string",
  projectId: 13,
  workDate: new Date(2018,8,6,0,0,0),
  hours: 8,
  comment: "nemam",
  fieldWork: false,
  businessTrip: true
}];

  rowGroupMetadata = [];


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

    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = [];
    if (!this.workRecords || this.workRecords.length == 0)
      return;

    let lastFound = 0;

    for (let i = 0; i < this.workRecords.length; i++) {
      const workRecord = this.workRecords[i];
      if (i == 0) {
        this.rowGroupMetadata[0] = 1;
      } else {
        if(workRecord.workDate.getTime() == this.workRecords[i-1].workDate.getTime()) {
          this.rowGroupMetadata[lastFound]++;
          this.rowGroupMetadata[i] = 0;
        } else {
          lastFound = i;
          this.rowGroupMetadata[i] = 1;
        }
      }
    }
  }

  loadWorkDays(): void {
    if (this.startDate && this.endDate) {
      //TODO
    }
  }

  downloadData(): void {
    //TODO
  }

}

