// import { Routes } from '@angular/router';
// import { authGuard } from './guards/auth-guard';
// import { roleGuard } from './guards/role-guard';
// <<<<<<< HEAD
// // =========================
// // ADMIN IMPORTS
// // =========================
// =======

// // Admin Imports
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
// import { Projects } from './pages/admin/project-management/projects/projects';
// import { ProjectDetails } from './pages/admin/project-management/project-details/project-details';
// import { EditProject } from './pages/admin/project-management/edit-project/edit-project';
// import { AddProject } from './pages/admin/project-management/add-project/add-project';
// import { ViewProject } from './pages/admin/project-management/view-project/view-project';
// import { SiteEngineers } from './pages/admin/site-engineers/site-engineers'; 
// import { MaterialInventory } from './pages/admin/material-inventory/material-inventory'; 
// import { Inventory } from './pages/admin/material-inventory/inventory/inventory'; 
// import { MaterialRequests } from './pages/admin/material-inventory/material-requests/material-requests'; 
// import { NewMaterialRequest } from './pages/admin/material-inventory/new-material-request/new-material-request'; 
// import { LowStock } from './pages/admin/material-inventory/low-stock/low-stock'; 
// import { MaterialAllocation } from './pages/admin/material-inventory/material-allocation/material-allocation'; 
// import { StockMovements } from './pages/admin/material-inventory/stock-movements/stock-movements'; 



// import { AdminLayout } from './layouts/admin-layout/admin-layout';
// import { Dashboard } from './pages/admin/dashboard/dashboard';

// import { EditUser } from './pages/admin/user-management/edit-user/edit-user';
// import { AddUser } from './pages/admin/user-management/add-user/add-user';
// import { ViewUser } from './pages/admin/user-management/view-user/view-user';
// import { UserDetails } from './pages/admin/user-management/user-details/user-details';
// import { Analytics } from './pages/admin/analytics/analytics';
// import { AuditLogs } from './pages/admin/audit-logs/audit-logs';
// import { Report } from './pages/admin/report/report';
// // =========================
// // LAYOUT IMPORTS
// // =========================
// import { ProjectManagerLayoutComponent } from './layouts/project-manager-layout/project-manager-layout';

// import { ResourceManagementLayoutComponent } from './layouts/resource-management-layout/resource-management-layout';
// import { WorkforceManagementLayoutComponent } from './layouts/workforce-management-layout/workforce-management-layout';
// import { BudgetManagementLayoutComponent } from './layouts/budget-management-layout/budget-management-layout';
// import { NotificationsLayout } from './layouts/notifications-layout/notifications-layout';
// import { DashboardAndAnalyticsLayoutComponent } from './layouts/dashboard-and-analytics-layout/dashboard-and-analytics-layout';
// import { ProjectManagerDashboardComponent } from './pages/dashboard-and-analytics/project-manager-dashboard/project-manager-dashboard';
// import { AdminDashboardComponent } from './pages/dashboard-and-analytics/admin-dashboard/admin-dashboard';
// import { ReportsLayoutComponent } from './layouts/reports-layout/reports-layout';
// <<<<<<< HEAD
// =======


// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
// export const routes: Routes = [

//   // =====================================================
//   // AUTHENTICATION
//   // =====================================================

//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./pages/authentication/login/login')
//         .then(m => m.Login)
//   },

//   {
//     path: 'register',
//     loadComponent: () =>
//       import('./pages/authentication/register/register')
//         .then(m => m.Register)
//   },

// <<<<<<< HEAD
//   {
//     path: 'reset-password',
//     loadComponent: () =>
//       import('./pages/authentication/reset-password/reset-password')
//         .then(m => m.ResetPassword)
//   },

//   // =====================================================
//   // DEFAULT ROUTE
//   // =====================================================
// =======
// {
//   path: 'reset-password',
//   loadComponent: () =>
//     import('./pages/authentication/reset-password/reset-password')
//       .then(m => m.ResetPasswordComponent)
// },
// {
//   path: 'forgot-password',
//   loadComponent: () =>
//     import('./pages/authentication/forgot-password/forgot-password')
//       .then(m => m.ForgotPasswordComponent)
// },

// {
//   path: 'verify-otp',
//   loadComponent: () =>
//     import('./pages/authentication/verify-otp/verify-otp')
//       .then(m => m.VerifyOtpComponent)
// },
// {
//   path: 'landing',
//   loadComponent: () =>
//     import('./pages/landing/landing')
//       .then(m => m.Landing)
// },
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

//   {
//     path: '',
//     redirectTo: 'landing',
//     pathMatch: 'full'
//   },

//   // =====================================================
//   // ADMIN MODULE
//   // =====================================================

//   {
//     path: 'admin',
//     component: AdminLayout,
// <<<<<<< HEAD

// =======
//      canActivate: [
//     authGuard,
//     roleGuard(['Administrator'])
//   ],
//    canActivateChild: [
//     authGuard,
//     roleGuard(['Administrator'])
//   ],
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
//     children: [



// { 
//   path: 'material-inventory/stock-movements', 
//   component: StockMovements 
// },
// { 
//   path: 'material-inventory/material-allocation', 
//   component: MaterialAllocation 
// }, 
//       { 
//   path: 'material-inventory/low-stock', 
//   component: LowStock 
// }, 
// { 
//   path: 'low-stock', 
//   component: LowStock 
// }, 
//       { 
//   path: 'new-material-request', 
//   component: NewMaterialRequest 
// },{ 
//   path: 'material-requests', 
//   component: MaterialRequests 
// }, 
//       { 
//   path: 'material-inventory/inventory', 
//   component: Inventory 
// }, 
//       { 
//   path: 'material-inventory', 
//   component: MaterialInventory 
// }, 
// { 
//   path: 'site-engineers', 
//   component: SiteEngineers 
// }, 

//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },

//       {
//         path: 'dashboard',
//         component: Dashboard
//       },

//       {
//         path: 'add-user',
//         component: AddUser
//       },

//       {
//         path: 'user-details',
//         component: UserDetails
//       },

//       {
//         path: 'view-user',
//         component: ViewUser
//       },

//       {
//         path: 'edit-user',
//         component: EditUser
//       },

//       {
//         path: 'projects',
//         component: Projects
//       },

//       {
//         path: 'project-details/:id',
//         component: ProjectDetails
//       },

//       {
//         path: 'edit-project',
//         component: EditProject
//       },
//       {
//         path: 'edit-project/:id',
//         component: EditProject
//       },


//       {
//         path: 'view-project',
//         component: ViewProject
//       },

//       {
//         path: 'add-project',
//         component: AddProject
//       },
//       {
//   path: 'analytics',
//   component: Analytics
// },
// {
//   path: 'audit-logs',
//   component: AuditLogs
// },
// {
//   path: 'report',
//   component: Report
// }

//     ]
//   },
// <<<<<<< HEAD
//    // =========================
//   // SITE ENGINEER
//   // =========================

//   {
//     path: 'site-engineer',
//       canActivate: [
//     authGuard,
//     roleGuard,
//   ],
//   canActivateChild: [
//     authGuard,
//     roleGuard,
//   ],

//     loadComponent: () =>
//       import('./layouts/site-engineer-layout/site-engineer-layout')
//         .then(m => m.SiteEngineerLayout),


//     children: [

//         {
//           path: '',
//           redirectTo: 'dashboard',
//           pathMatch: 'full'
//         },

//         {
//           path: 'dashboard',
//           loadComponent: () =>
//             import('./pages/site-engineer/Dashboard/site-engineer-dashboard')
//               .then(m => m.SiteEngineerDashboard)
//         },

//         {
//           path: 'activity-logs',
//           loadComponent: () =>
//             import('./pages/site-engineer/ActivityLogs/se-activity-logs')
//               .then(m => m.SeActivityLogs)
//         },

//         {
//           path: 'daily-material-used',
//           loadComponent: () => 
//             import('./pages/site-engineer/daily-material-used/daily-material-used')
//               .then(m => m.DailyMaterialUsed)
//         },
//       {
//         path: 'activity-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/activity-details/activity-details')
//             .then(m => m.ActivityDetails)
//       },
//       {
//         path: 'milestones',
//         loadComponent: () =>
//           import('./pages/site-engineer/se-milestones/se-milestones')
//             .then(m => m.SeMilestones)
//       },
//       {
//         path:'milestone-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/milestone-details/milestone-details')
//           .then(m => m.MilestoneDetails)
//       },

//       {
//         path:'delay-tracking',
//         loadComponent: ()=>
//           import('./pages/site-engineer/delay-tracking/delay-tracking')
//           .then(m => m.DelayTracking)
//       },

//       {
//       path:'work-completion-status',
//       loadComponent: () =>
//         import('./pages/site-engineer/se-work-completion-status/se-work-completion-status')
//           .then(m => m.SeWorkCompletionStatus)
//       },

//       {
//         path: 'delay-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/delay-details/delay-details')
//             .then(m => m.DelayDetails)
//       },
//       {
//         path: 'assigned-projects',
//         loadComponent: () =>
//           import('./pages/site-engineer/AssignedProjects/se-assigned-projects')
//             .then(m => m.SeAssignedProjects)
//       },

//       {
//         path: 'project-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/ProjectDetails/se-project-details')
//             .then(m => m.SeProjectDetails)
//       },

//       {
//         path: 'daily-progress',
//         loadComponent: () =>
//           import('./pages/site-engineer/DailyProgress/se-daily-progress')
//             .then(m => m.SeDailyProgress)
//       },

//       {
//         path: 'daily-report-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/daily-report-details/daily-report-details')
//             .then(m => m.DailyReportDetails)
//       },
    

//       {
//         path: 'equipment-status',
//         loadComponent: () =>
//           import('./pages/site-engineer/EquipmentStatus/se-equipment-status')
//             .then(m => m.SeEquipmentStatus)
//       },

//      {
//       path: 'add-equipment',
//       loadComponent: () =>
//         import('./pages/site-engineer/add-equipment/add-equipment')
//           .then(m => m.AddEquipmentcomponent)
//       },

//      {
//       path: 'equipment-details',
//       loadComponent: () =>
//           import('./pages/site-engineer/equipment-details/equipment-details')
//           .then(m => m.EquipmentDetails)
      
//      },

//      {
//       path: 'notifications',
//       loadComponent: () =>
//         import('./pages/site-engineer/Notifications/se-notifications')
//           .then(m => m.SeNotifications)
//      },

//      {
//       path: 'profile',
//       loadComponent: () =>
//         import('./pages/site-engineer/Profile/se-profile')
//           .then(m => m.SeProfile)
//      },

//      {
//       path: 'resources',
//       loadComponent: () =>
//         import('./pages/site-engineer/Resources/se-resources')
//           .then(m => m.SeResources)
//      },

//       {
//       path: 'resource-details',
//       loadComponent: () =>
//         import('./pages/site-engineer/resource-details/resource-details')
//         .then(m => m.ResourceDetails)
//       },

//         {
//           path: 'weekly-reports',
//           loadComponent: () =>
//             import('./pages/site-engineer/WeeklyReports/se-weekly-reports')
//               .then(m => m.SeWeeklyReports)
//         },
//         {
//           path:'weekly-report-details',
//           loadComponent:() =>
//             import('./pages/site-engineer/weekly-report-details/weekly-report-details')
//                 .then(m => m.WeeklyReportDetails)
//         }

//      ]
// },



//   // =====================================================
//   // PROJECT MANAGER MODULE
//   // =====================================================

//   {
//     path: 'project-manager',
//     component: ProjectManagerLayoutComponent,

//     children: [

//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },

// =======




//   // =========================
//   // SITE ENGINEER
//   // =========================

//   {
//     path: 'site-engineer',
//       canActivate: [
//     authGuard,
//     roleGuard(['Site Engineer'])
//   ],
//   canActivateChild: [
//     authGuard,
//     roleGuard(['Site Engineer'])
//   ],

//     loadComponent: () =>
//       import('./layouts/site-engineer-layout/site-engineer-layout')
//         .then(m => m.SiteEngineerLayout),


//     children: [

//         {
//           path: '',
//           redirectTo: 'dashboard',
//           pathMatch: 'full'
//         },

//         {
//           path: 'dashboard',
//           loadComponent: () =>
//             import('./pages/site-engineer/Dashboard/site-engineer-dashboard')
//               .then(m => m.SiteEngineerDashboard)
//         },

//         {
//           path: 'activity-logs',
//           loadComponent: () =>
//             import('./pages/site-engineer/ActivityLogs/se-activity-logs')
//               .then(m => m.SeActivityLogs)
//         },

//         {
//           path: 'daily-material-used',
//           loadComponent: () => 
//             import('./pages/site-engineer/daily-material-used/daily-material-used')
//               .then(m => m.DailyMaterialUsed)
//         },
//       {
//         path: 'activity-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/activity-details/activity-details')
//             .then(m => m.ActivityDetails)
//       },
//       {
//         path: 'milestones',
//         loadComponent: () =>
//           import('./pages/site-engineer/se-milestones/se-milestones')
//             .then(m => m.SeMilestones)
//       },
//       {
//         path:'milestone-details/:id',
//         loadComponent: () =>
//           import('./pages/site-engineer/milestone-details/milestone-details')
//           .then(m => m.MilestoneDetails)
//       },

//       {
//         path:'delay-tracking',
//         loadComponent: ()=>
//           import('./pages/site-engineer/delay-tracking/delay-tracking')
//           .then(m => m.DelayTracking)
//       },

//       {
//       path:'work-completion-status',
//       loadComponent: () =>
//         import('./pages/site-engineer/se-work-completion-status/se-work-completion-status')
//           .then(m => m.SeWorkCompletionStatus)
//       },

//       {
//         path: 'delay-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/delay-details/delay-details')
//             .then(m => m.DelayDetails)
//       },
//       {
//         path: 'assigned-projects',
//         loadComponent: () =>
//           import('./pages/site-engineer/AssignedProjects/se-assigned-projects')
//             .then(m => m.SeAssignedProjects)
//       },

//       {
//         path: 'project-details',
//         loadComponent: () =>
//           import('./pages/site-engineer/ProjectDetails/se-project-details')
//             .then(m => m.SeProjectDetails)
//       },

//       {
//         path: 'daily-progress',
//         loadComponent: () =>
//           import('./pages/site-engineer/DailyProgress/se-daily-progress')
//             .then(m => m.SeDailyProgress)
//       },

//       {
//         path: 'daily-report-details/:id',
//         loadComponent: () =>
//           import('./pages/site-engineer/daily-report-details/daily-report-details')
//             .then(m => m.DailyReportDetails)
//       },
    

//       {
//         path: 'equipment-status',
//         loadComponent: () =>
//           import('./pages/site-engineer/EquipmentStatus/se-equipment-status')
//             .then(m => m.SeEquipmentStatus)
//       },

//      {
//       path: 'add-equipment',
//       loadComponent: () =>
//         import('./pages/site-engineer/add-equipment/add-equipment')
//           .then(m => m.AddEquipmentcomponent)
//       },

//      {
//       path: 'equipment-details',
//       loadComponent: () =>
//           import('./pages/site-engineer/equipment-details/equipment-details')
//           .then(m => m.EquipmentDetails)
      
//      },

//      {
//       path: 'notifications',
//       loadComponent: () =>
//         import('./pages/site-engineer/Notifications/se-notifications')
//           .then(m => m.SeNotifications)
//      },

//      {
//       path: 'profile',
//       loadComponent: () =>
//         import('./pages/site-engineer/Profile/se-profile')
//           .then(m => m.SeProfile)
//      },

//      {
//       path: 'resources',
//       loadComponent: () =>
//         import('./pages/site-engineer/Resources/se-resources')
//           .then(m => m.SeResources)
//      },

//       {
//       path: 'resource-details',
//       loadComponent: () =>
//         import('./pages/site-engineer/resource-details/resource-details')
//         .then(m => m.ResourceDetails)
//       },

//         {
//           path: 'weekly-reports',
//           loadComponent: () =>
//             import('./pages/site-engineer/WeeklyReports/se-weekly-reports')
//               .then(m => m.SeWeeklyReports)
//         },
//         {
//           path:'weekly-report-details',
//           loadComponent:() =>
//             import('./pages/site-engineer/weekly-report-details/weekly-report-details')
//                 .then(m => m.WeeklyReportDetails)
//         }

//      ]
// },


//   // =========================
//   // PROJECT MANAGER MODULE
//   // =========================

//   {
//     path: 'project-manager',
//      canActivate: [
//     authGuard,
//     roleGuard(['Project Manager'])
//   ],
//    canActivateChild: [
//     authGuard,
//     roleGuard(['Project Manager'])
//   ],

//         loadComponent: () =>
//       import('./layouts/project-manager-layout/project-manager-layout')
//         .then(m => m.ProjectManagerLayoutComponent),

//     children: [

  
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./pages/project-manager/Dashboard/project-manager-dashboard')
//             .then(m => m.ProjectManagerDashboardComponent)
//       },

//       {
//         path: 'my-projects',
//         loadComponent: () =>
//           import('./pages/project-manager/MyProjects/pm-my-projects')
//             .then(m => m.MyProjectsComponent)
//       },

//       {
//         path: 'project-details',
//         loadComponent: () =>
//           import('./pages/project-manager/ProjectDetails/pm-project-details')
//             .then(m => m.ProjectDetailsComponent)
//       },

//       {
//         path: 'project-schedule',
//         loadComponent: () =>
//           import('./pages/project-manager/ProjectSchedule/pm-project-schedule')
//             .then(m => m.ProjectScheduleComponent)
//       },

//       {
//         path: 'milestones',
//         loadComponent: () =>
//           import('./pages/project-manager/Milestones/pm-milestones')
//             .then(m => m.MilestonesComponent)
//       },

//       {
//         path: 'site-engineers',
//         loadComponent: () =>
//           import('./pages/project-manager/SiteEngineers/pm-site-engineers')
//             .then(m => m.SiteEngineersComponent)
//       },

//       {
//         path: 'contractors',
//         loadComponent: () =>
//           import('./pages/project-manager/Contractors/pm-contractors')
//             .then(m => m.ContractorsComponent)
//       },

//       {
//         path: 'site-progress',
//         loadComponent: () =>
//           import('./pages/project-manager/SiteProgress/pm-site-progress')
//             .then(m => m.SiteProgressComponent)
//       },

//       {
//         path: 'resource-allocation',
//         loadComponent: () =>
//           import('./pages/project-manager/ResourceAllocation/pm-resource-allocation')
//             .then(m => m.ResourceAllocationComponent)
//       },

//       {
//         path: 'workforce',
//         loadComponent: () =>
//           import('./pages/project-manager/Workforce/pm-workforce')
//             .then(m => m.WorkforceComponent)
//       },

//       {
//         path: 'procurement-requests',
//         loadComponent: () =>
//           import('./pages/project-manager/ProcurementRequests/pm-procurement-requests')
//             .then(m => m.ProcurementRequestsComponent)
//       },

//       {
//         path: 'budget-tracking',
//         loadComponent: () =>
//           import('./pages/project-manager/BudgetTracking/pm-budget-tracking')
//             .then(m => m.BudgetTrackingComponent)
//       },

//       {
//         path: 'reports',
//         loadComponent: () =>
//           import('./pages/project-manager/Reports/pm-reports')
//             .then(m => m.ReportsComponent)
//       },

//       {
//         path: 'notifications',
//         loadComponent: () =>
//           import('./pages/project-manager/Notifications/pm-notifications')
//             .then(m => m.NotificationsComponent)
//       },

//       {
//         path: 'profile',
//         loadComponent: () =>
//           import('./pages/project-manager/Profile/pm-profile')
//             .then(m => m.PmProfileComponent)
//       },

//       {
//         path: 'logout',
//         loadComponent: () =>
//           import('./pages/project-manager/Logout/Logout/pm-logout')
//             .then(m => m.LogoutComponent)
//       }

//     ]
//   },
  

//   // =====================================================
//   // RESOURCE MANAGEMENT MODULE
//   // =====================================================

//   {
//     path: 'resource-management',
// <<<<<<< HEAD
// =======
//   // canActivate: [
//   //   authGuard,
//   //   roleGuard(['Resource Management'])
//   // ],
//   //  canActivateChild: [
//   //   authGuard,
//   //   roleGuard(['Resource Management'])
//   // ],
//   //   loadComponent: () =>
//   //     import('./layouts/resource-management-layout/resource-management-layout')
//   //       .then(m => m. ResourceManagementLayoutComponent),
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
//     component: ResourceManagementLayoutComponent,

//     children: [

//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },

//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./pages/resource-management/Dashboard/rm-dashboard')
//             .then(m => m.RmDashboardComponent)
//       },

//       {
//         path: 'equipment-allocation',
//         loadComponent: () =>
//           import('./pages/resource-management/Equipment Allocation/rm-equipment-allocation')
//             .then(m => m.RmEquipmentAllocationComponent)
//       },

//       {
//         path: 'machinery-tracking',
//         loadComponent: () =>
//           import('./pages/resource-management/Machinery Tracking/rm-machinery-tracking')
//             .then(m => m.RmMachineryTrackingComponent)
//       },

//       {
//         path: 'resource-utilization',
//         loadComponent: () =>
//           import('./pages/resource-management/Resource Utilization/rm-resource-utilization')
//             .then(m => m.RmResourceUtilizationComponent)
//       },

//       {
//         path: 'resource-availability',
//         loadComponent: () =>
//           import('./pages/resource-management/Resource Availability/rm-resource-availability')
//             .then(m => m.RmResourceAvailabilityComponent)
//       },

//       {
//         path: 'maintenance-scheduling',
//         loadComponent: () =>
//           import('./pages/resource-management/Maintenance Scheduling/rm-maintenance-scheduling')
//             .then(m => m.RmMaintenanceSchedulingComponent)
//       },

//       {
//         path: 'reports',
//         loadComponent: () =>
//           import('./pages/resource-management/Reports/rm-reports')
//             .then(m => m.RmReportsComponent)
//       },

//       {
// <<<<<<< HEAD
//         path: 'resources',
//         loadComponent: () =>
//           import('./pages/resource-management/Resources/rm-resources')
//             .then(m => m.RmResourcesComponent)
//       }
// =======
//           path: 'resources',
//           loadComponent: () =>
//             import('./pages/resource-management/Resources/rm-resources')
//               .then(m => m.RmResourcesComponent)
//           },
    


// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

//     ]
//   },

// <<<<<<< HEAD
//   // =====================================================
//   // WORKFORCE MANAGEMENT MODULE
//   // =====================================================

//   {
// =======

//    {
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
//     path: 'workforce-management',
//     component: WorkforceManagementLayoutComponent,

//     children: [

//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },

//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./pages/workforce-management/Dashboard/wm-dashboard')
//             .then(m => m.WmDashboardComponent)
//       },

//       {
//         path: 'worker-registration',
//         loadComponent: () =>
//           import('./pages/workforce-management/Worker Registration/wm-worker-registration')
//             .then(m => m.WmWorkerRegistrationComponent)
//       },

//       {
//         path: 'workforce-allocation',
//         loadComponent: () =>
//           import('./pages/workforce-management/Workforce Allocation/wm-workforce-allocation')
//             .then(m => m.WmWorkforceAllocationComponent)
//       },

//       {
//         path: 'attendance-tracking',
//         loadComponent: () =>
//           import('./pages/workforce-management/Attendance Tracking/wm-attendance-tracking')
//             .then(m => m.WmAttendanceTrackingComponent)
//       },

//       {
//         path: 'shift-scheduling',
//         loadComponent: () =>
//           import('./pages/workforce-management/Shift Scheduling/wm-shift-scheduling')
//             .then(m => m.WmShiftSchedulingComponent)
//       },

//       {
//         path: 'payroll-monitoring',
//         loadComponent: () =>
//           import('./pages/workforce-management/Payroll Monitoring/wm-payroll-monitoring')
//             .then(m => m.WmPayrollMonitoringComponent)
//       },

//       {
//         path: 'workforce-categories',
//         loadComponent: () =>
//           import('./pages/workforce-management/Workforce Categories/wm-workforce-categories')
//             .then(m => m.WmWorkforceCategoriesComponent)
//       },

//       {
//         path: 'workforce-reports',
//         loadComponent: () =>
//           import('./pages/workforce-management/Workforce Reports/wm-workforce-reports')
//             .then(m => m.WmWorkforceReportsComponent)
//       }

//     ]
//   },
//   // =====================================================
//   // PROCUREMENT MANAGEMENT MODULE
//   // =====================================================

//   {
//     path: 'procurement-management',

//     loadComponent: () =>
//       import('./layouts/procurement-management-layout/procurement-management-layout')
//         .then(m => m.ProcurementManagementLayoutComponent),

//     children: [

//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },

//       // =========================
//       // PROCUREMENT DASHBOARD
//       // =========================

//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./pages/procurement-management/Dashboard/pr-dashboard')
//             .then(m => m.PrDashboardComponent)
//       },

//       // =========================
//       // PROCUREMENT REQUESTS
//       // =========================

//       {
//         path: 'procurement-requests',
//         loadComponent: () =>
//           import('./pages/procurement-management/Procurement Requests/pr-procurement-requests')
//             .then(m => m.PrProcurementRequestsComponent)
//       },

//       // // =========================
//       // // VENDOR MANAGEMENT
//       // // =========================

//       {
//         path: 'vendor-management',
//         loadComponent: () =>
//           import('./pages/procurement-management/Vendor Management/pr-vendor-management')
//             .then(m => m.PrVendorManagementComponent)
//       },

//       // // =========================
//       // // PURCHASE ORDERS
//       // // =========================

//       {
//         path: 'purchase-orders',
//         loadComponent: () =>
//           import('./pages/procurement-management/Purchase Orders/pr-purchase-orders')
//             .then(m => m.PrPurchaseOrdersComponent)
//       },

//       // // =========================
//       // // SUPPLIER MANAGEMENT
//       // // =========================

//       {
//         path: 'supplier-management',
//         loadComponent: () =>
//           import('./pages/procurement-management/Supplier Management/pr-supplier-management')
//             .then(m => m.PrSupplierManagementComponent)
//       },

//       // // =========================
//       // // INVOICE TRACKING
//       // // =========================

//       {
//         path: 'invoice-tracking',
//         loadComponent: () =>
//           import('./pages/procurement-management/Invoice Tracking/pr-invoice-tracking')
//             .then(m => m.PrInvoiceTrackingComponent)
//       },
//       {
//   path: 'procurement-categories',
//   loadComponent: () =>
//     import('./pages/procurement-management/Procurement Categories/pr-procurement-categories')
//       .then(m => m.PrProcurementCategoriesComponent)
// },
// {
//   path: 'procurement-reports',
//   loadComponent: () =>
//     import('./pages/procurement-management/Procurement Reports/pr-procurement-reports')
//       .then(m => m.PrProcurementReportsComponent)
// },

//     ]
//   },
//     // =====================================================
//   // BUDGET & COST MANAGEMENT MODULE - MODULE 11
//   // =====================================================
  
//   {
//     path:'budget-management',
//     component: BudgetManagementLayoutComponent,

//     children: [

//       // =========================
//       // DEFAULT
//       // =========================

//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },

//       // // =========================
//       // // BUDGET DASHBOARD
//       // // =========================

//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./pages/budget-management/Dashboard/bm-dashboard')
//             .then(m => m.BmDashboardComponent)
//       },

//       // // =========================
//       // // BUDGET PLANNING
//       // // =========================

//       {
//         path: 'budget-planning',
//         loadComponent: () =>
//           import('./pages/budget-management/Budget Planning/bm-budget-planning')
//             .then(m => m.BmBudgetPlanningComponent)
//       },

//       // // =========================
//       // // COST ESTIMATION
//       // // =========================

//       {
//         path: 'cost-estimation',
//         loadComponent: () =>
//           import('./pages/budget-management/Cost Estimation/bm-cost-estimation')
//             .then(m => m.BmCostEstimationComponent)
//       },

//       // // =========================
//       // // EXPENSE MANAGEMENT
//       // // =========================

//       {
//         path: 'expense-management',
//         loadComponent: () =>
//           import('./pages/budget-management/Expense Management/bm-expense-management')
//             .then(m => m.BmExpenseManagementComponent)
//       },

//       // // =========================
//       // // BUDGET MONITORING
//       // // =========================

//       {
//         path: 'budget-monitoring',
//         loadComponent: () =>
//           import('./pages/budget-management/Budget Monitoring/bm-budget-monitoring')
//             .then(m => m.BmBudgetMonitoringComponent)
//       },

//       // // =========================
//       // // FINANCIAL SUMMARY / REPORT
//       // // =========================

//       {
//         path: 'financial-summary',
//         loadComponent: () =>
//           import('./pages/budget-management/Financial Summary/bm-financial-summary')
//             .then(m => m.BmFinancialSummaryComponent)
//       },
    

//     ]
//   },
// // =====================================================
// // NOTIFICATION SYSTEM MODULE - MODULE 8
// // =====================================================


// //   path: 'notifications',
// //   component: NotificationsLayout,
// {
//   path: 'notifications',
//   component: NotificationsLayout,
//   canActivate: [authGuard, roleGuard],
//   canActivateChild: [authGuard, roleGuard],
//   data: { role: 'admin' },   
  

//   children: [

//     // =========================
//     // DEFAULT
//     // =========================

//     {
//       path: '',
//       redirectTo: 'dashboard',
//       pathMatch: 'full'
//     },

//     // =========================
//     // NOTIFICATION DASHBOARD
//     // =========================

// <<<<<<< HEAD
//     {
//       path: 'dashboard',
//       loadComponent: () =>
//         import('./pages/notifications/notifications-page/notifications-page')
//           .then(m => m.NotificationsPage)
//     },
// =======
//     // {
//     //   path: 'dashboard',
//     //   loadComponent: () =>
//     //     import('./pages/notifications/notifications-page/notifications-page')
//     //       .then(m => m.NotificationsPage)
//     // },
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

//     // =========================
//     // NOTIFICATION DETAILS
//     // =========================

// <<<<<<< HEAD
//     {
//       path: 'details/:id',
//       loadComponent: () =>
//         import('./pages/notifications/notifications-details/notifications-details')
//           .then(m => m.NotificationsDetails)
//     },
// =======
//     // {
//     //   path: 'details/:id',
//     //   loadComponent: () =>
//     //     import('./pages/notifications/notifications-details/notifications-details')
//     //       .then(m => m.NotificationsDetails)
//     // },
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

// //     // =========================
// //     // NOTIFICATION MANAGEMENT
// //     // =========================

// <<<<<<< HEAD
//     {
//       path: 'management',
//       loadComponent: () =>
//         import('./pages/notifications/notifications-management/notifications-management')
//           .then(m => m.NotificationsManagement)
//     }
// =======
//     // {
//     //   path: 'management',
//     //   loadComponent: () =>
//     //     import('./pages/notifications/notifications-management/notifications-management')
//     //       .then(m => m.NotificationsManagement)
//     // }
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

//   ]
// },
//   // =====================================================
//   // DASHBOARD & ANALYTICS MODULE - MODULE 9
//   // =====================================================

//   {
//     path: 'dashboard-and-analytics',
//     component: DashboardAndAnalyticsLayoutComponent,
//     canActivate: [authGuard],
//     canActivateChild: [authGuard],

//     children: [

//       // =========================
//       // DEFAULT DASHBOARD
//       // =========================

//       {
//         path: '',
//         redirectTo: 'project-manager',
//         pathMatch: 'full'
//       },

//       // =========================
//       // PROJECT MANAGER DASHBOARD
//       // =========================

//       {
//         path: 'project-manager',
//         component: ProjectManagerDashboardComponent
//       },

//       // =========================
//       // ADMIN DASHBOARD
//       // =========================

//       {
//         path: 'admin',
//         component: AdminDashboardComponent
//       }

//     ]
//   },
//   // =====================================================
// // REPORTS & DOCUMENTATION MODULE - MODULE 10
// // =====================================================

// {
//   path: 'reports',
//   component: ReportsLayoutComponent,
//   canActivate: [authGuard],
//   canActivateChild: [authGuard],

//   children: [

//     // =========================
//     // DEFAULT REPORTS PAGE
//     // =========================

//     {
//       path: '',
//       redirectTo: 'dashboard',
//       pathMatch: 'full'
//     },

//     // =========================
//     // REPORTS DASHBOARD
//     // =========================

//     {
//       path: 'dashboard',
//       loadComponent: () =>
//         import('./pages/reports/dashboard/dashboard')
//           .then(m => m.DashboardComponent)
//     },

//     // // =========================
//     // // PROJECT PROGRESS REPORT
//     // // =========================

//     {
//       path: 'project-progress',
//       loadComponent: () =>
//         import('./pages/reports/project-progress-report/project-progress-report')
//           .then(m => m.ProjectProgressReportComponent)
//     },

//     // // =========================
//     // // RESOURCE UTILIZATION REPORT
//     // // =========================

//     {
//       path: 'resources',
//       loadComponent: () =>
//         import('./pages/reports/resource-utilization-report/resource-utilization-report')
//           .then(m => m.ResourceUtilizationReportComponent)
//     },

//     // // =========================
//     // // WORKFORCE REPORT
//     // // =========================

//     {
//       path: 'workforce',
//       loadComponent: () =>
//         import('./pages/reports/workforce-report/workforce-report')
//           .then(m => m.WorkforceReportComponent)
//     },

//     // // =========================
//     // // PROCUREMENT REPORT
//     // // =========================

//     {
//       path: 'procurement',
//       loadComponent: () =>
//         import('./pages/reports/procurement-report/procurement-report')
//           .then(m => m.ProcurementReportComponent)
//     },

//     // // =========================
//     // // BUDGET REPORT
//     // // =========================

//     {
//       path: 'budget',
//       loadComponent: () =>
//         import('./pages/reports/budget-report/budget-report')
//           .then(m => m.BudgetReportComponent)
//     },

//     // // =========================
//     // // REPORT PREVIEW
//     // // =========================

//     {
//       path: 'preview',
//       loadComponent: () =>
//         import('./pages/reports/report-preview/report-preview')
//           .then(m => m.ReportPreviewComponent)
//     }

//   ]
// },


//   // =====================================================
//   // WILDCARD ROUTE
//   // =====================================================

//   {
//     path: '**',
//     redirectTo: 'login'
//   }

// <<<<<<< HEAD
// ];
    
  
  
// =======
// ];
// >>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';

// Admin Imports
import { Projects } from './pages/admin/project-management/projects/projects';
import { ProjectDetails } from './pages/admin/project-management/project-details/project-details';
import { EditProject } from './pages/admin/project-management/edit-project/edit-project';
import { AddProject } from './pages/admin/project-management/add-project/add-project';
import { ViewProject } from './pages/admin/project-management/view-project/view-project';
import { SiteEngineers } from './pages/admin/site-engineers/site-engineers'; 
import { MaterialInventory } from './pages/admin/material-inventory/material-inventory'; 
import { Inventory } from './pages/admin/material-inventory/inventory/inventory'; 
import { MaterialRequests } from './pages/admin/material-inventory/material-requests/material-requests'; 
import { NewMaterialRequest } from './pages/admin/material-inventory/new-material-request/new-material-request'; 
import { LowStock } from './pages/admin/material-inventory/low-stock/low-stock'; 
import { MaterialAllocation } from './pages/admin/material-inventory/material-allocation/material-allocation'; 
import { StockMovements } from './pages/admin/material-inventory/stock-movements/stock-movements'; 



import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Dashboard } from './pages/admin/dashboard/dashboard';

import { EditUser } from './pages/admin/user-management/edit-user/edit-user';
import { AddUser } from './pages/admin/user-management/add-user/add-user';
import { ViewUser } from './pages/admin/user-management/view-user/view-user';
import { UserDetails } from './pages/admin/user-management/user-details/user-details';

import { ProjectManagerLayoutComponent } from './layouts/project-manager-layout/project-manager-layout';

import { ResourceManagementLayoutComponent } from './layouts/resource-management-layout/resource-management-layout';
import { WorkforceManagementLayoutComponent } from './layouts/workforce-management-layout/workforce-management-layout';
import { BudgetManagementLayoutComponent } from './layouts/budget-management-layout/budget-management-layout';
import { NotificationsLayout } from './layouts/notifications-layout/notifications-layout';
import { DashboardAndAnalyticsLayoutComponent } from './layouts/dashboard-and-analytics-layout/dashboard-and-analytics-layout';
import { ProjectManagerDashboardComponent } from './pages/dashboard-and-analytics/project-manager-dashboard/project-manager-dashboard';
import { AdminDashboardComponent } from './pages/dashboard-and-analytics/admin-dashboard/admin-dashboard';
import { ReportsLayoutComponent } from './layouts/reports-layout/reports-layout';


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
      .then(m => m.ResetPasswordComponent)
},
{
  path: 'forgot-password',
  loadComponent: () =>
    import('./pages/authentication/forgot-password/forgot-password')
      .then(m => m.ForgotPasswordComponent)
},

{
  path: 'verify-otp',
  loadComponent: () =>
    import('./pages/authentication/verify-otp/verify-otp')
      .then(m => m.VerifyOtpComponent)
},
{
  path: 'landing',
  loadComponent: () =>
    import('./pages/landing/landing')
      .then(m => m.Landing)
},

  // Default Route
  {
    path: '',
    redirectTo: 'landing',
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
  path: 'material-inventory/stock-movements', 
  component: StockMovements 
},
{ 
  path: 'material-inventory/material-allocation', 
  component: MaterialAllocation 
}, 
      { 
  path: 'material-inventory/low-stock', 
  component: LowStock 
}, 
{ 
  path: 'low-stock', 
  component: LowStock 
}, 
      { 
  path: 'new-material-request', 
  component: NewMaterialRequest 
},{ 
  path: 'material-requests', 
  component: MaterialRequests 
}, 
      { 
  path: 'material-inventory/inventory', 
  component: Inventory 
}, 
      { 
  path: 'material-inventory', 
  component: MaterialInventory 
}, 
{ 
  path: 'site-engineers', 
  component: SiteEngineers 
}, 

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
        path: 'project-details/:id',
        component: ProjectDetails
      },

      {
        path: 'edit-project',
        component: EditProject
      },
      {
        path: 'edit-project/:id',
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
        path:'milestone-details/:id',
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
        path: 'daily-report-details/:id',
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

        loadComponent: () =>
      import('./layouts/project-manager-layout/project-manager-layout')
        .then(m => m.ProjectManagerLayoutComponent),

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
  // canActivate: [
  //   authGuard,
  //   roleGuard(['Resource Management'])
  // ],
  //  canActivateChild: [
  //   authGuard,
  //   roleGuard(['Resource Management'])
  // ],
  //   loadComponent: () =>
  //     import('./layouts/resource-management-layout/resource-management-layout')
  //       .then(m => m. ResourceManagementLayoutComponent),
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
    



    ]
  },


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
  // PROCUREMENT MANAGEMENT MODULE
  // =====================================================

  {
    path: 'procurement-management',

    loadComponent: () =>
      import('./layouts/procurement-management-layout/procurement-management-layout')
        .then(m => m.ProcurementManagementLayoutComponent),

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      // =========================
      // PROCUREMENT DASHBOARD
      // =========================

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/procurement-management/Dashboard/pr-dashboard')
            .then(m => m.PrDashboardComponent)
      },

      // =========================
      // PROCUREMENT REQUESTS
      // =========================

      {
        path: 'procurement-requests',
        loadComponent: () =>
          import('./pages/procurement-management/Procurement Requests/pr-procurement-requests')
            .then(m => m.PrProcurementRequestsComponent)
      },

      // // =========================
      // // VENDOR MANAGEMENT
      // // =========================

      {
        path: 'vendor-management',
        loadComponent: () =>
          import('./pages/procurement-management/Vendor Management/pr-vendor-management')
            .then(m => m.PrVendorManagementComponent)
      },

      // // =========================
      // // PURCHASE ORDERS
      // // =========================

      {
        path: 'purchase-orders',
        loadComponent: () =>
          import('./pages/procurement-management/Purchase Orders/pr-purchase-orders')
            .then(m => m.PrPurchaseOrdersComponent)
      },

      // // =========================
      // // SUPPLIER MANAGEMENT
      // // =========================

      {
        path: 'supplier-management',
        loadComponent: () =>
          import('./pages/procurement-management/Supplier Management/pr-supplier-management')
            .then(m => m.PrSupplierManagementComponent)
      },

      // // =========================
      // // INVOICE TRACKING
      // // =========================

      {
        path: 'invoice-tracking',
        loadComponent: () =>
          import('./pages/procurement-management/Invoice Tracking/pr-invoice-tracking')
            .then(m => m.PrInvoiceTrackingComponent)
      },
      {
  path: 'procurement-categories',
  loadComponent: () =>
    import('./pages/procurement-management/Procurement Categories/pr-procurement-categories')
      .then(m => m.PrProcurementCategoriesComponent)
},
{
  path: 'procurement-reports',
  loadComponent: () =>
    import('./pages/procurement-management/Procurement Reports/pr-procurement-reports')
      .then(m => m.PrProcurementReportsComponent)
},

    ]
  },
    // =====================================================
  // BUDGET & COST MANAGEMENT MODULE - MODULE 11
  // =====================================================
  
  {
    path:'budget-management',
    component: BudgetManagementLayoutComponent,

    children: [

      // =========================
      // DEFAULT
      // =========================

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      // // =========================
      // // BUDGET DASHBOARD
      // // =========================

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/budget-management/Dashboard/bm-dashboard')
            .then(m => m.BmDashboardComponent)
      },

      // // =========================
      // // BUDGET PLANNING
      // // =========================

      {
        path: 'budget-planning',
        loadComponent: () =>
          import('./pages/budget-management/Budget Planning/bm-budget-planning')
            .then(m => m.BmBudgetPlanningComponent)
      },

      // // =========================
      // // COST ESTIMATION
      // // =========================

      {
        path: 'cost-estimation',
        loadComponent: () =>
          import('./pages/budget-management/Cost Estimation/bm-cost-estimation')
            .then(m => m.BmCostEstimationComponent)
      },

      // // =========================
      // // EXPENSE MANAGEMENT
      // // =========================

      {
        path: 'expense-management',
        loadComponent: () =>
          import('./pages/budget-management/Expense Management/bm-expense-management')
            .then(m => m.BmExpenseManagementComponent)
      },

      // // =========================
      // // BUDGET MONITORING
      // // =========================

      {
        path: 'budget-monitoring',
        loadComponent: () =>
          import('./pages/budget-management/Budget Monitoring/bm-budget-monitoring')
            .then(m => m.BmBudgetMonitoringComponent)
      },

      // // =========================
      // // FINANCIAL SUMMARY / REPORT
      // // =========================

      {
        path: 'financial-summary',
        loadComponent: () =>
          import('./pages/budget-management/Financial Summary/bm-financial-summary')
            .then(m => m.BmFinancialSummaryComponent)
      },
    

    ]
  },
// =====================================================
// NOTIFICATION SYSTEM MODULE - MODULE 8
// =====================================================


//   path: 'notifications',
//   component: NotificationsLayout,
{
  path: 'notifications',
  component: NotificationsLayout,
  canActivate: [authGuard, roleGuard],
  canActivateChild: [authGuard, roleGuard],
  data: { role: 'admin' },   
  

  children: [

    // =========================
    // DEFAULT
    // =========================

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },

    // =========================
    // NOTIFICATION DASHBOARD
    // =========================

    // {
    //   path: 'dashboard',
    //   loadComponent: () =>
    //     import('./pages/notifications/notifications-page/notifications-page')
    //       .then(m => m.NotificationsPage)
    // },

    // =========================
    // NOTIFICATION DETAILS
    // =========================

    // {
    //   path: 'details/:id',
    //   loadComponent: () =>
    //     import('./pages/notifications/notifications-details/notifications-details')
    //       .then(m => m.NotificationsDetails)
    // },

//     // =========================
//     // NOTIFICATION MANAGEMENT
//     // =========================

    // {
    //   path: 'management',
    //   loadComponent: () =>
    //     import('./pages/notifications/notifications-management/notifications-management')
    //       .then(m => m.NotificationsManagement)
    // }

  ]
},
  // =====================================================
  // DASHBOARD & ANALYTICS MODULE - MODULE 9
  // =====================================================

  {
    path: 'dashboard-and-analytics',
    component: DashboardAndAnalyticsLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],

    children: [

      // =========================
      // DEFAULT DASHBOARD
      // =========================

      {
        path: '',
        redirectTo: 'project-manager',
        pathMatch: 'full'
      },

      // =========================
      // PROJECT MANAGER DASHBOARD
      // =========================

      {
        path: 'project-manager',
        component: ProjectManagerDashboardComponent
      },

      // =========================
      // ADMIN DASHBOARD
      // =========================

      {
        path: 'admin',
        component: AdminDashboardComponent
      }

    ]
  },
  // =====================================================
// REPORTS & DOCUMENTATION MODULE - MODULE 10
// =====================================================

{
  path: 'reports',
  component: ReportsLayoutComponent,
  canActivate: [authGuard],
  canActivateChild: [authGuard],

  children: [

    // =========================
    // DEFAULT REPORTS PAGE
    // =========================

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },

    // =========================
    // REPORTS DASHBOARD
    // =========================

    {
      path: 'dashboard',
      loadComponent: () =>
        import('./pages/reports/dashboard/dashboard')
          .then(m => m.DashboardComponent)
    },

    // // =========================
    // // PROJECT PROGRESS REPORT
    // // =========================

    {
      path: 'project-progress',
      loadComponent: () =>
        import('./pages/reports/project-progress-report/project-progress-report')
          .then(m => m.ProjectProgressReportComponent)
    },

    // // =========================
    // // RESOURCE UTILIZATION REPORT
    // // =========================

    {
      path: 'resources',
      loadComponent: () =>
        import('./pages/reports/resource-utilization-report/resource-utilization-report')
          .then(m => m.ResourceUtilizationReportComponent)
    },

    // // =========================
    // // WORKFORCE REPORT
    // // =========================

    {
      path: 'workforce',
      loadComponent: () =>
        import('./pages/reports/workforce-report/workforce-report')
          .then(m => m.WorkforceReportComponent)
    },

    // // =========================
    // // PROCUREMENT REPORT
    // // =========================

    {
      path: 'procurement',
      loadComponent: () =>
        import('./pages/reports/procurement-report/procurement-report')
          .then(m => m.ProcurementReportComponent)
    },

    // // =========================
    // // BUDGET REPORT
    // // =========================

    {
      path: 'budget',
      loadComponent: () =>
        import('./pages/reports/budget-report/budget-report')
          .then(m => m.BudgetReportComponent)
    },

    // // =========================
    // // REPORT PREVIEW
    // // =========================

    {
      path: 'preview',
      loadComponent: () =>
        import('./pages/reports/report-preview/report-preview')
          .then(m => m.ReportPreviewComponent)
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