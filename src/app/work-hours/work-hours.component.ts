import { InMemoryDataService } from "../shared/services/in-memory-data.service";
import { ProjectsService } from "../shared/services/projects.service";

import { Component, OnInit } from '@angular/core';

import { DefaultDateService } from './default-date.service';
import { WorkRecordService } from "../shared/services/work-record.service";
import { WorkRecord } from "../shared/models/work-record";

@Component({
  selector: 'work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.scss']
})
export class WorkHoursComponent implements OnInit {

  projects: any;
  projectsTest: any;

  workRecords: Array<WorkRecord>;
  dateToday: Date;

  constructor(
    private projectService: ProjectsService,
    private defaultDateService: DefaultDateService,
    private workRecordService: WorkRecordService
  ) { }

  ngOnInit() {
    this.projectsTest = [];
    this.projectService.getAll()
      .subscribe((items: Array<any>) => {
        this.projects = items;
        this.projects.forEach(project => {
          this.projectsTest.push(
            {label : project.name, value: project.id }
          );
        });
      });
      console.log(this.projects);
      this.defaultDateService.dateTodaySource.subscribe(
        (dateToday: Date) => this.dateToday = dateToday
      );
  }  
  setDateToday() {
    this.defaultDateService.sendDateToday(this.dateToday);   
  }
}
