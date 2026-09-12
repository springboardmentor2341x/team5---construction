import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-reports-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './reports-sidebar.html',
  styleUrl: './reports-sidebar.css'
})
export class ReportsSidebarComponent {

}