import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataAnalysisComponent } from './component/data-analysis/data-analysis.component';
import { TodaysWeatherComponent } from './component/todays-weather/todays-weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataAnalysisComponent,
    TodaysWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
