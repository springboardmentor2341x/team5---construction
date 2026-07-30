import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-se-weekly-reports',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './se-weekly-reports.html',
  styleUrl: './se-weekly-reports.css'
})
export class SeWeeklyReports {

  sidebarOpen = false;

  searchText = '';
  selectedStatus = 'All';

  reports = [
    {
      id: 'WR-001',
      title: 'Weekly Construction Progress Report',
      project: 'City Mall Construction',
      week: '22 Jul - 28 Jul 2026',
      submittedDate: '29 Jul 2026',
      submittedBy: 'Site Engineer',
      status: 'Approved'
    },
    {
      id: 'WR-002',
      title: 'Site Progress & Safety Report',
      project: 'Green Valley Residential Project',
      week: '22 Jul - 28 Jul 2026',
      submittedDate: '29 Jul 2026',
      submittedBy: 'Site Engineer',
      status: 'Pending'
    },
    {
      id: 'WR-003',
      title: 'Weekly Work Progress Report',
      project: 'Highway Expansion Project',
      week: '15 Jul - 21 Jul 2026',
      submittedDate: '22 Jul 2026',
      submittedBy: 'Site Engineer',
      status: 'Approved'
    },
    {
      id: 'WR-004',
      title: 'Material & Workforce Report',
      project: 'City Mall Construction',
      week: '15 Jul - 21 Jul 2026',
      submittedDate: '22 Jul 2026',
      submittedBy: 'Site Engineer',
      status: 'Rejected'
    },
    {
      id: 'WR-005',
      title: 'Construction Activity Summary',
      project: 'Green Valley Residential Project',
      week: '08 Jul - 14 Jul 2026',
      submittedDate: '15 Jul 2026',
      submittedBy: 'Site Engineer',
      status: 'Approved'
    },
    {
      id: 'WR-006',
      title: 'Weekly Site Inspection Report',
      project: 'Highway Expansion Project',
      week: '08 Jul - 14 Jul 2026',
      submittedDate: '15 Jul 2026',
      submittedBy: 'Site Engineer',
      status: 'Pending'
    }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  get filteredReports() {
    return this.reports.filter((report) => {

      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        report.id.toLowerCase().includes(search) ||
        report.title.toLowerCase().includes(search) ||
        report.project.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        report.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get totalReports(): number {
    return this.reports.length;
  }

  get approvedReports(): number {
    return this.reports.filter(
      report => report.status === 'Approved'
    ).length;
  }

  get pendingReports(): number {
    return this.reports.filter(
      report => report.status === 'Pending'
    ).length;
  }

  get rejectedReports(): number {
    return this.reports.filter(
      report => report.status === 'Rejected'
    ).length;
  }

  createReport(): void {
    alert('Create Weekly Report feature will be connected with backend later.');
  }

  viewReport(report: any): void {
    alert(`Opening ${report.id} - ${report.title}`);
  }

  downloadReport(report: any): void {
    alert(`Downloading ${report.id}`);
  }
}