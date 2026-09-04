import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Activity {
  title: string;
  date: string;
}

interface ProjectDetails {
  id: string;
  name: string;
  location: string;
  manager: string;
  startDate: string;
  deadline: string;
  progress: number;
  status: string;
  priority: string;
  description: string;
  currentMilestone: string;
  totalWorkers: number;
  totalEquipment: number;
  materialsUsed: number;
  documents: number;
  activities: Activity[];
}

@Component({
  selector: 'app-se-project-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './se-project-details.html',
  styleUrl: './se-project-details.css'
})
export class SeProjectDetails {

  project: ProjectDetails = {

    id: 'PRJ-001',

    name: 'City Mall Construction',

    location: 'Lucknow',

    manager: 'Asma Khan',

    startDate: '10 Jun 2026',

    deadline: '30 Sep 2026',

    progress: 72,

    status: 'In Progress',

    priority: 'High',

    description:
      'Construction of a multi-storey commercial shopping mall including parking, food court, retail stores, landscaping, electrical, plumbing and safety systems.',

    currentMilestone:
      'Structural Work - 3rd Floor Slab Casting',

    totalWorkers: 86,

    totalEquipment: 18,

    materialsUsed: 245,

    documents: 12,

    activities: [

      {
        title: 'Daily Progress Report Submitted',
        date: '30 Jul 2026'
      },

      {
        title: 'Concrete Quality Inspection Completed',
        date: '29 Jul 2026'
      },

      {
        title: 'Steel Material Delivered',
        date: '28 Jul 2026'
      },

      {
        title: 'Safety Audit Completed',
        date: '27 Jul 2026'
      },

      {
        title: 'Weekly Progress Meeting',
        date: '26 Jul 2026'
      }

    ]

  };

}