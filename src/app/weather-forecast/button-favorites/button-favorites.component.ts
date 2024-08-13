import { Component } from '@angular/core';

import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardAvatar} from "@angular/material/card";

@Component({
  selector: 'app-button-favorites',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatButton,
    MatCard,
    MatCardAvatar
  ],
  templateUrl: './button-favorites.component.html',
  styleUrl: './button-favorites.component.scss'
})
export class ButtonFavoritesComponent {

}
