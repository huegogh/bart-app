import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IAdvisory } from '../interfaces/advisory'
import { IDeparture } from '../interfaces/depature';
import { IStation } from '../interfaces/station';
import { IStnschedule } from '../interfaces/stnschedule'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  homeUrl = 'http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&json=y';
  calcUrl = '';
  scheduleUrl = '';
  platformUrl = '';

  constructor(private http: HttpClient) { }

  GetHomeInfo(): Observable<IAdvisory>{
    return this.http.get<IAdvisory>(this.homeUrl);
  }

  GetDepartInfo(departUrl: string): Observable<IStnschedule>{
    return this.http.get<IStnschedule>(departUrl);
  }

}
