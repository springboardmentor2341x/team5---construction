import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-workforce-management-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './workforce-management-sidebar.html',
  styleUrl: './workforce-management-sidebar.css'
})
export class WorkforceManagementSidebarComponent {

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/workforce-management/dashboard'
    },
    {
      label: 'Worker Registration',
      icon: 'engineering',
      route: '/workforce-management/worker-registration'
    },
    {
      label: 'Workforce Categories',
      icon: 'category',
      route: '/workforce-management/workforce-categories'
    },
    {
      label: 'Workforce Allocation',
      icon: 'assignment',
      route: '/workforce-management/workforce-allocation'
    },
    {
      label: 'Attendance Tracking',
      icon: 'schedule',
      route: '/workforce-management/attendance-tracking'
    },
    {
      label: 'Shift Scheduling',
      icon: 'calendar_month',
      route: '/workforce-management/shift-scheduling'
    },
    {
      label: 'Payroll Monitoring',
      icon: 'payments',
      route: '/workforce-management/payroll-monitoring'
    },
    {
      label: 'Workforce Reports',
      icon: 'assessment',
      route: '/workforce-management/workforce-reports'
    }
  ];

}