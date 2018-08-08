import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service'
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const COLORS = [
  "#66c2a5",
  "#fc8d62",
  "#8da0cb",
  "#e78ac3",
  "#a6d854",
  "#ffd92f",
  "#e5c494",
  "#b3b3b3"
];

const COLORS_HOVER = [
  "#b3e2cd",
  "#fdcdac",
  "#cbd5e8",
  "#f4cae4",
  "#e6f5c9",
  "#fff2ae",
  "#f1e2cc",
  "#cccccc"
];

@Component({
  selector: 'app-projects-reports',
  templateUrl: './projects-reports.component.html',
  styleUrls: ['./projects-reports.component.scss']
})
export class ProjectsReportsComponent implements OnInit {

  projectRecords: object[];
  totalHours: number = 0;

  chartOptions = {
    legend: {
      display: false
    }
  };

  colors = COLORS;

  chartData: object;
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
        return this.reportService.getWorkRecordsInPeriodByProjects(startDate, endDate);
      })
    ).subscribe(data => {
      this.projectRecords = data;
      this.totalHours = data.reduce<number>( (sum, record:{hours:number}) => sum + record.hours, 0);
      this.chartData = {
        labels: data.map((d: {projectName:string})=> d.projectName),
        datasets: [
          {
            data: data.map((d: {hours:number})=> d.hours),
            backgroundColor: COLORS,
            hoverBackgroundColor: COLORS_HOVER
          }
        ]
      }
    });
  }




  downloadData(): void {
    //TODO    
  }

}
