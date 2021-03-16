import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() initialText = 'This is not working!';
  @Input() popArray:string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

}
