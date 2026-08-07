import { Routes } from '@angular/router';
import { Projects } from './pages/admin/project-management/projects/projects';
import { ProjectDetails } from './pages/admin/project-management/project-details/project-details';
import { EditProject } from './pages/admin/project-management/edit-project/edit-project';
import { AddProject } from './pages/admin/project-management/add-project/add-project';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { EditUser } from './pages/admin/user-management/edit-user/edit-user';
import { AddUser } from './pages/admin/user-management/add-user/add-user';
import { ViewUser } from './pages/admin/user-management/view-user/view-user';
import { UserDetails } from './pages/admin/user-management/user-details/user-details';
import { ViewProject } from './pages/admin/project-management/view-project/view-project';
export const routes: Routes = [

  {
    path: '',
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
  component: AddUser,
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
},
{
  path: 'project-details',
  component: ProjectDetails
},

    ]

  }

];