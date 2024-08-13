import {Component} from '@angular/core';

import {HeaderComponent} from "./weather-forecast/header/header.component";
import {InputComponent} from "./weather-forecast/input/input.component";
import {ButtonFavoritesComponent} from "./weather-forecast/button-favorites/button-favorites.component";
import {CardsComponent} from "./weather-forecast/cards/cards.component"
import {CurrentWeatherCardComponent} from "./weather-forecast/current-weather-card/current-weather-card.component";
import {SharedComponent} from "./weather-forecast/shared/shared.component";
import {MatCard, MatCardAvatar} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    InputComponent,
    ButtonFavoritesComponent,
    CardsComponent,
    CurrentWeatherCardComponent,
    SharedComponent,
    MatCard,
    MatCardAvatar,
    MatButton,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
