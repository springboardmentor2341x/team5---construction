import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rm-resources.html',
  styleUrl: './rm-resources.css'
})
export class RmResourcesComponent {

  // Search and filter values
  searchText: string = '';
  selectedCategory: string = 'All';
  selectedStatus: string = 'All';

  // Resource data
  resources = [
    {
      id: 'EXC-001',
      name: 'Excavator EX-01',
      category: 'Excavator',
      project: 'Chennai Metro Project',
      location: 'Site A',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'EXC-002',
      name: 'Excavator EX-02',
      category: 'Excavator',
      project: 'Chennai Metro Project',
      location: 'Site B',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    },
    {
      id: 'EXC-003',
      name: 'Excavator EX-03',
      category: 'Excavator',
      project: 'Highway Construction',
      location: 'Site C',
      status: 'Maintenance',
      assignedTo: '-'
    },
    {
      id: 'MIX-001',
      name: 'Concrete Mixer CM-01',
      category: 'Concrete Mixer',
      project: 'Residential Complex',
      location: 'Site A',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'MIX-002',
      name: 'Concrete Mixer CM-02',
      category: 'Concrete Mixer',
      project: 'Commercial Tower',
      location: 'Site B',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    },
    {
      id: 'CRN-001',
      name: 'Tower Crane CR-01',
      category: 'Crane',
      project: 'Commercial Tower',
      location: 'Site C',
      status: 'Maintenance',
      assignedTo: '-'
    },
    {
      id: 'CRN-002',
      name: 'Mobile Crane CR-02',
      category: 'Crane',
      project: 'Chennai Metro Project',
      location: 'Site A',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    },
    {
      id: 'DMP-001',
      name: 'Dump Truck DT-01',
      category: 'Dump Truck',
      project: 'Highway Construction',
      location: 'Site D',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    },
    {
      id: 'DMP-002',
      name: 'Dump Truck DT-02',
      category: 'Dump Truck',
      project: 'Highway Construction',
      location: 'Site D',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'GEN-001',
      name: 'Generator GN-01',
      category: 'Generator',
      project: 'Residential Complex',
      location: 'Site B',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'GEN-002',
      name: 'Generator GN-02',
      category: 'Generator',
      project: 'Commercial Tower',
      location: 'Site C',
      status: 'Maintenance',
      assignedTo: '-'
    },
    {
      id: 'GEN-003',
      name: 'Generator GN-03',
      category: 'Generator',
      project: 'Chennai Metro Project',
      location: 'Site A',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    },
    {
      id: 'SAF-001',
      name: 'Safety Equipment SE-01',
      category: 'Safety Equipment',
      project: 'Chennai Metro Project',
      location: 'Site A',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'SAF-002',
      name: 'Safety Equipment SE-02',
      category: 'Safety Equipment',
      project: 'Commercial Tower',
      location: 'Site C',
      status: 'Allocated',
      assignedTo: 'Safety Officer'
    },
    {
      id: 'PMP-001',
      name: 'Water Pump WP-01',
      category: 'Water Pump',
      project: 'Residential Complex',
      location: 'Site B',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'PMP-002',
      name: 'Water Pump WP-02',
      category: 'Water Pump',
      project: 'Highway Construction',
      location: 'Site D',
      status: 'Maintenance',
      assignedTo: '-'
    },
    {
      id: 'CMP-001',
      name: 'Air Compressor AC-01',
      category: 'Air Compressor',
      project: 'Highway Construction',
      location: 'Site D',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    },
    {
      id: 'ROL-001',
      name: 'Road Roller RR-01',
      category: 'Road Roller',
      project: 'Highway Construction',
      location: 'Site D',
      status: 'Available',
      assignedTo: '-'
    },
    {
      id: 'LFT-001',
      name: 'Material Lift ML-01',
      category: 'Material Lift',
      project: 'Commercial Tower',
      location: 'Site C',
      status: 'Maintenance',
      assignedTo: '-'
    },
    {
      id: 'LFT-002',
      name: 'Material Lift ML-02',
      category: 'Material Lift',
      project: 'Residential Complex',
      location: 'Site B',
      status: 'Allocated',
      assignedTo: 'Site Engineer'
    }
  ];

  // Category options
  get categories(): string[] {
    return [
      'All',
      ...new Set(
        this.resources.map(resource => resource.category)
      )
    ];
  }

  // Status options
  get statuses(): string[] {
    return [
      'All',
      'Available',
      'Allocated',
      'Maintenance'
    ];
  }

  // Filtered resources
  get filteredResources() {
    const search = this.searchText.trim().toLowerCase();

    return this.resources.filter(resource => {

      const matchesSearch =
        !search ||
        resource.id.toLowerCase().includes(search) ||
        resource.name.toLowerCase().includes(search) ||
        resource.category.toLowerCase().includes(search) ||
        resource.project.toLowerCase().includes(search) ||
        resource.location.toLowerCase().includes(search) ||
        resource.assignedTo.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        resource.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        resource.status === this.selectedStatus;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }

  // Total resources
  get totalResources(): number {
    return this.resources.length;
  }

  // Available resources
  get availableResources(): number {
    return this.resources.filter(
      resource => resource.status === 'Available'
    ).length;
  }

  // Allocated resources
  get allocatedResources(): number {
    return this.resources.filter(
      resource => resource.status === 'Allocated'
    ).length;
  }

  // Maintenance resources
  get maintenanceResources(): number {
    return this.resources.filter(
      resource => resource.status === 'Maintenance'
    ).length;
  }

  // Status badge class
  getStatusClass(status: string): string {
    switch (status) {

      case 'Available':
        return 'status-available';

      case 'Allocated':
        return 'status-allocated';

      case 'Maintenance':
        return 'status-maintenance';

      default:
        return '';
    }
  }

  // View resource
  viewResource(resource: any): void {
    console.log('Viewing resource:', resource);
  }

  // Clear search and filters
  clearFilters(): void {
    this.searchText = '';
    this.selectedCategory = 'All';
    this.selectedStatus = 'All';
  }
}