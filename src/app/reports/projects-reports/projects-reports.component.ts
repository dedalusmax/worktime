import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service'
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


// TODO brisati
const workRecords: any = 
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

  projectRecords: any;

  chartData = {
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

  tableData: any;
  
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
        return this.reportService.getWorkRecordsInPeriod(startDate, endDate);
      })
    ).subscribe(data => this.projectRecords = data);
  }


  downloadData(): void {
    //TODO
  }

}
