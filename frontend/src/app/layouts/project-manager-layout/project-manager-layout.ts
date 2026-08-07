import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProjectManagerSidebarComponent } from './project-manager-sidebar/project-manager-sidebar';
import { ProjectManagerTopNavbarComponent } from './project-manager-top-navbar/project-manager-top-navbar';

@Component({
  selector: 'app-project-manager-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ProjectManagerSidebarComponent,
    ProjectManagerTopNavbarComponent
  ],
  templateUrl: './project-manager-layout.html',
  styleUrls: ['./project-manager-layout.css']
})
export class ProjectManagerLayoutComponent {

}
