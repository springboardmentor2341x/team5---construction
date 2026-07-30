import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-se-daily-progress',
  standalone: true,
  imports: [RouterLink,  FormsModule],
  templateUrl: './se-daily-progress.html',
  styleUrl: './se-daily-progress.css'
})
export class SeDailyProgress {

  // sidebarOpen = false;

  selectedProject = '';
  progressDate = '';

  workCompleted = '';
  progressPercentage = 0;
  workersPresent = 0;

  materialsUsed = '';
  equipmentUsed = '';

  issues = '';
  safetyObservations = '';

  projects = [
    {
      id: 'PRJ-001',
      name: 'City Mall Construction'
    },
    {
      id: 'PRJ-002',
      name: 'Green Valley Residential Project'
    },
    {
      id: 'PRJ-003',
      name: 'Highway Expansion Project'
    }
  ];

  recentUpdates = [
    {
      project: 'City Mall Construction',
      date: '29 Jul 2026',
      progress: 72,
      work: 'Foundation and structural work completed'
    },
    {
      project: 'Green Valley Residential Project',
      date: '28 Jul 2026',
      progress: 58,
      work: 'Electrical and plumbing work completed'
    }
  ];

  // toggleSidebar(): void {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  // closeSidebar(): void {
  //   this.sidebarOpen = false;
  // }

  saveProgress(): void {
    console.log({
      project: this.selectedProject,
      date: this.progressDate,
      workCompleted: this.workCompleted,
      progressPercentage: this.progressPercentage,
      workersPresent: this.workersPresent,
      materialsUsed: this.materialsUsed,
      equipmentUsed: this.equipmentUsed,
      issues: this.issues,
      safetyObservations: this.safetyObservations
    });

    alert('Daily progress saved successfully!');
  }
}