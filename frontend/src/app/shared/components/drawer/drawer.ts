import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatExpansionModule
  ],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css'
})
export class Drawer {

  @Input() isOpen = false;

}