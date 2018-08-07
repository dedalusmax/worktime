import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { HttpBaseService } from './http-base.service';
import { WorkTime } from '../models/work-time';
import { WorkRecord } from '../models/work-record';


@Injectable({
  providedIn: 'root'
})
export class ReportService extends HttpBaseService<WorkTime>{

  constructor(http: HttpClient) { 
    super(http, "api/workTimes");
  }

  private workDaysUrl = 'api/workTimes';

  getWorkRecordsInPeriod(startDate: Date, endDate: Date): Observable<object[]> {
    return of(
      [
        {
          workdate: new Date(2018,8,2,0,0,0),
          projectName : "Ime projekta",
          projectId: 11,
          hours: 3,
          comment: ""
        },
        {
          workdate: new Date(2018,8,2,0,0,0),
          projectName : "Jako dobar projekt",
          projectId: 12,
          hours: 5,
          comment: "nemam"
        },
        {
          workdate: new Date(2018,8,3,0,0,0),
          projectName : "Jako dobar projekt",
          projectId: 12,
          hours: 8,
          comment: "ovo nije komentar"
        },
        {
          workdate: new Date(2018,8,4,0,0,0),
          projectName : "The Projekt",
          projectId: 13,
          hours: 8,
          comment: "zasto pisem komentare"
        }
      ]
    );
  }
  
  getWorkRecordsInPeriodByProjects(fromDate: Date, toDate: Date): Observable<object[]>{
    return of([
      {
        projectId: 11,
        projectName: "Ime projekta",
        hours: 148
      },
      {
        projectId: 12,
        projectName: "Jako dobar projekt",
        hours: 80
      },
      {
        projectId: 13,
        projectName: "The Projekt",
        hours: 72
      }
    ]);
  }

  getIncompleteDaysInPeriod(fromDate: Date, toDate: Date) : Observable<object[]>{
    return of([
      {
        workdate: new Date(2018,8,5)
      },
      {
        workdate: new Date(2018,8,2)
      },
      {
        workdate: new Date(2018,8,3)
      }
    ]); 
  }

  getWorkTimeInPeriod(fromDate: Date, toDate: Date) : Observable<object[]>{
    return of([
      {
        workdate: new Date(2018,8,2,0,0,0),
        startTime: new Date(2018,8,2,8,0,0),
        endTime: new Date(2018,8,2,16,0,0)
      },
      {
        workdate: new Date(2018,8,3,0,0,0),
        startTime: new Date(2018,8,3,8,0,0),
        endTime: new Date(2018,8,3,16,0,0)
      },
      {
        workdate: new Date(2018,8,2,0,0,0),
        startTime: new Date(2018,8,2,7,55,0),
        endTime: new Date(2018,8,2,15,55,0)
      }
    ]);
  }

}
