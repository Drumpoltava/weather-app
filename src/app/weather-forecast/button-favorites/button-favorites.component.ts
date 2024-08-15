import { Component } from '@angular/core';

import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-button-favorites',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatButton
  ],
  templateUrl: './button-favorites.component.html',
  styleUrl: './button-favorites.component.scss',
  host: {
    class: 'flex-container'
  }
})
export class ButtonFavoritesComponent {

}
