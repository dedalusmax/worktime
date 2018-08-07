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
export class WorkTimeService extends HttpBaseService<WorkTime>{

  constructor(http: HttpClient) { 
    super(http, "api/workTimes");
  }

  private workDaysUrl = 'api/workTimes';

  getWorkRecordsInPeriod(userId: string, startDate: Date, endDate: Date): Observable<WorkRecord[]> {
    return this.http.get<WorkRecord[]>(this.workDaysUrl).pipe(map(
      workRecords => {
        return workRecords.filter(workRecord => {          
          const time = new Date(workRecord.workDate).getTime(); // TODO: servis treba vracati Date, ne string
          return time < endDate.getTime() && time > startDate.getTime() && workRecord.userId == userId;
        })
      }
    ),
      catchError(this.handleError<WorkRecord[]>(`getWorkDays`)));
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
