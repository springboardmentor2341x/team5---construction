import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-allocation',
  standalone: true,
  imports: [FormsModule, RouterLink, DecimalPipe],
  templateUrl: './material-allocation.html',
  styleUrl: './material-allocation.css'
})
export class MaterialAllocation {

  searchTerm = '';
  selectedProject = 'All';

  selectedAllocation: any = null;
  showViewPopup = false;

  allocations = [
    {
      id: 'MA-001',
      material: 'Cement',
      project: 'Hyderabad Commercial Complex',
      activity: 'Foundation Work',
      quantity: 200,
      unit: 'bags',
      date: '19 Aug 2026',
      allocatedBy: 'Site Engineer'
    },
    {
      id: 'MA-002',
      material: 'Steel',
      project: 'Government Hospital',
      activity: 'Structural Work',
      quantity: 40,
      unit: 'tons',
      date: '18 Aug 2026',
      allocatedBy: 'Project Manager'
    },
    {
      id: 'MA-003',
      material: 'Bricks',
      project: 'Residential Apartments',
      activity: 'Wall Construction',
      quantity: 3000,
      unit: 'units',
      date: '17 Aug 2026',
      allocatedBy: 'Site Engineer'
    },
    {
      id: 'MA-004',
      material: 'Electrical Cable',
      project: 'Office Building',
      activity: 'Electrical Installation',
      quantity: 450,
      unit: 'meters',
      date: '16 Aug 2026',
      allocatedBy: 'Electrical Supervisor'
    }
  ];

  get filteredAllocations() {
    return this.allocations.filter(allocation => {

      const matchesSearch =
        !this.searchTerm.trim() ||
        allocation.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        allocation.material.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        allocation.project.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        allocation.activity.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesProject =
        this.selectedProject === 'All' ||
        allocation.project === this.selectedProject;

      return matchesSearch && matchesProject;
    });
  }

  get totalAllocations() {
    return this.allocations.length;
  }

  get totalAllocatedQuantity() {
    return this.allocations.reduce(
      (total, allocation) => total + allocation.quantity,
      0
    );
  }

  viewAllocation(allocation: any) {
    this.selectedAllocation = allocation;
    this.showViewPopup = true;
  }

  closeViewPopup() {
    this.showViewPopup = false;
    this.selectedAllocation = null;
  }
}     