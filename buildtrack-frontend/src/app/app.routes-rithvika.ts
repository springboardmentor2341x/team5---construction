import { Routes } from '@angular/router';

// Landing
import { Landing } from './pages/landing/landing';

// Authentication
import { Login } from './pages/authentication/login/login';
import { Register } from './pages/authentication/register/register';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password';
import { VerifyOtpComponent } from './pages/authentication/verify-otp/verify-otp';

// Dashboards
import { AdminDashboard } from './pages/dashboard/admin-dashboard/admin-dashboard';
import { ProjectManagerDashboard } from './pages/dashboard/project-manager-dashboard/project-manager-dashboard';
import { SiteEngineerDashboard } from './pages/dashboard/site-engineer-dashboard/site-engineer-dashboard';
import { ContractorDashboard } from './pages/dashboard/contractor-dashboard/contractor-dashboard';
import { ClientDashboard } from './pages/dashboard/client-dashboard/client-dashboard';

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
  path: 'forgot-password',
  component: ForgotPasswordComponent
},
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },

  {
  path: 'verify-otp',
  component: VerifyOtpComponent
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

  // Invalid Routes
  {
    path: '**',
    redirectTo: ''
  }

];