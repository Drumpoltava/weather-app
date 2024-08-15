import {Component} from '@angular/core';

import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  host: {
    class: 'flex-container'
  }
})

export class CardsComponent {

}
