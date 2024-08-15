import {Component} from '@angular/core';

import {HeaderComponent} from "./weather-forecast/header/header.component";
import {InputComponent} from "./weather-forecast/input/input.component";
import {CurrentWeatherCardComponent} from "./weather-forecast/current-weather-card/current-weather-card.component";
import {ButtonFavoritesComponent} from "./weather-forecast/button-favorites/button-favorites.component";
import {CardsComponent} from "./weather-forecast/cards/cards.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    InputComponent,
    CurrentWeatherCardComponent,
    ButtonFavoritesComponent,
    CardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

}
