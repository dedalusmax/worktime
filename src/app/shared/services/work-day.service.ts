import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkDay } from '../models/work-day';

import { catchError, map, filter } from 'rxjs/operators';
import { start } from 'repl';
import { HttpBaseService } from './http-base.service';


@Injectable({
  providedIn: 'root'
})
export class WorkDayService extends HttpBaseService<WorkDay>{

  constructor(http: HttpClient) { 
    super(http, "api/workDays");
  }

  private workDaysUrl = 'api/workDays';

  getWorkDaysByDate(startDate: Date, endDate: Date): Observable<WorkDay> {
    return this.http.get<WorkDay>(this.workDaysUrl).pipe(filter(workDay => workDay.date.getTime < endDate.getTime && workDay.date.getTime > startDate.getTime),
      catchError(this.handleError<WorkDay>(`getWorkDays`)));
  }

}
