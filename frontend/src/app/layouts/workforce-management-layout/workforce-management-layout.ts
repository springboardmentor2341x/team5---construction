import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WorkforceManagementSidebarComponent }
  from './workforce-management-sidebar/workforce-management-sidebar';

import { WorkforceManagementTopNavbarComponent }
  from './workforce-management-top-navbar/workforce-management-top-navbar';

@Component({
  selector: 'app-workforce-management-layout',
  standalone: true,

  imports: [
    RouterOutlet,
    WorkforceManagementSidebarComponent,
    WorkforceManagementTopNavbarComponent
  ],

  templateUrl: './workforce-management-layout.html',
  styleUrl: './workforce-management-layout.css'
})
export class WorkforceManagementLayoutComponent {

}