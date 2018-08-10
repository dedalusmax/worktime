import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { HttpBaseService } from './http-base.service';

import { DailyReport } from '../models/report/daily-report';
import { IncompleteRecordReport } from '../models/report/incomlete-record-report';
import { ProjectReport } from '../models/report/project-report';
import { WorkTimeReport } from '../models/report/worktime-report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(http: HttpClient) {
  }

  private workDaysUrl = 'api/workTimes';

  getWorkRecordsInPeriod(startDate: Date, endDate: Date): Observable<DailyReport[]> {
    const workRecords: DailyReport[] = [
      {
        workdate: new Date(2018, 8, 2, 0, 0, 0),
        projectName: 'Ime projekta',
        projectId: 11,
        hours: 2.5,
        comment: ''
      },
      {
        workdate: new Date(2018, 8, 2, 0, 0, 0),
        projectName: 'Jako dobar projekt',
        projectId: 12,
        hours: 5.5,
        comment: 'nemam'
      },
      {
        workdate: new Date(2018, 8, 3, 0, 0, 0),
        projectName: 'Jako dobar projekt',
        projectId: 12,
        hours: 8,
        comment: 'ovo nije komentar'
      },
      {
        workdate: new Date(2018, 8, 4, 0, 0, 0),
        projectName: 'The Projekt',
        projectId: 13,
        hours: 8,
        comment: 'zasto pisem komentare'
      }
    ];

    return of(workRecords);
  }

  getWorkRecordsInPeriodByProjects(fromDate: Date, toDate: Date): Observable<ProjectReport[]> {
    const projectReports: ProjectReport[] = [
      {
        projectId: 11,
        projectName: 'Ime projekta',
        hours: 148
      },
      {
        projectId: 12,
        projectName: 'Jako dobar projekt',
        hours: 80.5
      },
      {
        projectId: 13,
        projectName: 'The Projekt',
        hours: 72
      }
    ];

    return of(projectReports);
  }

  getIncompleteDaysInPeriod(fromDate: Date, toDate: Date): Observable<IncompleteRecordReport[]> {
    const incompleteRecords: IncompleteRecordReport[] = [
      {
        workdate: new Date(2018, 8, 5)
      },
      {
        workdate: new Date(2018, 8, 2)
      },
      {
        workdate: new Date(2018, 8, 3)
      }
    ];

    return of(incompleteRecords);
  }

  getWorkTimeInPeriod(fromDate: Date, toDate: Date): Observable<WorkTimeReport[]> {
    const workTimes: WorkTimeReport[] = [
      {
        workdate: new Date(2018, 8, 2, 0, 0, 0),
        startTime: new Date(2018, 8, 2, 8, 0, 0),
        endTime: new Date(2018, 8, 2, 16, 0, 0)
      },
      {
        workdate: new Date(2018, 8, 3, 0, 0, 0),
        startTime: new Date(2018, 8, 3, 8, 0, 0),
        endTime: new Date(2018, 8, 3, 16, 0, 0)
      },
      {
        workdate: new Date(2018, 8, 2, 0, 0, 0),
        startTime: new Date(2018, 8, 2, 7, 55, 0),
        endTime: new Date(2018, 8, 2, 15, 55, 0)
      }
    ];

    return of(workTimes);
  }

}
