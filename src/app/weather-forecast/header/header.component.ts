import {Component} from '@angular/core';

import {Router} from '@angular/router';

import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    MatToolbar
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    // private router: Router
  ) {

  }

  goToHome() {
    // this.router.navigate(['weather_forecast']);
  }

  goToFavorites() {
    // this.router.navigate(['favorites']);
  }
}
