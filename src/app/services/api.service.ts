import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IAdvisory } from '../interfaces/advisory'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  homeUrl = 'http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&json=y';
  calcUrl = '';
  scheduleUrl = '';
  platformUrl = '';
  departuresUrl = '';


  constructor(private http: HttpClient) { }

  
  GetHomeInfo(): Observable<IAdvisory>{
    return this.http.get<IAdvisory>(this.homeUrl);
  }


}
