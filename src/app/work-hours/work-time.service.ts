import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkTime } from '../shared/models/work-time';
import { HttpBaseService } from '../shared/services/http-base.service';

import { Observable, of } from 'rxjs';

import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService extends HttpBaseService<WorkTime> {

  constructor(http: HttpClient) {
    super(http, 'api/workTime');
  }

  getByUserIdWorkDate(userId: any, workDate: any): Observable<WorkTime[]> {
    return this.http.get<WorkTime>(`${'api/workTimes'}/${userId}/${workDate}`)
      .pipe(tap(project => console.log(project)), catchError(this.handleError<any>('get')));
  }

  getByWorkDate(workDate: Date): Observable<WorkTime> {
    return this.http.get<WorkTime>(`${'api/workTimes'}/${workDate}`)
      .pipe(tap(project => console.log(project)), catchError(this.handleError<any>('get')));
  }
}
