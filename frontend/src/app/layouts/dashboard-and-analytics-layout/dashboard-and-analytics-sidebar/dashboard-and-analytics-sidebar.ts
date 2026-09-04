import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard-and-analytics-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './dashboard-and-analytics-sidebar.html',
  styleUrl: './dashboard-and-analytics-sidebar.css'
})
export class DashboardAndAnalyticsSidebarComponent {

  userRole = 'Project Manager';
  userInitial = 'P';

  constructor(private router: Router) {
    this.updateRole();
  }

  private updateRole(): void {

    if (this.router.url.includes('/dashboard-and-analytics/admin')) {
      this.userRole = 'Administrator';
      this.userInitial = 'A';
    } else {
      this.userRole = 'Project Manager';
      this.userInitial = 'P';
    }

  }
}