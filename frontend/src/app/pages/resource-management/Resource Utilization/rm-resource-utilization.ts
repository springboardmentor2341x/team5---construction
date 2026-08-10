import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-resource-utilization',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rm-resource-utilization.html',
  styleUrl: './rm-resource-utilization.css'
})
export class RmResourceUtilizationComponent {

  selectedProject = 'All Projects';
  selectedCategory = 'All Categories';

  projects = [
    'All Projects',
    'Residential Apartment',
    'Commercial Office Building',
    'Government Hospital'
  ];

  categories = [
    'All Categories',
    'Excavator',
    'Concrete Mixer',
    'Crane',
    'Dump Truck',
    'Generator'
  ];

  resources = [
    {
      id: 'EXC-001',
      name: 'Excavator-01',
      category: 'Excavator',
      project: 'Residential Apartment',
      availableHours: 240,
      operatingHours: 192,
      idleHours: 48,
      utilization: 80
    },
    {
      id: 'EXC-003',
      name: 'Excavator-03',
      category: 'Excavator',
      project: 'Commercial Office Building',
      availableHours: 220,
      operatingHours: 176,
      idleHours: 44,
      utilization: 80
    },
    {
      id: 'CRN-001',
      name: 'Crane-01',
      category: 'Crane',
      project: 'Government Hospital',
      availableHours: 240,
      operatingHours: 216,
      idleHours: 24,
      utilization: 90
    },
    {
      id: 'CRM-001',
      name: 'Concrete Mixer-01',
      category: 'Concrete Mixer',
      project: 'Commercial Office Building',
      availableHours: 200,
      operatingHours: 140,
      idleHours: 60,
      utilization: 70
    },
    {
      id: 'DMP-002',
      name: 'Dump Truck-02',
      category: 'Dump Truck',
      project: 'Residential Apartment',
      availableHours: 240,
      operatingHours: 204,
      idleHours: 36,
      utilization: 85
    },
    {
      id: 'GEN-005',
      name: 'Generator-05',
      category: 'Generator',
      project: 'Government Hospital',
      availableHours: 240,
      operatingHours: 120,
      idleHours: 120,
      utilization: 50
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

  get totalOperatingHours(): number {
    return this.resources.reduce(
      (total, resource) => total + resource.operatingHours,
      0
    );
  }

  get totalIdleHours(): number {
    return this.resources.reduce(
      (total, resource) => total + resource.idleHours,
      0
    );
  }

  get averageUtilization(): number {

    if (this.resources.length === 0) {
      return 0;
    }

    const total = this.resources.reduce(
      (sum, resource) => sum + resource.utilization,
      0
    );

    return Math.round(total / this.resources.length);
  }

  get highlyUtilizedCount(): number {
    return this.resources.filter(
      resource => resource.utilization >= 80
    ).length;
  }

  getUtilizationClass(utilization: number): string {

    if (utilization >= 80) {
      return 'high';
    }

    if (utilization >= 60) {
      return 'medium';
    }

    return 'low';
  }
}