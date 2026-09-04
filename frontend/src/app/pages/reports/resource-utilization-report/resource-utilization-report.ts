import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-utilization-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resource-utilization-report.html',
  styleUrl: './resource-utilization-report.css'
})
export class ResourceUtilizationReportComponent {

  selectedProject = 'Chennai Commercial Complex';
  selectedPeriod = 'Current Month';
  selectedResource = 'All Resources';

  totalResources = 15;
  allocatedResources = 11;
  availableResources = 4;
  averageUtilization = 79;

  resources = [
    {
      id: 'EX-01',
      name: 'Excavator',
      category: 'Heavy Equipment',
      allocated: 2,
      utilized: 1,
      utilization: 85,
      availability: 'Available',
      status: 'Active'
    },
    {
      id: 'CM-02',
      name: 'Concrete Mixer',
      category: 'Construction Equipment',
      allocated: 4,
      utilized: 4,
      utilization: 92,
      availability: 'Fully Utilized',
      status: 'Active'
    },
    {
      id: 'CR-03',
      name: 'Tower Crane',
      category: 'Heavy Equipment',
      allocated: 1,
      utilized: 1,
      utilization: 78,
      availability: 'Fully Utilized',
      status: 'Active'
    },
    {
      id: 'DT-04',
      name: 'Dump Truck',
      category: 'Transport',
      allocated: 5,
      utilized: 3,
      utilization: 72,
      availability: 'Available',
      status: 'Active'
    },
    {
      id: 'GN-05',
      name: 'Generator',
      category: 'Power Equipment',
      allocated: 3,
      utilized: 2,
      utilization: 68,
      availability: 'Available',
      status: 'Maintenance'
    }
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reports/dashboard']);
  }

  applyFilters(): void {
    alert('✓ Resource report filters applied successfully!');
  }

  downloadPdf(): void {
    alert('✓ Resource Utilization Report PDF downloaded successfully!');
  }

  exportExcel(): void {
    alert('✓ Resource Utilization Report Excel file exported successfully!');
  }

  viewReport(): void {
    this.router.navigate(['/reports/preview']);
  }
}