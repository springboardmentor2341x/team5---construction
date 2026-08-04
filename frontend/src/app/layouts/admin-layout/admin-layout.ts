import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

import { Header } from '../../shared/components/header/header';
import { Drawer } from '../../shared/components/drawer/drawer';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    Header,
    Drawer,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

  drawerOpen = false;

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

}