import {Component} from '@angular/core';

import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {

}
