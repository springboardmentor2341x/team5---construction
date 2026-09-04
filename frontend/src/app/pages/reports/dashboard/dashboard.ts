import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  selectedProject = 'All Projects';
  selectedPeriod = 'Current Month';
  selectedStatus = 'All Status';

  totalReports = 128;
  activeProjects = 12;
  pendingReports = 7;
  lastGenerated = 'Today';

  reportCategories = [
    {
      name: 'Project Progress',
      route: '/reports/project-progress'
    },
    {
      name: 'Resource Utilization',
      route: '/reports/resources'
    },
    {
      name: 'Workforce Report',
      route: '/reports/workforce'
    },
    {
      name: 'Procurement Report',
      route: '/reports/procurement'
    },
    {
      name: 'Budget Report',
      route: '/reports/budget'
    },
    {
      name: 'Project Summary Report',
      route: '/reports/preview'
    }
  ];

  constructor(private router: Router) {}

  refreshReports(): void {
    alert('✓ Reports dashboard refreshed successfully!');
  }

  generateReport(): void {
    alert('✓ Report generated successfully!');
  }

  viewReport(reportType: string): void {
    const report = this.reportCategories.find(
      item => item.name === reportType
    );

    if (report) {
      this.router.navigateByUrl(report.route);
    }
  }

  exportPdf(reportType: string): void {
    alert(`✓ ${reportType} PDF downloaded successfully!`);
  }

  exportExcel(reportType: string): void {
    alert(`✓ ${reportType} Excel file exported successfully!`);
  }

  viewAllReports(): void {
    alert('✓ All reports are displayed on this dashboard.');
  }

  applyFilters(): void {
    alert('✓ Report filters applied successfully!');
  }
}