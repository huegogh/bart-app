import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  toggle = false;
  initialText = 'This is not working!';

  callDetailed:string = "";
  callNorthSouth:string="";


  // http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=
  //[[12th]] 
  //this will be assigned with data coming in from button click
  //&date=[[<mm/dd/yyyy>]]
  //&key=MW9S-E7SL-26DU-VV8V&l=1&json=y 
  //(detailed times/route heads)

  //   http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=
  // 24th replaceed with info coming in
  //&key=MW9S-E7SL-26DU-VV8V&json=y 
  //(north and south)

  

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

  timeArray: string[] = [
    '4:30 AM',
    '5:00 AM',
    '5:30 AM',
    '6:00 AM',
    '6:30 AM',
    '7:00 AM',
    '7:30 AM',
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM',
    '12:00 AM',
    '12:30 AM',
  ];

  abbrArray: string[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  passStation(value: string){
    console.log(value);
  }

  convertDate(date: string){
    let arrayDate = date.split("-");
    return [arrayDate[1], arrayDate[2], arrayDate[0]].join("/");
  }

  logMe(station: string, date: string, time: string){
    console.log(station, this.convertDate(date), time)

    this.callDetailed = `http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=${this.abbrArray[this.popArray.indexOf(station)]}&date=${this.convertDate(date)}&key=MW9S-E7SL-26DU-VV8V&l=1&json=y`;

    console.log(this.callDetailed);
      // http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=
  //[[12th]] 
  //this will be assigned with data coming in from button click
  //&date=[[<mm/dd/yyyy>]]
  //&key=MW9S-E7SL-26DU-VV8V&l=1&json=y 
  //(detailed times/route heads)
  
    this.callNorthSouth = `http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=${this.abbrArray[this.popArray.indexOf(station)]}&date=${this.convertDate(date)}&key=MW9S-E7SL-26DU-VV8V&json=y`;

    console.log(this.callNorthSouth)

  //   http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=
  // [[24th]] replaceed with info coming in
  //&date=[[mm/dd/yyyy]]
  //&key=MW9S-E7SL-26DU-VV8V&json=y 
  //(north and south)

  }
}
