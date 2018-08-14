import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, } from '@angular/compiler/src/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './component/home/home.component';
import { DataAnalysisComponent } from './component/data-analysis/data-analysis.component';
import { TodaysWeatherComponent } from './component/todays-weather/todays-weather.component';

export const routes: Routes=[
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "data-analysis", component: DataAnalysisComponent },
  { path: "todays-weather", component: TodaysWeatherComponent },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule {
}
