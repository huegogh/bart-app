import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {
  initialText = 'This is not working!';
  popArray:string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }

}
