import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServicesService {

  private hoursOnThirty = {
    '4:30 AM': 'time=4:30 am',
    '5:00 AM': 'time=5:00 am',
    '5:30 AM': 'tiime=5:30 am',
    '6:00 AM': 'time=6:00 am',
    '6:30 AM': 'time=6:30 am',
    '7:00 AM': 'time=7:00 am',
    '7:30 AM': 'time=7:30 am',
    '8:00 AM': 'time=8:00 am',
    '8:30 AM': 'time=8:30 am',
    '9:00 AM': 'time=9:00 am',
    '9:30 AM': 'time=9:30 am',
    '10:00 AM': 'time=10:00 am',
    '10:30 AM': 'time=10:30 am',
    '11:00 AM': 'time=11:00 am',
    '11:30 AM': 'time=11:30 am',
    '12:00 PM': 'time=12:00 pm',
    '12:30 PM': 'time=12:30 pm',
    '1:00 PM': 'time=1:00 pm',
    '1:30 PM': 'time=1:30 pm',
    '2:00 PM': 'time=2:00 pm',
    '2:30 PM': 'time=2:30 pm',
    '3:00 PM': 'time=3:00 pm',
    '3:30 PM': 'time=3:30 pm',
    '4:00 PM': 'time=4:00 pm',
    '4:30 PM': 'time=4:30 pm',
    '5:00 PM': 'time=5:00 pm',
    '5:30 PM': 'time=5:30 pm',
    '6:00 PM': 'time=6:00 pm',
    '6:30 PM': 'time=6:30 pm',
    '7:00 PM': 'time=7:00 pm',
    '7:30 PM': 'time=7:30 pm',
    '8:00 PM': 'time=8:00 pm',
    '8:30 PM': 'time=8:30 pm',
    '9:00 PM': 'time=9:00 pm',
    '9:30 PM': 'time=9:30 pm',
    '10:00 PM': 'time=10:00 pm',
    '10:30 PM': 'time=10:30 pm',
    '11:00 PM': 'time=11:00 pm',
    '11:30 PM': 'time=11:30 pm',
    '12:00 AM': 'time=12:00 am',
    '12:30 AM': 'time=12:30 am',
    //time=h:mm+am/pm
  }

  static objectCities: any = {
    "12th St. Oakland City Center": "12TH",
    "16th St. Misson": "16TH",
    "19th St. Oakland": "19TH",
    "24th St. Mission": "24TH",
    "Antioch": "ANTC",
    "Ashby": "ASHB",
    "Balboa Park": "BALB",
    "Bay Fair": "BAYF",
    "Berryessa/North San Jose": "BERY",
    "Castro Valley": "CAST",
    "Civic Center/UN Plaza": "CIVC",
    "Coliseum": "COLS",
    "Colma": "COLM",
    "Concord": "CONC",
    "Daly City": "DALY",
    "Downtown Berkeley": "DBRK",
    "Dublin/Pleasanton": "DUBL",
    "El Cerrito del Norte": "DELN",
    "El Cerrito Plaza": "PLZA",
    "Embarcadero": "EMBR",
    "Fremont": "FRMT",
    "Fruitvale": "FTVL",
    "Glen Park": "GLEN",
    "Hayward": "HAYW",
    "Lafayette": "LAFY",
    "Lake Merritt": "LAKE",
    "MacArthur": "MCAR",
    "Millbrae": "MLBR",
    "Milpitas": "MLPT",
    "Montgomery St.": "MONT",
    "North Berkeley": "NBRK",
    "North Concord/Martinez": "NCON",
    "Oakland International Airport": "OAKL",
    "Orinda": "ORIN",
    "Pittsburg/Bay Point": "PITT",
    "Pittsburg Center": "PCTR",
    "Pleasant Hill/Contra Costa Centre": "PHIL",
    "Powell St.": "POWL",
    "Richmond": "RICH",
    "Rockridge": "ROCK",
    "San Bruno": "SBRN",
    "San Francisco International Airport": "SFIA",
    "San Leandro": "SANL",
    "South Hayward": "SHAY",
    "South San Francisco": "SSAN",
    "Union City": "UCTY",
    "Walnut Creek": "WCRK",
    "Warm Springs/South Fremont": "WARM",
    "West Dublin/Pleasanton": "WDUB",
    "West Oakland": "WOAK",
    //Full address / shorthand
  }

  constructor() { }

  // The below takes the date in as mm/dd/yyyy, which is exactly what the api needs save for the date=<>
  // So this little function will take the date and interpolate the value to generate the appropriate url snippet
  callDate(selDate: any): string {
    return `date=<${selDate}>`
  }

}
