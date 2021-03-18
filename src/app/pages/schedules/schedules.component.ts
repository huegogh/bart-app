import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  toggle = false;
  initialText = 'This is not working!';
  popArray:string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }

}
