import { Component, OnInit } from '@angular/core';
import { BartService } from '../bart.service';
import { IStation } from '../station';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Hello World";
  StationsList!: IStation[];

  constructor(private bartService: BartService) { }

  ngOnInit(): void {
  }

  GetAdvisory(): void{
    this.bartService.GetData().subscribe({
      next: data => {
        this.message = data.root.bsa[0].description["#cdata-section"];
        console.log(this.message);
      }
    })
  }

  GetStations(): void{
    this.bartService.GetStations().subscribe({
      next: data => {
        this.StationsList = data.root.stations.station;
      }
    })
  }

}
