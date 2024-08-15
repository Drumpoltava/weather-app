import {Component} from '@angular/core';

import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './header.component.html',
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
