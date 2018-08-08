import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable()
export class DateTodayService {
    DateTodaySource: BehaviorSubject <Date>;
  
    constructor() {
      let dateToday = new Date(Date.now());
       dateToday.setHours(0,0,0,0);
        
      this.DateTodaySource = new BehaviorSubject<Date>(dateToday);
    }
  
    sendDateToday(dateToday: Date): void {
      this.DateTodaySource.next(dateToday);
    }
}