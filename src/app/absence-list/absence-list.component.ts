import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.scss']
})
export class AbsenceListComponent implements OnInit {

  absentEmployes = [
    {
      username: 'Petra Strucuc',
      reason: 'Godišnji',
      startDate: new Date(2018, 6, 26),
      endDate: new Date(2018, 8, 5)
    },
    {
      username: 'Filip Zmuk',
      reason: 'Godišnji',
      startDate: new Date(2018, 6, 30),
      endDate: new Date(2018, 7, 30)
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
