import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardAndAnalyticsSidebarComponent } from './dashboard-and-analytics-sidebar/dashboard-and-analytics-sidebar';
import { DashboardAndAnalyticsTopNavbarComponent } from './dashboard-and-analytics-top-navbar/dashboard-and-analytics-top-navbar';

@Component({
  selector: 'app-dashboard-and-analytics-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardAndAnalyticsSidebarComponent,
    DashboardAndAnalyticsTopNavbarComponent
  ],
  templateUrl: './dashboard-and-analytics-layout.html',
  styleUrl: './dashboard-and-analytics-layout.css'
})
export class DashboardAndAnalyticsLayoutComponent {

}