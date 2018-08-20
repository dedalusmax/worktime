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

    return this.getReports<DailyReport>(userId, fromDate, toDate, 'userWorkRecordsInPeriod');
  }

  getWorkRecordsInPeriodByProjects(userId: string, fromDate: Date, toDate: Date): Observable<ProjectReport[]> {

    return this.getReports<ProjectReport>(userId, fromDate, toDate, 'projectWorkRecordsInPeriod');
  }

  getIncompleteDaysInPeriod(userId: string, fromDate: Date, toDate: Date): Observable<IncompleteRecordReport[]> {

    return this.getReports<IncompleteRecordReport>(userId, fromDate, toDate, 'incompleteWorkRecordsInPeriod');
  }

  getWorkTimeInPeriod(userId: string, fromDate: Date, toDate: Date): Observable<WorkTimeReport[]> {

    return this.getReports<WorkTimeReport>(userId, fromDate, toDate, 'userWorkTimeInPeriod');
  }

  getReports<T>(userId: string, fromDate: Date, toDate: Date, apiUrl: string): Observable<T[]> {
    const getUrl = this.workDaysUrl + apiUrl;
    const params = new HttpParams().set('userId' , userId).set('fromDate', this.formatDate(fromDate))
        .set('toDate', this.formatDate(toDate));
    return this.httpService.get<T[]>
        (getUrl, {headers : httpOptions.headers, withCredentials : httpOptions.withCredentials, params : params});
  }

  private formatDate(date: Date): string {
    return `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
  }

}
