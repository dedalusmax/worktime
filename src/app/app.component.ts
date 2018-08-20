import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: MenuItem[];
  user: User;

  constructor(private userService: UserService) {}

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

   this.user = {fullName: 'Marko Posavec', id: '22', username: 'mp'};
  }
}
