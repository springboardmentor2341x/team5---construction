import { Routes } from '@angular/router';

// =========================
// ADMIN IMPORTS
// =========================
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

// =========================
// LAYOUT IMPORTS
// =========================
import { ProjectManagerLayoutComponent } from './layouts/project-manager-layout/project-manager-layout';
import { ResourceManagementLayoutComponent } from './layouts/resource-management-layout/resource-management-layout';
import { WorkforceManagementLayoutComponent } from './layouts/workforce-management-layout/workforce-management-layout';

export const routes: Routes = [

  // =====================================================
  // AUTHENTICATION
  // =====================================================

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

  // =====================================================
  // DEFAULT ROUTE
  // =====================================================

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // =====================================================
  // ADMIN MODULE
  // =====================================================

  {
    path: 'admin',
    component: AdminLayout,

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

  // =====================================================
  // PROJECT MANAGER MODULE
  // =====================================================

  {
    path: 'project-manager',
    component: ProjectManagerLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

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

  // =====================================================
  // RESOURCE MANAGEMENT MODULE
  // =====================================================

  {
    path: 'resource-management',
    component: ResourceManagementLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/resource-management/Dashboard/rm-dashboard')
            .then(m => m.RmDashboardComponent)
      },

      {
        path: 'equipment-allocation',
        loadComponent: () =>
          import('./pages/resource-management/Equipment Allocation/rm-equipment-allocation')
            .then(m => m.RmEquipmentAllocationComponent)
      },

      {
        path: 'machinery-tracking',
        loadComponent: () =>
          import('./pages/resource-management/Machinery Tracking/rm-machinery-tracking')
            .then(m => m.RmMachineryTrackingComponent)
      },

      {
        path: 'resource-utilization',
        loadComponent: () =>
          import('./pages/resource-management/Resource Utilization/rm-resource-utilization')
            .then(m => m.RmResourceUtilizationComponent)
      },

      {
        path: 'resource-availability',
        loadComponent: () =>
          import('./pages/resource-management/Resource Availability/rm-resource-availability')
            .then(m => m.RmResourceAvailabilityComponent)
      },

      {
        path: 'maintenance-scheduling',
        loadComponent: () =>
          import('./pages/resource-management/Maintenance Scheduling/rm-maintenance-scheduling')
            .then(m => m.RmMaintenanceSchedulingComponent)
      },

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
      }

    ]
  },

  // =====================================================
  // WORKFORCE MANAGEMENT MODULE
  // =====================================================

  {
    path: 'workforce-management',
    component: WorkforceManagementLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/workforce-management/Dashboard/wm-dashboard')
            .then(m => m.WmDashboardComponent)
      },

      {
        path: 'worker-registration',
        loadComponent: () =>
          import('./pages/workforce-management/Worker Registration/wm-worker-registration')
            .then(m => m.WmWorkerRegistrationComponent)
      },

      {
        path: 'workforce-allocation',
        loadComponent: () =>
          import('./pages/workforce-management/Workforce Allocation/wm-workforce-allocation')
            .then(m => m.WmWorkforceAllocationComponent)
      },

      {
        path: 'attendance-tracking',
        loadComponent: () =>
          import('./pages/workforce-management/Attendance Tracking/wm-attendance-tracking')
            .then(m => m.WmAttendanceTrackingComponent)
      },

      {
        path: 'shift-scheduling',
        loadComponent: () =>
          import('./pages/workforce-management/Shift Scheduling/wm-shift-scheduling')
            .then(m => m.WmShiftSchedulingComponent)
      },

      {
        path: 'payroll-monitoring',
        loadComponent: () =>
          import('./pages/workforce-management/Payroll Monitoring/wm-payroll-monitoring')
            .then(m => m.WmPayrollMonitoringComponent)
      },

      {
        path: 'workforce-categories',
        loadComponent: () =>
          import('./pages/workforce-management/Workforce Categories/wm-workforce-categories')
            .then(m => m.WmWorkforceCategoriesComponent)
      },

      {
        path: 'workforce-reports',
        loadComponent: () =>
          import('./pages/workforce-management/Workforce Reports/wm-workforce-reports')
            .then(m => m.WmWorkforceReportsComponent)
      }

    ]
  },

  // =====================================================
  // WILDCARD ROUTE
  // =====================================================

  {
    path: '**',
    redirectTo: 'login'
  }

];
    
  
  
