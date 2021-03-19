import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() initialText = 'This is not working!';
  @Input() popArray:string[] = [''];
  Favorites:String [] = [];
  
 
  dropArray:string[] = [
    'Favorites',
  ];

  constructor(private fav : StorageService) { }

  ngOnInit(): void {
    
  }
  

}
