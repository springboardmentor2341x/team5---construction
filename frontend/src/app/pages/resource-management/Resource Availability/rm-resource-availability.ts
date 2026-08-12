import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-resource-availability',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rm-resource-availability.html',
  styleUrl: './rm-resource-availability.css'
})
export class RmResourceAvailabilityComponent {

  searchText = '';
  selectedStatus = 'All Status';
  selectedCategory = 'All Categories';

  statuses = [
    'All Status',
    'Available',
    'Allocated',
    'Under Maintenance',
    'Out of Service'
  ];

  categories = [
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
      location: 'Equipment Yard - Chennai',
      project: 'Not Allocated',
      availableFrom: 'Available Now',
      status: 'Available'
    },
    {
      id: 'EXC-002',
      name: 'Excavator-02',
      category: 'Excavator',
      location: 'Chennai',
      project: 'Residential Apartment',
      availableFrom: '20 Aug 2026',
      status: 'Allocated'
    },
    {
      id: 'CRN-001',
      name: 'Crane-01',
      category: 'Crane',
      location: 'Hyderabad',
      project: 'Government Hospital',
      availableFrom: '30 Aug 2026',
      status: 'Allocated'
    },
    {
      id: 'CRN-002',
      name: 'Crane-02',
      category: 'Crane',
      location: 'Equipment Yard - Chennai',
      project: 'Not Allocated',
      availableFrom: 'Available Now',
      status: 'Available'
    },
    {
      id: 'CRM-001',
      name: 'Concrete Mixer-01',
      category: 'Concrete Mixer',
      location: 'Bangalore',
      project: 'Commercial Office Building',
      availableFrom: '18 Aug 2026',
      status: 'Allocated'
    },
    {
      id: 'DMP-002',
      name: 'Dump Truck-02',
      category: 'Dump Truck',
      location: 'Chennai',
      project: 'Residential Apartment',
      availableFrom: '22 Aug 2026',
      status: 'Allocated'
    },
    {
      id: 'GEN-005',
      name: 'Generator-05',
      category: 'Generator',
      location: 'Maintenance Facility',
      project: 'Not Allocated',
      availableFrom: '25 Aug 2026',
      status: 'Under Maintenance'
    },
    {
      id: 'GEN-007',
      name: 'Generator-07',
      category: 'Generator',
      location: 'Equipment Yard - Chennai',
      project: 'Not Allocated',
      availableFrom: 'Available Now',
      status: 'Available'
    },
    {
      id: 'SAF-001',
      name: 'Safety Equipment Set-01',
      category: 'Safety Equipment',
      location: 'Equipment Store - Chennai',
      project: 'Not Allocated',
      availableFrom: 'Available Now',
      status: 'Available'
    },
    {
      id: 'DMP-005',
      name: 'Dump Truck-05',
      category: 'Dump Truck',
      location: 'Repair Facility',
      project: 'Not Allocated',
      availableFrom: 'To Be Confirmed',
      status: 'Out of Service'
    }
  ];

  get filteredResources() {

    const search = this.searchText.toLowerCase();

    return this.resources.filter(resource => {

      const matchesSearch =
        resource.name.toLowerCase().includes(search) ||
        resource.id.toLowerCase().includes(search) ||
        resource.project.toLowerCase().includes(search) ||
        resource.location.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        resource.status === this.selectedStatus;

      const matchesCategory =
        this.selectedCategory === 'All Categories' ||
        resource.category === this.selectedCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }

  get availableCount(): number {
    return this.resources.filter(
      resource => resource.status === 'Available'
    ).length;
  }

  get allocatedCount(): number {
    return this.resources.filter(
      resource => resource.status === 'Allocated'
    ).length;
  }

  get maintenanceCount(): number {
    return this.resources.filter(
      resource => resource.status === 'Under Maintenance'
    ).length;
  }

  get outOfServiceCount(): number {
    return this.resources.filter(
      resource => resource.status === 'Out of Service'
    ).length;
  }

  getStatusClass(status: string): string {

    switch (status) {

      case 'Available':
        return 'available';

      case 'Allocated':
        return 'allocated';

      case 'Under Maintenance':
        return 'maintenance';

      case 'Out of Service':
        return 'out-of-service';

      default:
        return '';
    }
  }
}