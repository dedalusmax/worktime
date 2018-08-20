import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { DailyReport } from '../models/report/daily-report';
import { IncompleteRecordReport } from '../models/report/incomlete-record-report';
import { ProjectReport } from '../models/report/project-report';
import { WorkTimeReport } from '../models/report/worktime-report';
import { AppConfig } from './app.config';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'application/json; charset=utf-8' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpService: HttpClient, private config: AppConfig) {
    this.workDaysUrl = config.webAPI + 'reports/';
  }

  private workDaysUrl;

  getWorkRecordsInPeriod(userId: string, fromDate: Date, toDate: Date): Observable<DailyReport[]> {

    const getUrl = this.workDaysUrl + 'userWorkRecordsInPeriod';
    const params = new HttpParams().set('userId' , userId).set('fromDate', this.formatDate(fromDate))
        .set('toDate', this.formatDate(toDate));
    return this.httpService.get<DailyReport[]>
        (getUrl, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }

  getWorkRecordsInPeriodByProjects(userId: string, fromDate: Date, toDate: Date): Observable<ProjectReport[]> {

    const getUrl = this.workDaysUrl + 'projectWorkRecordsInPeriod';
    const params = new HttpParams().set('userId' , userId).set('fromDate', this.formatDate(fromDate))
        .set('toDate', this.formatDate(toDate));
    return this.httpService.get<ProjectReport[]>
        (getUrl, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }

  getIncompleteDaysInPeriod(userId: string, fromDate: Date, toDate: Date): Observable<IncompleteRecordReport[]> {

    const getUrl = this.workDaysUrl + 'incompleteWorkRecordsInPeriod';
    const params = new HttpParams().set('userId' , userId).set('fromDate', this.formatDate(fromDate))
        .set('toDate', this.formatDate(toDate));
    return this.httpService.get<IncompleteRecordReport[]>
        (getUrl, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }

  getWorkTimeInPeriod(userId: string, fromDate: Date, toDate: Date): Observable<WorkTimeReport[]> {

    const getUrl = this.workDaysUrl + 'userWorkTimeInPeriod';
    const params = new HttpParams().set('userId' , userId).set('fromDate', this.formatDate(fromDate))
        .set('toDate', this.formatDate(toDate));
    return this.httpService.get<WorkTimeReport[]>
        (getUrl, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }

  private formatDate(date: Date): string {
    return `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
  }

}
