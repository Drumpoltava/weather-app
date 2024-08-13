import {Component} from '@angular/core';

// import { HttpClient } from "@angular/common/http";

import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  imports: [
    MatFormField,
    MatLabel,
    MatInput
  ],
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  constructor(
    // private http: HttpClient,
  ) {
  }


  searchCity() {
    // this.http.get('https://dataservice.accuweather.com/locations/v1/countries/');
  }
}
