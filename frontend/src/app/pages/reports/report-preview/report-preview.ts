import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-preview.html',
  styleUrl: './report-preview.css'
})
export class ReportPreviewComponent {

  reportTitle = 'Project Summary Report';
  projectName = 'Chennai Commercial Complex';
  projectCode = 'PRJ-001';
  generatedDate = '04 Sep 2026';
  generatedBy = 'Administrator';

  summary = [
    {
      label: 'Project Progress',
      value: '68%',
      status: 'On Track'
    },
    {
      label: 'Resource Utilization',
      value: '79%',
      status: 'Good'
    },
    {
      label: 'Workforce Attendance',
      value: '86.8%',
      status: 'Active'
    },
    {
      label: 'Budget Utilization',
      value: '68%',
      status: 'Within Budget'
    }
  ];

  milestones = [
    {
      name: 'Site Preparation',
      progress: 100,
      status: 'Completed'
    },
    {
      name: 'Foundation Work',
      progress: 100,
      status: 'Completed'
    },
    {
      name: 'Structural Framework',
      progress: 82,
      status: 'In Progress'
    },
    {
      name: 'Electrical & Plumbing',
      progress: 55,
      status: 'In Progress'
    },
    {
      name: 'Final Finishing',
      progress: 25,
      status: 'Delayed'
    }
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reports/dashboard']);
  }

  downloadPdf(): void {
    alert('✓ Project Summary Report PDF downloaded successfully!');
  }

  exportExcel(): void {
    alert('✓ Project Summary Report Excel file exported successfully!');
  }

  printReport(): void {
    window.print();
  }
}