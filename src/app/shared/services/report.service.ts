import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getWorkRecordsInPeriod(startDate: Date, endDate: Date): Observable<WorkRecord[]> {
    return null;
  }
  
  getWorkRecordsInPeriodByProjects(fromDate: Date, toDate: Date): Observable<WorkRecord[]>{
    return null;
  }

  getIncompleteDaysInPeriod(fromDate: Date, toDate: Date) : Observable<WorkRecord[]>{
    return null;
  }

  getWorkTimeInPeriod(fromDate: Date, toDate: Date) : Observable<WorkRecord[]>{
    return null;
  }

}
