import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProcurementManagementSidebarComponent } from './procurement-management-sidebar/procurement-management-sidebar';
import { ProcurementManagementTopNavbarComponent } from './procurement-management-top-navbar/procurement-management-top-navbar';

@Component({
  selector: 'app-procurement-management-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ProcurementManagementSidebarComponent,
    ProcurementManagementTopNavbarComponent
  ],
  templateUrl: './procurement-management-layout.html',
  styleUrl: './procurement-management-layout.css'
})
export class ProcurementManagementLayoutComponent {
}