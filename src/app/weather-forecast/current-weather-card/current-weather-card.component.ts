import {Component, input} from '@angular/core';

import {MatCard, MatCardAvatar} from "@angular/material/card";

@Component({
  selector: 'app-current-weather-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardAvatar
  ],
  templateUrl: './current-weather-card.component.html',
  styleUrl: './current-weather-card.component.scss',
  host: {
    class: 'flex-container'
  }
})
export class CurrentWeatherCardComponent {

}
