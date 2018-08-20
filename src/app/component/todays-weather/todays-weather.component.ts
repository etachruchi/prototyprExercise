import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from '../../service/weather.service';
@Component({
  selector: "app-todays-weather",
  templateUrl: "./todays-weather.component.html",
  styleUrls: ["./todays-weather.component.css"]
})
export class TodaysWeatherComponent implements OnInit {
  weatherForm: FormGroup;
  cityName: string;
  weatherForecastData: any;
  errorMessage: string;
  weatherData: any;
  iconUrl: string
  loading: boolean;
  constructor(public weatherServices: WeatherService) {}

  ngOnInit() {
    this.createWeatherForm();
  }
  createWeatherForm() {
    this.weatherForm = new FormGroup({
      city: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }
  onSubmit(formData) {
    this.loading = true;
    this.weatherForm.reset();
    this.weatherData = null;
    this.weatherServices.getWeather(formData).subscribe(res => {
      this.loading = false;
      this.weatherData = res;
      this.iconUrl = `http://openweathermap.org/img/w/${res['weather'][0]['icon']}.png`;
    }, err => {
      this.loading = false;
      this.errorMessage = err;
      console.log(err);
      
    });
  }
}
