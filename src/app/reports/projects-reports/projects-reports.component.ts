import { Component, OnInit } from '@angular/core';

import { TimeIntervalService } from '../time-interval.service';

import { WorkRecord } from '../../shared/models/work-record';


// TODO brisati
const workRecords: WorkRecord[] = 
[
  {
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
  }
];

@Component({
  selector: 'app-projects-reports',
  templateUrl: './projects-reports.component.html',
  styleUrls: ['./projects-reports.component.scss']
})
export class ProjectsReportsComponent implements OnInit {

  chartData: any;
  tableData: any;

  constructor(private timeIntervalService: TimeIntervalService) { 
    this.chartData = {
      labels: ['Projekt A','Projekt B','Projekt C'],
      datasets: [
          {
              data: [48, 4, 12],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }

  startDate: Date;
  endDate: Date;

  ngOnInit() {
    this.timeIntervalService.endDateSource.subscribe(
      (endDate: Date) => this.endDate = endDate
    );

    this.timeIntervalService.startDateSource.subscribe(
      (startDate: Date) => this.startDate = startDate
    );

    this.computeData(workRecords);
  }

  computeData(workRecords: WorkRecord[]) {
    //TODO
    const reducedData = workRecords.reduce<any>((state, workRecord) => {
      if( state[workRecord.projectId] ) {
        state[workRecord.projectId].hours += workRecord.hours;
      } else {
        state[workRecord.projectId].hours = workRecord.hours;
      }
    }, {});

    console.log(reducedData);
    
  }

  download() {
    // TODO
  }

}
