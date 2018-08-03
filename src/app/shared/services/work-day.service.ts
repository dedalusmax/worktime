import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkDay } from './work-day';

import { catchError, map } from '../../node_modules/rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WorkDayService {

  constructor(private http: HttpClient) { }

  private workDaysUrl = 'api/workDays';

  getWorkDay(startDate: Date, endDate: Date): Observable<WorkDay> {
    return this.http.get<WorkDay>(this.workDaysUrl).pipe(
      catchError(this.handleError<WorkDay>(`getWorkDays`))
    );
  }

  addWorkDay(workDay : WorkDay): Observable<WorkDay> {
    return this.http.post<WorkDay>(this.workDaysUrl, workDay, httpOptions).pipe(
      catchError(this.handleError<WorkDay>('addHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      return of(result as T);
    };
  }

}
