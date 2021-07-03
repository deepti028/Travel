import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }

  getWeatherDetails() {
    const headers = new HttpHeaders();
    const url = `https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576`;
    const query = null;
    return this.http.post<any>(url, query);
  }
}
