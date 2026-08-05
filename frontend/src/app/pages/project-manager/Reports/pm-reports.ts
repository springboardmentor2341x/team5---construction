import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pm-reports.html',
  styleUrls: ['./pm-reports.css']
})
export class ReportsComponent {

  constructor(private router: Router) {}

  generateReport(): void {
    alert('Generating Report...');
  }

  searchReport(): void {
    alert('Searching Reports...');
  }

  viewReport(reportId: string): void {
    alert('Viewing Report: ' + reportId);
  }

  downloadReport(reportId: string): void {
    alert('Downloading Report: ' + reportId);
  }

  exportPDF(): void {
    alert('Exporting Reports as PDF...');
  }

  exportExcel(): void {
    alert('Exporting Reports as Excel...');
  }

  goToDashboard(): void {
    this.router.navigate(['/project-manager/dashboard']);
  }

}