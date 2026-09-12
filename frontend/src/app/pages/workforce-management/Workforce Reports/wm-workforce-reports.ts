import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wm-workforce-reports',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-workforce-reports.html',
  styleUrl: './wm-workforce-reports.css'
})
export class WmWorkforceReportsComponent {

  totalWorkers = 120;
  totalProjects = 8;
  presentWorkers = 108;
  absentWorkers = 12;

  selectedReport = 'Workforce Summary';
  selectedProject = '';
  selectedCategory = '';
  selectedPeriod = 'August 2026';

  reportTypes: string[] = [
    'Workforce Summary',
    'Attendance Report',
    'Shift Report',
    'Workforce Allocation Report',
    'Payroll Report',
    'Contractor Report'
  ];

  projects: string[] = [
    'Chennai Metro Project',
    'Green Heights',
    'Tech Park Construction',
    'Harbour Development',
    'City Hospital Project'
  ];

  categories: string[] = [
    'Mason',
    'Carpenter',
    'Electrician',
    'Plumber',
    'Welder',
    'Helper',
    'Operator'
  ];

  workforceRecords: any[] = [
    {
      id: 'WR-001',
      project: 'Chennai Metro Project',
      category: 'Mason',
      workers: 28,
      present: 26,
      absent: 2,
      shifts: 3,
      overtime: 18,
      payroll: 185000,
      status: 'Active'
    },
    {
      id: 'WR-002',
      project: 'Green Heights',
      category: 'Carpenter',
      workers: 22,
      present: 20,
      absent: 2,
      shifts: 2,
      overtime: 14,
      payroll: 142000,
      status: 'Active'
    },
    {
      id: 'WR-003',
      project: 'Tech Park Construction',
      category: 'Electrician',
      workers: 18,
      present: 17,
      absent: 1,
      shifts: 2,
      overtime: 10,
      payroll: 128000,
      status: 'Active'
    },
    {
      id: 'WR-004',
      project: 'Harbour Development',
      category: 'Welder',
      workers: 16,
      present: 14,
      absent: 2,
      shifts: 2,
      overtime: 12,
      payroll: 116000,
      status: 'Active'
    },
    {
      id: 'WR-005',
      project: 'City Hospital Project',
      category: 'Helper',
      workers: 36,
      present: 31,
      absent: 5,
      shifts: 3,
      overtime: 20,
      payroll: 201000,
      status: 'Active'
    }
  ];


  generateReport(): void {
    console.log('Generating workforce report');
  }


  exportReport(): void {
    console.log('Exporting workforce report');
  }


  filterReport(): void {
    console.log('Filtering workforce report');
  }


  viewReport(record: any): void {
    console.log('Viewing report:', record);
  }


  getStatusClass(status: string): string {

    switch (status) {

      case 'Active':
        return 'status-active';

      case 'Inactive':
        return 'status-inactive';

      default:
        return 'status-active';
    }
  }

}