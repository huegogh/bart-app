import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IAdvisory } from '../interfaces/advisory'
import { IDeparture } from '../interfaces/depature';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  homeUrl = 'http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&json=y';
  calcUrl = '';
  scheduleUrl = '';
  platformUrl = '';
  departuresUrl = 'https://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=MW9S-E7SL-26DU-VV8V&json=y';


  constructor(private http: HttpClient) { }

  GetHomeInfo(): Observable<IAdvisory>{
    return this.http.get<IAdvisory>(this.homeUrl);
  }

  GetDepartInfo(): Observable<IDeparture>{
    return this.http.get<IDeparture>(this.departuresUrl);
  }


}
