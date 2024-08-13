import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherForecastComponent} from "./weather-forecast/weather-forecast.component";
import {FavoritesComponent} from "./favorites/favorites.component";

const routes: Routes = [
  {
    path: 'weather_forecast',
    component: WeatherForecastComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
