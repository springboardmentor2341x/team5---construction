import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'project-manager/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'project-manager',
    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/project-manager/Dashboard/project-manager-dashboard')
            .then(m => m.ProjectManagerDashboardComponent)
      },

      {
        path: 'my-projects',
        loadComponent: () =>
          import('./pages/project-manager/MyProjects/pm-my-projects')
            .then(m => m.MyProjectsComponent)
      },

      {
        path: 'project-details',
        loadComponent: () =>
          import('./pages/project-manager/ProjectDetails/pm-project-details')
            .then(m => m.ProjectDetailsComponent)
      },

      {
        path: 'project-schedule',
        loadComponent: () =>
          import('./pages/project-manager/ProjectSchedule/pm-project-schedule')
            .then(m => m.ProjectScheduleComponent)
      },

      {
        path: 'milestones',
        loadComponent: () =>
          import('./pages/project-manager/Milestones/pm-milestones')
            .then(m => m.MilestonesComponent)
      },

      {
        path: 'site-engineers',
        loadComponent: () =>
          import('./pages/project-manager/SiteEngineers/pm-site-engineers')
            .then(m => m.SiteEngineersComponent)
      },

      {
        path: 'contractors',
        loadComponent: () =>
          import('./pages/project-manager/Contractors/pm-contractors')
            .then(m => m.ContractorsComponent)
      },

      {
        path: 'site-progress',
        loadComponent: () =>
          import('./pages/project-manager/SiteProgress/pm-site-progress')
            .then(m => m.SiteProgressComponent)
      },

      {
        path: 'resource-allocation',
        loadComponent: () =>
          import('./pages/project-manager/ResourceAllocation/pm-resource-allocation')
            .then(m => m.ResourceAllocationComponent)
      },

      {
        path: 'workforce',
        loadComponent: () =>
          import('./pages/project-manager/Workforce/pm-workforce')
            .then(m => m.WorkforceComponent)
      },

      {
        path: 'procurement-requests',
        loadComponent: () =>
          import('./pages/project-manager/ProcurementRequests/pm-procurement-requests')
            .then(m => m.ProcurementRequestsComponent)
      },

      {
        path: 'budget-tracking',
        loadComponent: () =>
          import('./pages/project-manager/BudgetTracking/pm-budget-tracking')
            .then(m => m.BudgetTrackingComponent)
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/project-manager/Reports/pm-reports')
            .then(m => m.ReportsComponent)
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/project-manager/Notifications/pm-notifications')
            .then(m => m.NotificationsComponent)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/project-manager/Profile/pm-profile')
            .then(m => m.PmProfileComponent)
      },

      {
        path: 'logout',
        loadComponent: () =>
          import('./pages/project-manager/Logout/Logout/pm-logout')
            .then(m => m.LogoutComponent)
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'project-manager/dashboard'
  }

];