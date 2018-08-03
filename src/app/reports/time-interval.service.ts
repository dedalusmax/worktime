import { Injectable } from '@angular/core';
import { ReplaySubject  } from 'rxjs';

@Injectable()
export class TimeIntervalService {
  endDateSource = new ReplaySubject <Date>(1);
  startDateSource = new ReplaySubject <Date>(1);

  constructor() {
    this.initTime();
  }

  initTime() {
    let endDate = new Date(Date.now());
    endDate.setHours(0,0,0,0);
    
    let startDate = new Date(endDate);
    startDate.setMonth(startDate.getUTCMonth(), 1);

    this.sendStartDate(startDate);
    this.sendEndDate(endDate);
  }

  sendStartDate(startDate: Date): void {
    this.startDateSource.next(startDate);
  }

  sendEndDate(endDate: Date): void {
    this.endDateSource.next(endDate);
  }
}
