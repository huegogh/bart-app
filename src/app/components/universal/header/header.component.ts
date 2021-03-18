import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() initialText = 'This is not working!';
  @Input() popArray:string[] = [''];

 
  dropArray:string[] = [
    'Memes',
    'Memes2',
    'Memes3'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
