import { Component, OnInit } from '@angular/core';

import { TimeIntervalService } from '../time-interval.service';

@Component({
  selector: 'app-projects-reports',
  templateUrl: './projects-reports.component.html',
  styleUrls: ['./projects-reports.component.scss']
})
export class ProjectsReportsComponent implements OnInit {

  constructor(private timeIntervalService: TimeIntervalService) { }

  startDate: Date;
  endDate: Date;

  ngOnInit() {
    this.timeIntervalService.endDateSource.subscribe(
      (endDate: Date) => this.endDate = endDate
    );

    this.timeIntervalService.startDateSource.subscribe(
      (startDate: Date) => this.startDate = startDate
    );
  }

}
