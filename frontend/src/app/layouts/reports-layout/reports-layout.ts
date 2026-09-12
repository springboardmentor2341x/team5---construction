import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReportsSidebarComponent } from './reports-sidebar/reports-sidebar';
import { ReportsTopNavbarComponent } from './reports-top-navbar/reports-top-navbar';

@Component({
  selector: 'app-reports-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ReportsSidebarComponent,
    ReportsTopNavbarComponent
  ],
  templateUrl: './reports-layout.html',
  styleUrl: './reports-layout.css'
})
export class ReportsLayoutComponent {

}