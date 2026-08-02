import { Routes } from '@angular/router';

import { AdminLayout } from './layouts/admin-layout/admin-layout';

import { Dashboard } from './pages/admin/dashboard/dashboard';
import { UserManagement } from './pages/admin/user-management/user-management';
import { ProjectManagement } from './pages/admin/project-management/project-management';
import { WorkforceManagement } from './pages/admin/workforce-management/workforce-management';
import { ResourceManagement } from './pages/admin/resource-management/resource-management';
import { MaterialInventory } from './pages/admin/material-inventory/material-inventory';
import { ProcurementManagement } from './pages/admin/procurement-management/procurement-management';
import { BudgetManagement } from './pages/admin/budget-management/budget-management';
import { Reports } from './pages/admin/reports/reports';
import { Notifications } from './pages/admin/notifications/notifications';
import { Analytics } from './pages/admin/analytics/analytics';
import { Settings } from './pages/admin/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'users',
        component: UserManagement,
      },
      {
        path: 'projects',
        component: ProjectManagement,
      },
      {
        path: 'workforce',
        component: WorkforceManagement,
      },
      {
        path: 'resources',
        component: ResourceManagement,
      },
      {
        path: 'materials',
        component: MaterialInventory,
      },
      {
        path: 'procurement',
        component: ProcurementManagement,
      },
      {
        path: 'budget',
        component: BudgetManagement,
      },
      {
        path: 'reports',
        component: Reports,
      },
      {
        path: 'notifications',
        component: Notifications,
      },
      {
        path: 'analytics',
        component: Analytics,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ],
  },
];