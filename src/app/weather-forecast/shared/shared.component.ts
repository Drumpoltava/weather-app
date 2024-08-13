import {Component} from '@angular/core';

import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardAvatar} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardAvatar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
})
export class SharedComponent {

}
