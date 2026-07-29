import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgClass } from '@angular/common';
import { DashboardLayout } from '../../../layouts/dashboard-layout/dashboard-layout';
import { Component } from '@angular/core';

// import { Sidebar } from '../../../layouts/sidebar/sidebar';
// import { TopNavbar } from '../../../layouts/top-navbar/top-navbar';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    // Sidebar,
    // TopNavbar,
    DashboardLayout,
    NgClass,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatProgressBarModule,
    MatChipsModule,
    MatPaginatorModule

     
  ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {

displayedColumns: string[] = [
  'id',
  'name',
  'client',
  'manager',
  'location',
  'progress',
  'budget',
  'status',
  'priority',
  'action'
];



  projects = [
    {
      id: 'BT001',
      name: 'Metro Station Phase 1',
      client: 'ABC Infra',
      manager: 'Rahul Sharma',
      location: 'Lucknow',
      progress: 70,
      budget: '₹2.5 Cr',
      status: 'Active',
      priority: 'High'
    },
    {
      id: 'BT002',
      name: 'Smart City Road',
      client: 'XYZ Builders',
      manager: 'Amit Singh',
      location: 'Delhi',
      progress: 45,
      budget: '₹1.8 Cr',
      status: 'Planning',
      priority: 'High'
    },
    {
      id: 'BT003',
      name: 'Highway Expansion',
      client: 'NHAI',
      manager: 'Priya Verma',
      location: 'Kanpur',
      progress: 100,
      budget: '₹5.2 Cr',
      status: 'Completed',
      priority: 'Low'
    },
    {
      id: 'BT003',
      name: 'Highway Expansion',
      client: 'NHAI',
      manager: 'Priya Verma',
      location: 'Kanpur',
      progress: 100,
      budget: '₹5.2 Cr',
      status: 'Delayed',
      priority: 'High'
    }

  ];


  getProgressColor(progress: number): string {

  if (progress >= 80) {
    return '#16a34a'; // Green
  }

  if (progress >= 50) {
    return '#2563eb'; // Blue
  }

  return '#dc2626'; // Red
}

}