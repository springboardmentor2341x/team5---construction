import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-resource-management-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './resource-management-sidebar.html',
  styleUrl: './resource-management-sidebar.css'
})
export class ResourceManagementSidebarComponent {

}