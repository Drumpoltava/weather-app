import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  constructor(
    private http: HttpClient,
  ) {
  }


  searchCity() {
    this.http.get('https://dataservice.accuweather.com/locations/v1/countries/');
  }
}
