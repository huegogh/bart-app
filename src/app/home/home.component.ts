import { Component, OnInit } from '@angular/core';
import { BartService } from '../bart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Hello World";

  constructor(private bartService: BartService) { }

  ngOnInit(): void {
  }

  GetBartData(): void{
    this.bartService.GetData().subscribe({
      next: data => {
        this.message = data.root.bsa[0].description.data;
        console.log(this.message);
      }
    })
  }

}
