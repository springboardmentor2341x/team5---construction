import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-engineer-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-engineer-dashboard.html',
  styleUrl: './site-engineer-dashboard.css'
})
export class SiteEngineerDashboard {

  dashboardCards = [
    {
      title: 'Assigned Projects',
      value: 5,
      icon: '🏗️'
    },
    {
      title: 'Completed Tasks',
      value: 24,
      icon: '✅'
    },
    {
      title: 'Pending Tasks',
      value: 8,
      icon: '⏳'
    },
    {
      title: 'Resources',
      value: 36,
      icon: '📦'
    }
  ];

  recentActivities = [
    {
      date: '30 Jul 2026',
      activity: 'Daily progress submitted',
      status: 'Completed'
    },
    {
      date: '29 Jul 2026',
      activity: 'Equipment inspection completed',
      status: 'Completed'
    },
    {
      date: '28 Jul 2026',
      activity: 'Material request approved',
      status: 'Approved'
    },
    {
      date: '27 Jul 2026',
      activity: 'Worker attendance updated',
      status: 'Completed'
    },
    {
      date: '26 Jul 2026',
      activity: 'Weekly report submitted',
      status: 'Submitted'
    }
  ];

}