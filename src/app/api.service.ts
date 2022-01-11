import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(location: any){
    return this.http.get(
      'http://api.weatherapi.com/v1/current.json?key=def7b9a4b08242988d8122133221101&q='+location+'&aqi=no'
    )
  }

  // getCurrency(currency){
  //   return this.http.get()
  // }
}
