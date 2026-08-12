import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceManagementSidebarComponent } from './resource-management-sidebar/resource-management-sidebar';
import { ResourceManagementTopNavbarComponent } from './resource-management-top-navbar/resource-management-top-navbar';

@Component({
  selector: 'app-resource-management-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ResourceManagementSidebarComponent,
    ResourceManagementTopNavbarComponent
  ],
  templateUrl: './resource-management-layout.html',
  styleUrl: './resource-management-layout.css'
})
export class ResourceManagementLayoutComponent {
}