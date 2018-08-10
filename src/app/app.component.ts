import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Work Hours', routerLink: 'workhours'},
      {
        label: 'Reports',
        routerLink: 'reports',
        items: [
          {label: 'Daily report', routerLink: 'reports/daily'},
          {label: 'Projects report', routerLink: 'reports/projects'},
          {label: 'Worktime report', routerLink: 'reports/worktime'},
          {label: 'Incomplete records', routerLink: 'reports/incomplete'}
        ]
      }
    ];
  }
}
