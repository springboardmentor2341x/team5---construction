import { Routes } from '@angular/router';

// Landing
import { Landing } from './pages/landing/landing';

// Authentication
import { Login } from './pages/authentication/login/login';
import { Register } from './pages/authentication/register/register';
import { ResetPassword } from './pages/authentication/reset-password/reset-password';

// Dashboards
import { AdminDashboard } from './pages/dashboard/admin-dashboard/admin-dashboard';
import { ProjectManagerDashboard } from './pages/dashboard/project-manager-dashboard/project-manager-dashboard';
import { SiteEngineerDashboard } from './pages/dashboard/site-engineer-dashboard/site-engineer-dashboard';
import { ContractorDashboard } from './pages/dashboard/contractor-dashboard/contractor-dashboard';
import { ClientDashboard } from './pages/dashboard/client-dashboard/client-dashboard';

// Project Management
import { ProjectList } from './pages/project-management/project-list/project-list';
import { ProjectDetails } from './pages/project-management/project-details/project-details';
import { MilestoneTracking } from './pages/project-management/milestone-tracking/milestone-tracking';
import { ProjectStatus } from './pages/project-management/project-status/project-status';

// Analytics
import { BudgetAnalytics } from './pages/analytics/budget-analytics/budget-analytics';
import { ProjectProgress } from './pages/analytics/project-progress/project-progress';
import { ResourceAnalytics } from './pages/analytics/resource-analytics/resource-analytics';
import { ProcurementAnalytics } from './pages/analytics/procurement-analytics/procurement-analytics';
export const routes: Routes = [

  // Landing Page
  {
    path: '',
    component: Landing
  },

  // Authentication
  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'reset-password',
    component: ResetPassword
  },

  // Dashboards
  {
    path: 'admin-dashboard',
    component: AdminDashboard
  },

  {
    path: 'project-manager-dashboard',
    component: ProjectManagerDashboard
  },

  {
    path: 'site-engineer-dashboard',
    component: SiteEngineerDashboard
  },

  {
    path: 'contractor-dashboard',
    component: ContractorDashboard
  },

  {
    path: 'client-dashboard',
    component: ClientDashboard
  },

  // Project Management
{
  path: 'project-list',
  component: ProjectList
},
{
  path: 'project-details',
  component: ProjectDetails
},
{
  path: 'milestone-tracking',
  component: MilestoneTracking
},
{
  path: 'project-status',
  component: ProjectStatus
},

// Analytics
{
  path: 'budget-analytics',
  component: BudgetAnalytics
},
{
  path: 'project-progress',
  component: ProjectProgress
},
{
  path: 'resource-analytics',
  component: ResourceAnalytics
},
{
  path: 'procurement-analytics',
  component: ProcurementAnalytics
},




  // Invalid Routes
  {
    path: '**',
    redirectTo: ''
  }

];