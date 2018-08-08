import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { HttpBaseService } from './http-base.service';
import { WorkTime } from '../models/work-time';
import { UserService } from './user.service';
import { Observable } from '../../../../node_modules/rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json; charset=utf-8' }),
    withCredentials: true
  };

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService extends HttpBaseService<WorkTime> {

  constructor(http: HttpClient, private userService: UserService) {
    super(http, 'http://192.168.1.23:81/api/workTime');
  }

  getWorkTime(workDate: Date): Observable<WorkTime> {
      const params = new HttpParams().set('userId' , this.userService.userInfo.id).set('workdate', workDate.toLocaleDateString());
      return this.http.get<WorkTime>
        (this.url, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }
}
