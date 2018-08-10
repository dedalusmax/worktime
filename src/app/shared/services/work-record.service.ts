import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpBaseService } from './http-base.service';
import { WorkRecord } from '../models/work-record';
import { AppConfig } from './app.config';



@Injectable({
  providedIn: 'root'
})
export class WorkRecordService extends HttpBaseService<WorkRecord> {

  constructor(
    protected http: HttpClient,
    protected config: AppConfig
  ) {
    super(http, config, 'workRecords');
  }

}
