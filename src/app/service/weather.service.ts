
import { Injectable, Inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { map } from "rxjs/operators";
import "rxjs/add/operator/map";
import { weatherData } from "../model/apiData";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 

  }
  getWeather(apiData: weatherData){
   return this.http.get(environment.baseUrl + `weather?q=${apiData.city},${apiData.country}&appid=${environment.appId}&units=${environment.units}`)
    .map((res: Response) => {
      return res;
     })
     .catch((error: any) => {
        return Observable.throw(error ? error.error.message : "Server error");
     });
}

}
