import { Routes } from '@angular/router';

export const routes: Routes = [

  // =========================
  // AUTHENTICATION
  // =========================

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/authentication/login/login')
        .then(m => m.Login)
  },

  // =========================
  // ADMIN
  // =========================

  {
    path: 'admin',

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/Dashboard/admin-dashboard')
            .then(m => m.AdminDashboard)
      },

      {
        path: 'budget',
        loadComponent: () =>
          import('./pages/admin/Budget/admin-budget')
            .then(m => m.AdminBudget)
      },

      {
        path: 'create-project',
        loadComponent: () =>
          import('./pages/admin/CreateProject/admin-create-project')
            .then(m => m.AdminCreateProject)
      },

      {
        path: 'create-user',
        loadComponent: () =>
          import('./pages/admin/CreateUser/admin-create-user')
            .then(m => m.AdminCreateUser)
      },

      {
        path: 'edit-user',
        loadComponent: () =>
          import('./pages/admin/EditUser/admin-edit-user')
            .then(m => m.AdminEditUser)
      },

      {
        path: 'material-inventory',
        loadComponent: () =>
          import('./pages/admin/MaterialInventory/admin-material-inventory')
            .then(m => m.AdminMaterialInventory)
      },

      {
        path: 'milestones',
        loadComponent: () =>
          import('./pages/admin/Milestones/admin-milestones')
            .then(m => m.AdminMilestones)
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/admin/Notifications/admin-notifications')
            .then(m => m.AdminNotifications)
      },

      {
        path: 'procurement',
        loadComponent: () =>
          import('./pages/admin/Procurement/admin-procurement')
            .then(m => m.AdminProcurement)
      },

      {
        path: 'project-details',
        loadComponent: () =>
          import('./pages/admin/ProjectDetails/admin-project-details')
            .then(m => m.AdminProjectDetails)
      },

      {
        path: 'project-management',
        loadComponent: () =>
          import('./pages/admin/ProjectManagement/admin-project-management')
            .then(m => m.AdminProjectManagement)
      },

      {
        path: 'project-schedule',
        loadComponent: () =>
          import('./pages/admin/ProjectSchedule/admin-project-schedule')
            .then(m => m.AdminProjectSchedule)
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/admin/Reports/admin-reports')
            .then(m => m.AdminReports)
      },

      {
        path: 'resource-management',
        loadComponent: () =>
          import('./pages/admin/ResourceManagement/admin-resource-management')
            .then(m => m.AdminResourceManagement)
      },

      {
        path: 'roles-permissions',
        loadComponent: () =>
          import('./pages/admin/RolesPermissions/admin-roles-permissions')
            .then(m => m.AdminRolesPermissions)
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/admin/Settings/admin-settings')
            .then(m => m.AdminSettings)
      },

      {
        path: 'user-details',
        loadComponent: () =>
          import('./pages/admin/UserDetails/admin-user-details')
            .then(m => m.AdminUserDetails)
      },

      {
        path: 'user-management',
        loadComponent: () =>
          import('./pages/admin/UserManagement/admin-user-management')
            .then(m => m.AdminUserManagement)
      },

      {
        path: 'workforce',
        loadComponent: () =>
          import('./pages/admin/Workforce/admin-workforce')
            .then(m => m.AdminWorkforce)
      }
    ]
  },


  // =========================
  // PROJECT MANAGER
  // =========================

  {
    path: 'project-manager',

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/project-manager/Dashboard/project-manager-dashboard')
            .then(m => m.ProjectManagerDashboard)
      },

      {
        path: 'budget-tracking',
        loadComponent: () =>
          import('./pages/project-manager/BudgetTracking/pm-budget-tracking')
            .then(m => m.PmBudgetTracking)
      },

      {
        path: 'contractors',
        loadComponent: () =>
          import('./pages/project-manager/Contractors/pm-contractors')
            .then(m => m.PmContractors)
      },

      {
        path: 'milestones',
        loadComponent: () =>
          import('./pages/project-manager/Milestones/pm-milestones')
            .then(m => m.PmMilestones)
      },

      {
        path: 'my-projects',
        loadComponent: () =>
          import('./pages/project-manager/MyProjects/pm-my-projects')
            .then(m => m.PmMyProjects)
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/project-manager/Notifications/pm-notifications')
            .then(m => m.PmNotifications)
      },

      {
        path: 'procurement-requests',
        loadComponent: () =>
          import('./pages/project-manager/ProcurementRequests/pm-procurement-requests')
            .then(m => m.PmProcurementRequests)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/project-manager/Profile/pm-profile')
            .then(m => m.PmProfile)
      },

      {
        path: 'project-details',
        loadComponent: () =>
          import('./pages/project-manager/ProjectDetails/pm-project-details')
            .then(m => m.PmProjectDetails)
      },

      {
        path: 'project-schedule',
        loadComponent: () =>
          import('./pages/project-manager/ProjectSchedule/pm-project-schedule')
            .then(m => m.PmProjectSchedule)
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/project-manager/Reports/pm-reports')
            .then(m => m.PmReports)
      },

      {
        path: 'resource-allocation',
        loadComponent: () =>
          import('./pages/project-manager/ResourceAllocation/pm-resource-allocation')
            .then(m => m.PmResourceAllocation)
      },

      {
        path: 'site-engineers',
        loadComponent: () =>
          import('./pages/project-manager/SiteEngineers/pm-site-engineers')
            .then(m => m.PmSiteEngineers)
      },

      {
        path: 'site-progress',
        loadComponent: () =>
          import('./pages/project-manager/SiteProgress/pm-site-progress')
            .then(m => m.PmSiteProgress)
      },

      {
        path: 'workforce',
        loadComponent: () =>
          import('./pages/project-manager/Workforce/pm-workforce')
            .then(m => m.PmWorkforce)
      }
    ]
  },


  // =========================
  // SITE ENGINEER
  // =========================

  {
    path: 'site-engineer',

    children: [

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
        path: 'assigned-projects',
        loadComponent: () =>
          import('./pages/site-engineer/AssignedProjects/se-assigned-projects')
            .then(m => m.SeAssignedProjects)
      },

      {
        path: 'daily-progress',
        loadComponent: () =>
          import('./pages/site-engineer/DailyProgress/se-daily-progress')
            .then(m => m.SeDailyProgress)
      },

      {
        path: 'equipment-status',
        loadComponent: () =>
          import('./pages/site-engineer/EquipmentStatus/se-equipment-status')
            .then(m => m.SeEquipmentStatus)
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
        path: 'weekly-reports',
        loadComponent: () =>
          import('./pages/site-engineer/WeeklyReports/se-weekly-reports')
            .then(m => m.SeWeeklyReports)
      }
    ]
  },


  // =========================
  // CONTRACTOR
  // =========================

  {
    path: 'contractor',

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/contractor/Dashboard/contractor-dashboard')
            .then(m => m.ContractorDashboard)
      },

      {
        path: 'assigned-tasks',
        loadComponent: () =>
          import('./pages/contractor/AssignedTasks/contractor-assigned-tasks')
            .then(m => m.ContractorAssignedTasks)
      },

      {
        path: 'attendance',
        loadComponent: () =>
          import('./pages/contractor/Attendance/contractor-attendance')
            .then(m => m.ContractorAttendance)
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/contractor/Notifications/contractor-notifications')
            .then(m => m.ContractorNotifications)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/contractor/Profile/contractor-profile')
            .then(m => m.ContractorProfile)
      },

      {
        path: 'shift-schedule',
        loadComponent: () =>
          import('./pages/contractor/ShiftSchedule/contractor-shift-schedule')
            .then(m => m.ContractorShiftSchedule)
      },

      {
        path: 'workers',
        loadComponent: () =>
          import('./pages/contractor/Workers/contractor-workers')
            .then(m => m.ContractorWorkers)
      },

      {
        path: 'work-progress',
        loadComponent: () =>
          import('./pages/contractor/WorkProgress/contractor-work-progress')
            .then(m => m.ContractorWorkProgress)
      }
    ]
  },


  // =========================
  // WORKER
  // =========================

  {
    path: 'worker',

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/worker/Dashboard/worker-dashboard')
            .then(m => m.WorkerDashboard)
      },

      {
        path: 'attendance',
        loadComponent: () =>
          import('./pages/worker/Attendance/worker-attendance')
            .then(m => m.WorkerAttendance)
      },

      {
        path: 'my-tasks',
        loadComponent: () =>
          import('./pages/worker/MyTasks/worker-my-tasks')
            .then(m => m.WorkerMyTasks)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/worker/Profile/worker-profile')
            .then(m => m.WorkerProfile)
      },

      {
        path: 'shift-schedule',
        loadComponent: () =>
          import('./pages/worker/ShiftSchedule/worker-shift-schedule')
            .then(m => m.WorkerShiftSchedule)
      }
    ]
  },


  // =========================
  // CLIENT
  // =========================

  {
    path: 'client',

    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/client/Dashboard/client-dashboard')
            .then(m => m.ClientDashboard)
      },

      {
        path: 'documents',
        loadComponent: () =>
          import('./pages/client/Documents/client-documents')
            .then(m => m.ClientDocuments)
      },

      {
        path: 'milestones',
        loadComponent: () =>
          import('./pages/client/Milestones/client-milestones')
            .then(m => m.ClientMilestones)
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/client/Notifications/client-notifications')
            .then(m => m.ClientNotifications)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/client/Profile/client-profile')
            .then(m => m.ClientProfile)
      },

      {
        path: 'project-progress',
        loadComponent: () =>
          import('./pages/client/ProjectProgress/client-project-progress')
            .then(m => m.ClientProjectProgress)
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/client/Reports/client-reports')
            .then(m => m.ClientReports)
      }
    ]
  },


  // =========================
  // UNKNOWN ROUTE
  // =========================

  {
    path: '**',
    redirectTo: 'login'
  }

];