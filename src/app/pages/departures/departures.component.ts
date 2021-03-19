import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
