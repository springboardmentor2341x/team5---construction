import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Milestone {
  name: string;
  status: string;
  progress: number;
}

interface ProcurementItem {
  requestId: string;
  item: string;
  status: string;
}

interface Project {
  id: number;
  name: string;
  location: string;
  progress: number;
  status: string;
  startDate: string;
  expectedCompletion: string;

  plannedBudget: number;
  usedBudget: number;
  remainingBudget: number;
  budgetUtilization: number;

  totalWorkers: number;
  presentWorkers: number;
  absentWorkers: number;
  leaveWorkers: number;
  attendance: number;

  totalResources: number;
  allocatedResources: number;
  availableResources: number;
  resourceUtilization: number;

  procurementRequests: number;
  purchaseOrders: number;
  pendingProcurement: number;

  milestones: Milestone[];
  procurement: ProcurementItem[];
}

@Component({
  selector: 'app-project-manager-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './project-manager-dashboard.html',
  styleUrl: './project-manager-dashboard.css'
})
export class ProjectManagerDashboardComponent {

  selectedProjectId = 1;

  lastUpdated = 'Today, 10:30 AM';

  projects: Project[] = [

    {
      id: 1,
      name: 'Chennai Metro Construction',
      location: 'Chennai, Tamil Nadu',

      progress: 68,
      status: 'On Track',
      startDate: '01 Jun 2026',
      expectedCompletion: '30 Dec 2026',

      plannedBudget: 10000000,
      usedBudget: 7200000,
      remainingBudget: 2800000,
      budgetUtilization: 72,

      totalWorkers: 125,
      presentWorkers: 110,
      absentWorkers: 10,
      leaveWorkers: 5,
      attendance: 88,

      totalResources: 45,
      allocatedResources: 35,
      availableResources: 10,
      resourceUtilization: 78,

      procurementRequests: 25,
      purchaseOrders: 18,
      pendingProcurement: 7,

      milestones: [
        {
          name: 'Foundation',
          status: 'Completed',
          progress: 100
        },
        {
          name: 'Structural Work',
          status: 'Completed',
          progress: 100
        },
        {
          name: 'Electrical Installation',
          status: 'In Progress',
          progress: 65
        },
        {
          name: 'Finishing Work',
          status: 'Pending',
          progress: 0
        }
      ],

      procurement: [
        {
          requestId: 'PR-102',
          item: 'Cement',
          status: 'Approved'
        },
        {
          requestId: 'PR-103',
          item: 'Steel',
          status: 'Pending'
        },
        {
          requestId: 'PR-104',
          item: 'Electrical Materials',
          status: 'Processing'
        }
      ]
    },

    {
      id: 2,
      name: 'Residential Tower Project',
      location: 'Tambaram, Chennai',

      progress: 45,
      status: 'In Progress',
      startDate: '15 Jul 2026',
      expectedCompletion: '15 Apr 2027',

      plannedBudget: 8500000,
      usedBudget: 3400000,
      remainingBudget: 5100000,
      budgetUtilization: 40,

      totalWorkers: 90,
      presentWorkers: 80,
      absentWorkers: 7,
      leaveWorkers: 3,
      attendance: 89,

      totalResources: 30,
      allocatedResources: 21,
      availableResources: 9,
      resourceUtilization: 70,

      procurementRequests: 18,
      purchaseOrders: 12,
      pendingProcurement: 6,

      milestones: [
        {
          name: 'Site Preparation',
          status: 'Completed',
          progress: 100
        },
        {
          name: 'Foundation',
          status: 'In Progress',
          progress: 70
        },
        {
          name: 'Structure',
          status: 'In Progress',
          progress: 30
        },
        {
          name: 'Finishing',
          status: 'Pending',
          progress: 0
        }
      ],

      procurement: [
        {
          requestId: 'PR-201',
          item: 'Cement',
          status: 'Approved'
        },
        {
          requestId: 'PR-202',
          item: 'Steel Rods',
          status: 'Processing'
        },
        {
          requestId: 'PR-203',
          item: 'Tiles',
          status: 'Pending'
        }
      ]
    }

  ];

  get selectedProject(): Project {

    return this.projects.find(
      project => project.id === Number(this.selectedProjectId)
    ) || this.projects[0];

  }

  changeProject(): void {

    console.log(
      'Selected project:',
      this.selectedProject.name
    );

    this.lastUpdated = 'Just now';

  }

  refreshDashboard(): void {

    this.lastUpdated = 'Just now';

    console.log('Dashboard refreshed');

  }

  formatAmount(amount: number): string {

    return new Intl.NumberFormat('en-IN').format(amount);

  }

}