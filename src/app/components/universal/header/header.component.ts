import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  initialText = 'This is not working!';
  popArray:string[] = [''];
  dropArray:string[] = [
    'Memes',
    'Memes2',
    'Memes3'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
