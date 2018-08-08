import { InMemoryDataService } from "../shared/services/in-memory-data.service";
import { ProjectsService } from "../shared/services/projects.service";

import { Component, OnInit } from '@angular/core';
import { DateTodayService } from "./date-today.service";

@Component({
  selector: 'work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.scss']
})
export class WorkHoursComponent implements OnInit {

  projects: any;
  projectsTest: any; 

  dateToday: Date;

  constructor(
    private projectService: ProjectsService,
    private dateTodayService: DateTodayService
  ) { }

  ngOnInit() {
    this.projectsTest = [];
    this.projectService.getAll()
      .subscribe((items: Array<any>) => {
        this.projects = items;
        this.projects.forEach(project => {
          this.projectsTest.push(
            {label : project.name, value: project.id }
          )
        });
      })
      console.log(this.projects);
      this.dateTodayService.DateTodaySource.subscribe(
        (dateToday: Date) => this.dateToday = dateToday
      );
  }
  
  setDateToday() {
    this.dateTodayService.sendDateToday(this.dateToday);   
  }

}
