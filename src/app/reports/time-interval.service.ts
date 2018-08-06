import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject  } from 'rxjs';

@Injectable()
export class TimeIntervalService {
  endDateSource: BehaviorSubject <Date>;
  startDateSource: BehaviorSubject <Date>;

  constructor() {
    let endDate = new Date(Date.now());
    endDate.setHours(0,0,0,0);
    
    let startDate = new Date(endDate);
    startDate.setMonth(startDate.getUTCMonth(), 1);

    this.startDateSource = new BehaviorSubject<Date>(startDate);
    this.endDateSource = new BehaviorSubject<Date>(endDate);
  }

  sendStartDate(startDate: Date): void {
    this.startDateSource.next(startDate);
  }

  sendEndDate(endDate: Date): void {
    this.endDateSource.next(endDate);
  }
}
