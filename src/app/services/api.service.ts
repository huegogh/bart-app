import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  homeUrl = '';
  calcUrl = '';
  scheduleUrl = '';
  platformUrl = '';
  departuresUrl = '';


  constructor(private http: HttpClient) { }

  // GetHomeInfo(): Observable<IAdvisory>{

  // }


}
