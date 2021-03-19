import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';
import { ApiService } from '../../services/api.service';
import { ScheduleServicesService } from '../../services/schedule-services.service';


@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  testDepart = '';
  departTime = '';
  lineTest = '';
  lineHead = '';
  item !: IItem[];
  cityCalled:string = "";

  toggle = false;
  initialText = 'This is not working!';

  popArray:string[] = [
    "12th St. Oakland City Center",
    "16th St. Misson",
    "19th St. Oakland",
    "24th St. Mission",
    "Antioch",
    "Ashby",
    "Balboa Park",
    "Bay Fair",
    "Berryessa/North San Jose",
    "Castro Valley",
    "Civic Center/UN Plaza",
    "Coliseum",
    "Colma",
    "Concord",
    "Daly City",
    "Downtown Berkeley",
    "Dublin/Pleasanton",
    "El Cerrito del Norte",
    "El Cerrito Plaza",
    "Embarcadero",
    "Fremont",
    "Fruitvale",
    "Glen Park",
    "Hayward",
    "Lafayette",
    "Lake Merritt",
    "MacArthur",
    "Millbrae",
    "Milpitas",
    "Montgomery St.",
    "North Berkeley",
    "North Concord/Martinez",
    "Oakland International Airport",
    "Orinda",
    "Pittsburg/Bay Point",
    "Pittsburg Center",
    "Pleasant Hill/Contra Costa Centre",
    "Powell St.",
    "Richmond",
    "Rockridge",
    "San Bruno",
    "San Francisco International Airport",
    "San Leandro",
    "South Hayward",
    "South San Francisco",
    "Union City",
    "Walnut Creek",
    "Warm Springs/South Fremont",
    "West Dublin/Pleasanton",
    "West Oakland",
  ];
  constructor(private apiService: ApiService) { }


  passValue(station: string){
    let passV: any = ScheduleServicesService.objectCities[station]
    this.cityCalled = `http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=${passV}&key=MW9S-E7SL-26DU-VV8V&json=y`;
    console.log(this.cityCalled);

    // this.apiService.GetDepartInfo(this.cityCalled).subscribe(
    //   data => {
    //     console.log(data.root.station.name);
    //     console.log(data.root.time);
    //     //this.testDepart = data.root.station[0];
    //     this.departTime = data.root.time;
    //   }
    // )



    this.apiService.GetDepartInfo(this.cityCalled).subscribe({
      next: data => {
        this.item = data.root.station.item;
        console.log(this.item);
        this.testDepart = data.root.station.name;
        this.departTime = data.root.date;
        this.lineTest = data.root.station.item[0]['@line'];
        this.lineHead = data.root.station.item[0]['@trainHeadStation'];
      }
    })

  }

  ngOnInit(): void {
    
  }

}
