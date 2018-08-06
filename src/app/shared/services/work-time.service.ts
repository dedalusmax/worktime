import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { HttpBaseService } from './http-base.service';
import { WorkTime } from '../models/work-time';


@Injectable({
  providedIn: 'root'
})
export class WorkTimeService extends HttpBaseService<WorkTime>{

  constructor(http: HttpClient) { 
    super(http, "api/workTimes");
  }

  private workDaysUrl = 'api/workTimes';

  getWorkTimesByDate(startDate: Date, endDate: Date): Observable<WorkTime[]> {
    return this.http.get<WorkTime[]>(this.workDaysUrl).pipe(map(
      workTimes => {
        return workTimes.filter(workTime => {          
          const time = new Date(workTime.workDate).getTime(); // TODO: servis treba vracati Date, ne string
          return time < endDate.getTime() && time > startDate.getTime()
        })
      }
    ),
      catchError(this.handleError<WorkTime[]>(`getWorkDays`)));
  }
  
}
