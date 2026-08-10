import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-machinery-tracking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rm-machinery-tracking.html',
  styleUrl: './rm-machinery-tracking.css'
})
export class RmMachineryTrackingComponent {

  searchText: string = '';
  selectedStatus: string = 'All';

  machinery = [
    {
      id: 'EXC-001',
      name: 'Excavator-01',
      category: 'Excavator',
      project: 'Residential Apartment',
      location: 'Chennai',
      status: 'Operating',
      operator: 'Arun Kumar',
      lastUpdated: '10 mins ago'
    },
    {
      id: 'EXC-003',
      name: 'Excavator-03',
      category: 'Excavator',
      project: 'Commercial Office Building',
      location: 'Bangalore',
      status: 'Operating',
      operator: 'Rahul Kumar',
      lastUpdated: '15 mins ago'
    },
    {
      id: 'CRN-001',
      name: 'Crane-01',
      category: 'Crane',
      project: 'Government Hospital',
      location: 'Hyderabad',
      status: 'Operating',
      operator: 'Suresh B',
      lastUpdated: '8 mins ago'
    },
    {
      id: 'CRN-002',
      name: 'Crane-02',
      category: 'Crane',
      project: 'Equipment Yard',
      location: 'Chennai',
      status: 'Idle',
      operator: 'Not Assigned',
      lastUpdated: '25 mins ago'
    },
    {
      id: 'GEN-005',
      name: 'Generator-05',
      category: 'Generator',
      project: 'Government Hospital',
      location: 'Hyderabad',
      status: 'Maintenance',
      operator: 'Not Assigned',
      lastUpdated: '1 hour ago'
    },
    {
      id: 'DMP-002',
      name: 'Dump Truck-02',
      category: 'Dump Truck',
      project: 'Residential Apartment',
      location: 'Chennai',
      status: 'Operating',
      operator: 'Vijay Kumar',
      lastUpdated: '12 mins ago'
    },
    {
      id: 'CRM-001',
      name: 'Concrete Mixer-01',
      category: 'Concrete Mixer',
      project: 'Commercial Office Building',
      location: 'Bangalore',
      status: 'Idle',
      operator: 'Not Assigned',
      lastUpdated: '35 mins ago'
    }
  ];

  get filteredMachinery() {
    return this.machinery.filter(item => {

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(search) ||
        item.id.toLowerCase().includes(search) ||
        item.project.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        item.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get operatingCount(): number {
    return this.machinery.filter(
      item => item.status === 'Operating'
    ).length;
  }

  get idleCount(): number {
    return this.machinery.filter(
      item => item.status === 'Idle'
    ).length;
  }

  get maintenanceCount(): number {
    return this.machinery.filter(
      item => item.status === 'Maintenance'
    ).length;
  }
}