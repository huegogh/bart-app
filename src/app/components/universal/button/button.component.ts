import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string = ""

  constructor() { }

  ngOnInit(): void {
    console.log("test");
  }

  buttonClick(value: string){
    console.log(value)
  }

}
