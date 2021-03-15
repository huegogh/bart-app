import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAdvisory } from './advisory';
import { IStationsList } from './stations-list';

@Injectable({
  providedIn: 'root'
})
export class BartService {

  AdvisoryUrl = "http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&json=y";
  StationsUrl = "http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y";

  constructor(private http: HttpClient) { }

  GetData(): Observable<IAdvisory> {
    return this.http.get<IAdvisory>(this.AdvisoryUrl)
    // .pipe(
    //   tap(data => console.log(data))
    // )
    ;
  }

  GetStations(): Observable<IStationsList> {
    return this.http.get<IStationsList>(this.StationsUrl);
  }
}
