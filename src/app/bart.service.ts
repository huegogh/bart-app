import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAdvisory } from './advisory';

@Injectable({
  providedIn: 'root'
})
export class BartService {

  url = "http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&json=y";

  constructor(private http: HttpClient) { }

  GetData(): Observable<IAdvisory> {
    return this.http.get<IAdvisory>(this.url)
    .pipe(
      tap(data => console.log(data))
    );
  }
}
