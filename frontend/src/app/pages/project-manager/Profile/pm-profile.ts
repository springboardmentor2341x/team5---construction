import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pm-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pm-profile.html',
  styleUrls: ['./pm-profile.css']
})

export class PmProfileComponent {


  profile = {

    name: 'Asma Begum',

    email: 'projectmanager@buildtrack.com',

    role: 'Project Manager',

    employeeId: 'PM001',

    department: 'Construction Management',

    assignedProjects: '3 Projects',

    status: 'Active'

  };


}