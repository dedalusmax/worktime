import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpBaseService } from './http-base.service';
import { WorkRecord } from '../models/work-record';


@Injectable({
  providedIn: 'root'
})
export class WorkRecordService extends HttpBaseService<WorkRecord>{

  constructor(http: HttpClient) { 
    super(http, "api/workRecords");
  }
  
}
