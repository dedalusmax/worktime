import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { COLORS, COLORS_HOVER } from './COLORS';

@Component({
  selector: 'app-projects-reports',
  templateUrl: './projects-reports.component.html',
  styleUrls: ['./projects-reports.component.scss']
})
export class ProjectsReportsComponent implements OnInit {

  projectRecords: object[];
  totalHours = 0;

  chartOptions = {
    legend: {
      display: false
    }
  };

  colors = COLORS;
  chartData: object;

  startDate: Date;
  endDate: Date;

  headersCSV = [
    {
      header: 'Project',
      field: 'projectName'
    },
    {
      header: 'Hours',
      field: 'hours'
    }
  ];

  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportService: ReportService) { }

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
      this.totalHours = data.reduce<number>( (sum, record: {hours: number}) => sum + record.hours, 0);
      this.chartData = {
        labels: data.map((d: {projectName: string}) => d.projectName),
        datasets: [
          {
            data: data.map((d: {hours: number}) => d.hours),
            backgroundColor: COLORS,
            hoverBackgroundColor: COLORS_HOVER
          }
        ]
      };
    });
  }

}
