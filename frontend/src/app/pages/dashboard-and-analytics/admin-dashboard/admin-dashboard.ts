import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface UserRole {
  name: string;
  description: string;
  count: number;
  icon: string;
}

interface Project {
  name: string;
  location: string;
  manager: string;
  progress: number;
  status: string;
  budget: number;
}

interface Report {
  name: string;
  date: string;
  type: string;
}

interface Activity {
  action: string;
  user: string;
  time: string;
  type: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboardComponent {

  /* =========================================
     SYSTEM SUMMARY
  ========================================== */

  totalUsers = 248;
  activeUsers = 221;

  activeProjects = 32;
  onTrackProjects = 24;

  todayActivities = 186;
  criticalActivities = 3;

  totalReports = 96;
  pendingReports = 8;


  /* =========================================
     SYSTEM ANALYTICS
  ========================================== */

  systemUptime = 99.8;
  activeSessions = 74;
  completedProjects = 18;
  pendingActions = 27;

  monthlyActivity = 76;


  /* =========================================
     USER ROLES
  ========================================== */

  userRoles: UserRole[] = [

    {
      name: 'Administrator',
      description: 'System administrators',
      count: 8,
      icon: 'A'
    },

    {
      name: 'Project Manager',
      description: 'Project management users',
      count: 24,
      icon: 'P'
    },

    {
      name: 'Site Engineer',
      description: 'Site monitoring users',
      count: 46,
      icon: 'S'
    },

    {
      name: 'Contractor',
      description: 'Contract management users',
      count: 31,
      icon: 'C'
    },

    {
      name: 'Worker',
      description: 'Workforce users',
      count: 125,
      icon: 'W'
    },

    {
      name: 'Client',
      description: 'Project client users',
      count: 14,
      icon: 'CL'
    }

  ];


  /* =========================================
     PROJECT MONITORING
  ========================================== */

  projects: Project[] = [

    {
      name: 'Chennai Metro Construction',
      location: 'Chennai',
      manager: 'Project Manager',
      progress: 68,
      status: 'On Track',
      budget: 10000000
    },

    {
      name: 'Residential Tower Project',
      location: 'Tambaram',
      manager: 'Project Manager',
      progress: 45,
      status: 'On Track',
      budget: 8500000
    },

    {
      name: 'Commercial Complex',
      location: 'Guindy',
      manager: 'Project Manager',
      progress: 82,
      status: 'On Track',
      budget: 12500000
    },

    {
      name: 'Highway Development',
      location: 'Chengalpattu',
      manager: 'Project Manager',
      progress: 39,
      status: 'At Risk',
      budget: 15000000
    },

    {
      name: 'Industrial Building',
      location: 'Sriperumbudur',
      manager: 'Project Manager',
      progress: 100,
      status: 'Completed',
      budget: 7000000
    }

  ];


  /* =========================================
     REPORTS
  ========================================== */

  reports: Report[] = [

    {
      name: 'Monthly Project Performance',
      date: '03 Sep 2026',
      type: 'PDF'
    },

    {
      name: 'Workforce Summary Report',
      date: '02 Sep 2026',
      type: 'PDF'
    },

    {
      name: 'Budget Utilization Report',
      date: '01 Sep 2026',
      type: 'Excel'
    },

    {
      name: 'Resource Utilization Report',
      date: '31 Aug 2026',
      type: 'PDF'
    }

  ];


  /* =========================================
     ACTIVITY MONITORING
  ========================================== */

  activities: Activity[] = [

    {
      action: 'New user account created',
      user: 'Administrator',
      time: '10 minutes ago',
      type: 'normal'
    },

    {
      action: 'Project status updated',
      user: 'Project Manager',
      time: '25 minutes ago',
      type: 'normal'
    },

    {
      action: 'Budget threshold alert generated',
      user: 'System',
      time: '40 minutes ago',
      type: 'warning'
    },

    {
      action: 'Multiple failed login attempts',
      user: 'System',
      time: '1 hour ago',
      type: 'danger'
    },

    {
      action: 'Procurement request approved',
      user: 'Project Manager',
      time: '2 hours ago',
      type: 'normal'
    }

  ];


  lastUpdated = 'Today, 10:30 AM';


  /* =========================================
     ACTIONS
  ========================================== */

  refreshDashboard(): void {

    this.lastUpdated = 'Just now';

    console.log('Admin dashboard refreshed');

  }


  formatAmount(amount: number): string {

    return new Intl.NumberFormat('en-IN').format(amount);

  }

}