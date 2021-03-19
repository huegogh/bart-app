import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private FavList : StorageService, private route: Router) { }

  ngOnInit(): void {
    this.Favorites = this.FavList.GetValue();
  }
  OnChange(value: string){
    console.log(value)
  }

}
