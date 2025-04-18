import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './series';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

constructor(private http: HttpClient) { }

public getSeries(): Observable<Serie[]> {
  return this.http.get<Serie[]>(environment.baseUrl)
}
}