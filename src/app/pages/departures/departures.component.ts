import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  toggle = false;
  initialText = 'This is not working!';
  popArray:string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }

}
