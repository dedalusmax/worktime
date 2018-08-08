import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable()
export class DefaultDateService {
    dateTodaySource: BehaviorSubject<Date>;
  
    constructor() {
      let dateToday = new Date(Date.now());
        
      this.dateTodaySource = new BehaviorSubject<Date>(dateToday);
    }
  
    sendDateToday(dateToday: Date): void {
      this.dateTodaySource.next(dateToday);
    }
}