import { Routes } from '@angular/router';

// =========================
// AUTHENTICATION / PUBLIC
// =========================
import { Landing } from './pages/landing/landing';
import { Login } from './pages/authentication/login/login-rithvika';
import { Register } from './pages/authentication/register/register';
import { VerifyOtpComponent } from './pages/authentication/verify-otp/verify-otp';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password-rithvika';
// =========================
// ADMIN LAYOUT
// =========================
import { AdminLayout } from './layouts/admin-layout/admin-layout';

// =========================
// ADMIN - DASHBOARD
// =========================
import { Dashboard } from './pages/admin/dashboard/dashboard';

// =========================
// ADMIN - USER MANAGEMENT
// =========================
import { AddUser } from './pages/admin/user-management/add-user/add-user';
import { UserDetails } from './pages/admin/user-management/user-details/user-details';
import { ViewUser } from './pages/admin/user-management/view-user/view-user';
import { EditUser } from './pages/admin/user-management/edit-user/edit-user';

// =========================
// ADMIN - PROJECT MANAGEMENT
// =========================
import { Projects } from './pages/admin/project-management/projects/projects';
import { AddProject } from './pages/admin/project-management/add-project/add-project';
import { ProjectDetails } from './pages/admin/project-management/project-details/project-details';
import { ViewProject } from './pages/admin/project-management/view-project/view-project';
import { EditProject } from './pages/admin/project-management/edit-project/edit-project';

// =========================
// ADMIN - WORKFORCE
// =========================
import { WorkforceManagement } from './pages/admin/workforce-management/workforce-management';

// =========================
// ADMIN - SITE ENGINEERS
// =========================
import { SiteEngineers } from './pages/admin/site-engineers/site-engineers';
import { SiteEngineerDetails } from './pages/admin/site-engineers/site-engineer-details/site-engineer-details';


export const routes: Routes = [

  // =====================================================
  // PUBLIC / AUTHENTICATION PAGES
  // =====================================================

  {
    path: '',
    component: Landing
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'verify-otp',
    component: VerifyOtpComponent
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

 {
  path: 'reset-password',
  component: ResetPasswordComponent
},


  // =====================================================
  // ADMIN APPLICATION
  // =====================================================

  {
    path: 'admin',
    component: AdminLayout,

    children: [

      // -------------------------
      // Dashboard
      // -------------------------

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: Dashboard
      },


      // -------------------------
      // User Management
      // -------------------------

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


      // -------------------------
      // Project Management
      // -------------------------

      {
        path: 'projects',
        component: Projects
      },

      {
        path: 'project-details',
        component: ProjectDetails
      },

      {
        path: 'view-project',
        component: ViewProject
      },

      {
        path: 'edit-project',
        component: EditProject
      },

      {
        path: 'add-project',
        component: AddProject
      },


      // -------------------------
      // Workforce Management
      // -------------------------

      {
        path: 'workforce-management',
        component: WorkforceManagement
      },


      // -------------------------
      // Site Engineers
      // -------------------------

      {
        path: 'site-engineers',
        component: SiteEngineers
      },

      {
        path: 'site-engineer-details',
        component: SiteEngineerDetails
      }

    ]
  },


  // =====================================================
  // FALLBACK
  // =====================================================

  {
    path: '**',
    redirectTo: ''
  }

];