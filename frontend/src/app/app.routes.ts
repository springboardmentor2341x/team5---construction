import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';

// Admin Imports
import { Projects } from './pages/admin/project-management/projects/projects';
import { ProjectDetails } from './pages/admin/project-management/project-details/project-details';
import { EditProject } from './pages/admin/project-management/edit-project/edit-project';
import { AddProject } from './pages/admin/project-management/add-project/add-project';
import { ViewProject } from './pages/admin/project-management/view-project/view-project';

import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Dashboard } from './pages/admin/dashboard/dashboard';

import { EditUser } from './pages/admin/user-management/edit-user/edit-user';
import { AddUser } from './pages/admin/user-management/add-user/add-user';
import { ViewUser } from './pages/admin/user-management/view-user/view-user';
import { UserDetails } from './pages/admin/user-management/user-details/user-details';

import { ProjectManagerLayoutComponent } from './layouts/project-manager-layout/project-manager-layout';
import { ResourceManagementLayoutComponent }from './layouts/resource-management-layout/resource-management-layout';
export const routes: Routes = [


  {
  path: 'login',
  loadComponent: () =>
    import('./pages/authentication/login/login')
      .then(m => m.Login)
},

{
  path: 'register',
  loadComponent: () =>
    import('./pages/authentication/register/register')
      .then(m => m.Register)
},

{
  path: 'reset-password',
  loadComponent: () =>
    import('./pages/authentication/reset-password/reset-password')
      .then(m => m.ResetPassword)
},

  // Default Route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // =========================
  // ADMIN MODULE
  // =========================
  {
    path: 'admin',
    component: AdminLayout,
     canActivate: [
    authGuard,
    roleGuard(['Administrator'])
  ],
   canActivateChild: [
    authGuard,
    roleGuard(['Administrator'])
  ],
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: Dashboard
      },

      {
        path: 'add-user',
        component: AddUser
      },

      {
        path: 'user-details',
        component: UserDetails
      },

      {
        path: 'view-user',
        component: ViewUser
      },

      {
        path: 'edit-user',
        component: EditUser
      },

      {
        path: 'projects',
        component: Projects
      },

      {
        path: 'project-details',
        component: ProjectDetails
      },

      {
        path: 'edit-project',
        component: EditProject
      },

      {
        path: 'view-project',
        component: ViewProject
      },

      {
        path: 'add-project',
        component: AddProject
      }

    ]
  },




  // =========================
  // SITE ENGINEER
  // =========================

  {
    path: 'site-engineer',
      canActivate: [
    authGuard,
    roleGuard(['Site Engineer'])
  ],
  canActivateChild: [
    authGuard,
    roleGuard(['Site Engineer'])
  ],

    loadComponent: () =>
      import('./layouts/site-engineer-layout/site-engineer-layout')
        .then(m => m.SiteEngineerLayout),


    children: [

        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },

        {
          path: 'dashboard',
          loadComponent: () =>
            import('./pages/site-engineer/Dashboard/site-engineer-dashboard')
              .then(m => m.SiteEngineerDashboard)
        },

        {
          path: 'activity-logs',
          loadComponent: () =>
            import('./pages/site-engineer/ActivityLogs/se-activity-logs')
              .then(m => m.SeActivityLogs)
        },

        {
          path: 'daily-material-used',
          loadComponent: () => 
            import('./pages/site-engineer/daily-material-used/daily-material-used')
              .then(m => m.DailyMaterialUsed)
        },
      {
        path: 'activity-details',
        loadComponent: () =>
          import('./pages/site-engineer/activity-details/activity-details')
            .then(m => m.ActivityDetails)
      },
      {
        path: 'milestones',
        loadComponent: () =>
          import('./pages/site-engineer/se-milestones/se-milestones')
            .then(m => m.SeMilestones)
      },
      {
        path:'milestone-details',
        loadComponent: () =>
          import('./pages/site-engineer/milestone-details/milestone-details')
          .then(m => m.MilestoneDetails)
      },

      {
        path:'delay-tracking',
        loadComponent: ()=>
          import('./pages/site-engineer/delay-tracking/delay-tracking')
          .then(m => m.DelayTracking)
      },

      {
      path:'work-completion-status',
      loadComponent: () =>
        import('./pages/site-engineer/se-work-completion-status/se-work-completion-status')
          .then(m => m.SeWorkCompletionStatus)
      },

      {
        path: 'delay-details',
        loadComponent: () =>
          import('./pages/site-engineer/delay-details/delay-details')
            .then(m => m.DelayDetails)
      },
      {
        path: 'assigned-projects',
        loadComponent: () =>
          import('./pages/site-engineer/AssignedProjects/se-assigned-projects')
            .then(m => m.SeAssignedProjects)
      },

      {
        path: 'project-details',
        loadComponent: () =>
          import('./pages/site-engineer/ProjectDetails/se-project-details')
            .then(m => m.SeProjectDetails)
      },

      {
        path: 'daily-progress',
        loadComponent: () =>
          import('./pages/site-engineer/DailyProgress/se-daily-progress')
            .then(m => m.SeDailyProgress)
      },

      {
        path: 'daily-report-details',
        loadComponent: () =>
          import('./pages/site-engineer/daily-report-details/daily-report-details')
            .then(m => m.DailyReportDetails)
      },
    

      {
        path: 'equipment-status',
        loadComponent: () =>
          import('./pages/site-engineer/EquipmentStatus/se-equipment-status')
            .then(m => m.SeEquipmentStatus)
      },

     {
      path: 'add-equipment',
      loadComponent: () =>
        import('./pages/site-engineer/add-equipment/add-equipment')
          .then(m => m.AddEquipmentcomponent)
      },

     {
      path: 'equipment-details',
      loadComponent: () =>
          import('./pages/site-engineer/equipment-details/equipment-details')
          .then(m => m.EquipmentDetails)
      
     },

     {
      path: 'notifications',
      loadComponent: () =>
        import('./pages/site-engineer/Notifications/se-notifications')
          .then(m => m.SeNotifications)
     },

     {
      path: 'profile',
      loadComponent: () =>
        import('./pages/site-engineer/Profile/se-profile')
          .then(m => m.SeProfile)
     },

     {
      path: 'resources',
      loadComponent: () =>
        import('./pages/site-engineer/Resources/se-resources')
          .then(m => m.SeResources)
     },

      {
      path: 'resource-details',
      loadComponent: () =>
        import('./pages/site-engineer/resource-details/resource-details')
        .then(m => m.ResourceDetails)
      },

        {
          path: 'weekly-reports',
          loadComponent: () =>
            import('./pages/site-engineer/WeeklyReports/se-weekly-reports')
              .then(m => m.SeWeeklyReports)
        },
        {
          path:'weekly-report-details',
          loadComponent:() =>
            import('./pages/site-engineer/weekly-report-details/weekly-report-details')
                .then(m => m.WeeklyReportDetails)
        }

     ]
},


  // =========================
  // PROJECT MANAGER MODULE
  // =========================

  {
    path: 'project-manager',
     canActivate: [
    authGuard,
    roleGuard(['Project Manager'])
  ],
   canActivateChild: [
    authGuard,
    roleGuard(['Project Manager'])
  ],
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
// Resource-management-system

  {
    path: 'resource-management',

    component: ResourceManagementLayoutComponent,

    children: [

      // -----------------------------
      // DEFAULT
      // -----------------------------

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },


      // -----------------------------
      // 1. DASHBOARD
      // -----------------------------

      {
        path: 'dashboard',

        loadComponent: () =>
          import('./pages/resource-management/Dashboard/rm-dashboard')
            .then(m => m.RmDashboardComponent)
      },


      // -----------------------------
      // 2. EQUIPMENT ALLOCATION
      // -----------------------------

      {
        path: 'equipment-allocation',

        loadComponent: () =>
          import('./pages/resource-management/Equipment Allocation/rm-equipment-allocation')
            .then(m => m.RmEquipmentAllocationComponent)
      },


      // -----------------------------
      // 3. MACHINERY TRACKING
      // -----------------------------

      {
        path: 'machinery-tracking',

        loadComponent: () =>
          import('./pages/resource-management/Machinery Tracking/rm-machinery-tracking')
            .then(m => m.RmMachineryTrackingComponent)
      },


      // -----------------------------
      // 4. RESOURCE UTILIZATION
      // -----------------------------

      {
        path: 'resource-utilization',

        loadComponent: () =>
          import('./pages/resource-management/Resource Utilization/rm-resource-utilization')
            .then(m => m.RmResourceUtilizationComponent)
      },


      // -----------------------------
      // 5. RESOURCE AVAILABILITY
      // -----------------------------

      {
        path: 'resource-availability',

        loadComponent: () =>
          import('./pages/resource-management/Resource Availability/rm-resource-availability')
            .then(m => m.RmResourceAvailabilityComponent)
      },


      // -----------------------------
      // 6. MAINTENANCE SCHEDULING
      // -----------------------------

      {
        path: 'maintenance-scheduling',

        loadComponent: () =>
          import('./pages/resource-management/Maintenance Scheduling/rm-maintenance-scheduling')
            .then(m => m.RmMaintenanceSchedulingComponent)
      },


      // -----------------------------
      // 7. RESOURCE REPORTS
      // -----------------------------

      {
        path: 'reports',

        loadComponent: () =>
          import('./pages/resource-management/Reports/rm-reports')
            .then(m => m.RmReportsComponent)
      },
      {
  path: 'resources',
  loadComponent: () =>
    import('./pages/resource-management/Resources/rm-resources')
      .then(m => m.RmResourcesComponent)
},
//   // Wildcard Route
  {
    path: '**',
    redirectTo: 'login'
  }



    ]
  }

];