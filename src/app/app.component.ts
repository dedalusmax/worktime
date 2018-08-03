import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Work time Manager';

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Work Hours', routerLink: 'workhours'},
          {label: 'Reporting', routerLink: 'reports'}
      ];
  }
}
