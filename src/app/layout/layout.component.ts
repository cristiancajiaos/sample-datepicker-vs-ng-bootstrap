import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  model: NgbDateStruct;
  date: {
    year: number,
    month: number
  };

  constructor(
    private calendar: NgbCalendar
  ) { }

  ngOnInit(): void {
    this.model = this.calendar.getToday();
  }

}
