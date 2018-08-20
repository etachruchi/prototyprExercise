import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataAnalysisComponent } from './component/data-analysis/data-analysis.component';
import { TodaysWeatherComponent } from './component/todays-weather/todays-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataAnalysisComponent,
    TodaysWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
