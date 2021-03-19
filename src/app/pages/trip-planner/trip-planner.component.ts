import { Component, OnInit } from '@angular/core';
import { ITripsList } from '../../interfaces/trips-list';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {

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
  abbrArray:string[] = [
    "12th",
    "16th",
    "19th",
    "24th",
    "antc",
    "ashb",
    "balb",
    "bayf",
    "bery",
    "cast",
    "civc",
    "cols",
    "colm",
    "conc",
    "daly",
    "dbrk",
    "dubl",
    "deln",
    "plza",
    "embr",
    "frmt",
    "ftvl",
    "glen",
    "hayw",
    "lafy",
    "lake",
    "mcar",
    "mlbr",
    "mlpt",
    "mont",
    "nbrk",
    "ncon",
    "oakl",
    "orin",
    "pitt",
    "pctr",
    "phil",
    "powl",
    "rich",
    "rock",
    "sbrn",
    "sfia",
    "sanl",
    "shay",
    "ssan",
    "ucty",
    "wcrk",
    "warm",
    "wdub",
    "woak",
  ];

  tripList: ITripsList[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  logMe(value1: string, value2: string){
    let abbrOne = this.abbrArray[this.popArray.indexOf(value1)];
    let abbrTwo = this.abbrArray[this.popArray.indexOf(value2)];
    let finalUrl = `http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=${abbrOne}&dest=${abbrTwo}&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1&json=y`
    console.log(finalUrl);
  }
}
