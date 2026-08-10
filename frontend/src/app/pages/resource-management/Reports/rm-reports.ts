import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rm-reports.html',
  styleUrl: './rm-reports.css'
})
export class RmReportsComponent {

  selectedProject = 'All Projects';
  selectedCategory = 'All Categories';

  projects: string[] = [
    'All Projects',
    'Residential Apartment',
    'Commercial Office Building',
    'Government Hospital'
  ];

  categories: string[] = [
    'All Categories',
    'Excavator',
    'Concrete Mixer',
    'Crane',
    'Dump Truck',
    'Generator',
    'Safety Equipment'
  ];

  resources = [
    {
      id: 'EXC-001',
      name: 'Excavator-01',
      category: 'Excavator',
      project: 'Residential Apartment',
      utilization: 82,
      operatingHours: 196,
      idleHours: 44,
      status: 'Allocated'
    },
    {
      id: 'EXC-003',
      name: 'Excavator-03',
      category: 'Excavator',
      project: 'Commercial Office Building',
      utilization: 76,
      operatingHours: 182,
      idleHours: 58,
      status: 'Allocated'
    },
    {
      id: 'CRN-001',
      name: 'Crane-01',
      category: 'Crane',
      project: 'Government Hospital',
      utilization: 91,
      operatingHours: 218,
      idleHours: 22,
      status: 'Allocated'
    },
    {
      id: 'CRM-001',
      name: 'Concrete Mixer-01',
      category: 'Concrete Mixer',
      project: 'Commercial Office Building',
      utilization: 68,
      operatingHours: 136,
      idleHours: 64,
      status: 'Allocated'
    },
    {
      id: 'DMP-002',
      name: 'Dump Truck-02',
      category: 'Dump Truck',
      project: 'Residential Apartment',
      utilization: 84,
      operatingHours: 201,
      idleHours: 39,
      status: 'Allocated'
    },
    {
      id: 'GEN-005',
      name: 'Generator-05',
      category: 'Generator',
      project: 'Government Hospital',
      utilization: 48,
      operatingHours: 115,
      idleHours: 125,
      status: 'Under Maintenance'
    }
  ];

  get filteredResources() {
    return this.resources.filter(resource => {

      const projectMatch =
        this.selectedProject === 'All Projects' ||
        resource.project === this.selectedProject;

      const categoryMatch =
        this.selectedCategory === 'All Categories' ||
        resource.category === this.selectedCategory;

      return projectMatch && categoryMatch;
    });
  }

  get averageUtilization(): number {

    if (this.filteredResources.length === 0) {
      return 0;
    }

    const total = this.filteredResources.reduce(
      (sum, resource) => sum + resource.utilization,
      0
    );

    return Math.round(total / this.filteredResources.length);
  }

  get totalOperatingHours(): number {

    return this.filteredResources.reduce(
      (sum, resource) => sum + resource.operatingHours,
      0
    );
  }

  get totalIdleHours(): number {

    return this.filteredResources.reduce(
      (sum, resource) => sum + resource.idleHours,
      0
    );
  }

  get allocatedCount(): number {

    return this.filteredResources.filter(
      resource => resource.status === 'Allocated'
    ).length;
  }

  get maintenanceCount(): number {

    return this.filteredResources.filter(
      resource => resource.status === 'Under Maintenance'
    ).length;
  }

  getUtilizationClass(value: number): string {

    if (value >= 80) {
      return 'high';
    }

    if (value >= 60) {
      return 'medium';
    }

    return 'low';
  }
}


