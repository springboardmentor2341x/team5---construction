import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-se-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './se-profile.html',
  styleUrl: './se-profile.css'
})
export class SeProfile {

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  profile = {
    name: 'Rahul Sharma',
    employeeId: 'SE-1025',
    role: 'Site Engineer',
    email: 'rahul.sharma@buildtrack.com',
    phone: '+91 9876543210',
    department: 'Construction',
    experience: '5 Years',
    joiningDate: '15 March 2022',
    reportingManager: 'Asma Khan',
    currentSite: 'City Mall Construction',
    status: 'Active'
  };

  stats = [
    {
      title: 'Projects',
      value: 12,
      icon: '🏗️'
    },
    {
      title: 'Completed',
      value: 8,
      icon: '✅'
    },
    {
      title: 'Reports',
      value: 126,
      icon: '📄'
    },
    {
      title: 'Attendance',
      value: '97%',
      icon: '📅'
    }
  ];

}