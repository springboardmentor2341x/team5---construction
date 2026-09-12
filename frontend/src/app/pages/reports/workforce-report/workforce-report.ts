import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workforce-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workforce-report.html',
  styleUrl: './workforce-report.css'
})
export class WorkforceReportComponent {

  selectedProject = 'Chennai Commercial Complex';
  selectedPeriod = 'Current Month';
  selectedStatus = 'All Status';

  totalWorkers = 1250;
  allocatedWorkers = 1180;
  presentWorkers = 1085;
  absentWorkers = 95;
  leaveWorkers = 70;
  attendancePercentage = 86.8;

  workforce = [
    {
      id: 'WRK-001',
      name: 'Rajesh Kumar',
      category: 'Skilled Worker',
      skill: 'Masonry',
      contractor: 'ABC Constructions',
      project: 'Chennai Commercial Complex',
      attendance: 'Present',
      status: 'Active'
    },
    {
      id: 'WRK-002',
      name: 'Suresh Babu',
      category: 'Skilled Worker',
      skill: 'Electrical',
      contractor: 'Prime Contractors',
      project: 'Chennai Commercial Complex',
      attendance: 'Present',
      status: 'Active'
    },
    {
      id: 'WRK-003',
      name: 'Arun Prakash',
      category: 'Semi-Skilled Worker',
      skill: 'Plumbing',
      contractor: 'ABC Constructions',
      project: 'Green Valley Residential Project',
      attendance: 'Absent',
      status: 'Active'
    },
    {
      id: 'WRK-004',
      name: 'Mohammed Ali',
      category: 'Skilled Worker',
      skill: 'Carpentry',
      contractor: 'BuildPro Services',
      project: 'Chennai Commercial Complex',
      attendance: 'Present',
      status: 'Active'
    },
    {
      id: 'WRK-005',
      name: 'Karthik Raj',
      category: 'General Worker',
      skill: 'Site Support',
      contractor: 'Prime Contractors',
      project: 'Metro Infrastructure Project',
      attendance: 'On Leave',
      status: 'Active'
    }
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reports/dashboard']);
  }

  applyFilters(): void {
    alert('✓ Workforce report filters applied successfully!');
  }

  downloadPdf(): void {
    alert('✓ Workforce Report PDF downloaded successfully!');
  }

  exportExcel(): void {
    alert('✓ Workforce Report Excel file exported successfully!');
  }

  viewReport(): void {
    this.router.navigate(['/reports/preview']);
  }
}