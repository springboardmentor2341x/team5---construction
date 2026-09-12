import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-and-analytics-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-and-analytics-top-navbar.html',
  styleUrl: './dashboard-and-analytics-top-navbar.css'
})
export class DashboardAndAnalyticsTopNavbarComponent {

  userName = 'Project Manager';
  userRole = 'Project Manager';
  userInitial = 'P';

  constructor(private router: Router) {
    this.updateUserRole();
  }

  private updateUserRole(): void {

    if (this.router.url.includes('/dashboard-and-analytics/admin')) {

      this.userName = 'Administrator';
      this.userRole = 'Administrator';
      this.userInitial = 'A';

    } else {

      this.userName = 'Project Manager';
      this.userRole = 'Project Manager';
      this.userInitial = 'P';

    }

  }
}