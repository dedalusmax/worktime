import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { TimeIntervalService } from '../time-interval.service';

import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProjectReport } from '../../shared/models/report/project-report';

import { COLORS, COLORS_HOVER } from './COLORS';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-projects-reports',
  templateUrl: './projects-reports.component.html',
  styleUrls: ['./projects-reports.component.scss']
})
export class ProjectsReportsComponent implements OnInit {

  projectRecords: ProjectReport[];
  totalHours = 0;

  chartOptions = {
    legend: {
      display: false
    }
  };

  colors = COLORS;
  hoverColors = COLORS_HOVER;
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
    },
    {
      header: 'Percentage',
      field: 'percentage'
    }
  ];

  constructor(
    private timeIntervalService: TimeIntervalService,
    private reportService: ReportService,
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
        return this.reportService.getWorkRecordsInPeriodByProjects(this.userService.userInfo.id, startDate, endDate);
      })
    ).subscribe(data => {
      this.totalHours = data.reduce<number>( (sum, record: {hours: number}) => sum + record.hours, 0);
      this.projectRecords = data.map(record => Object.assign({}, record, {percentage: record.hours / this.totalHours}));
      this.chartData = {
        labels: data.map(d => d.projectName),
        datasets: [
          {
            data: data.map(d => d.hours),
            backgroundColor: this.colors,
            hoverBackgroundColor: this.hoverColors
          }
        ]
      };
    });
  }

  exportCSVFormat({data, field}) {
    if (field === 'percentage') {
      return (100 * data).toFixed(2).replace('.', ',');
    }

    if (field === 'hours') {
      return data.toFixed(2).replace('.', ',');
    }

    return data;
  }

}
