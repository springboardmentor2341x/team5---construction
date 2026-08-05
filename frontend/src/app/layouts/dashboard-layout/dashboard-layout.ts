import { Component } from '@angular/core';

import { Sidebar } from '../sidebar/sidebar';
import { TopNavbar } from '../top-navbar/top-navbar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    Sidebar,
    TopNavbar
  ],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css'
})
export class DashboardLayout {}