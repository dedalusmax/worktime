import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { HttpBaseService } from './http-base.service';
import { WorkTime } from '../models/work-time';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AppConfig } from './app.config';


const httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json; charset=utf-8' }),
    withCredentials: true
  };

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService extends HttpBaseService<WorkTime> {

  constructor(
    protected http: HttpClient,
    protected config: AppConfig,
    private userService: UserService
  ) {
    super(http, config, 'workTime');
  }

  getWorkTime(workDate: Date): Observable<WorkTime> {
      const params = new HttpParams().set('userId' , this.userService.userInfo.id).set('workdate', workDate.toLocaleDateString());
      return this.http.get<WorkTime>
        (this.url, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }
}
