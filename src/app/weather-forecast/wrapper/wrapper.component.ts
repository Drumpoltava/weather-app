import { Component } from '@angular/core';
import {CurrentWeatherCardComponent} from "../current-weather-card/current-weather-card.component";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CurrentWeatherCardComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
