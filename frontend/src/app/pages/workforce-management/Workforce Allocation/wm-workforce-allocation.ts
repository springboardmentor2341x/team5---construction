import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wm-workforce-allocation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-workforce-allocation.html',
  styleUrl: './wm-workforce-allocation.css'
})
export class WmWorkforceAllocationComponent {

  selectedProject = '';
  selectedCategory = '';
  selectedContractor = '';
  selectedShift = '';
  selectedWorkArea = '';
  selectedStartDate = '';
  selectedEndDate = '';

  projects = [
    'Chennai Metro Construction',
    'Green Valley Apartments',
    'Airport Expansion',
    'Highway Development'
  ];

  categories = [
    'Engineers',
    'Supervisors',
    'Contractors',
    'Skilled Workers',
    'Unskilled Workers',
    'Consultants'
  ];

  contractors = [
    'ABC Constructions',
    'BuildPro Contractors',
    'Prime Infra',
    'National Builders'
  ];

  shifts = [
    'Morning Shift',
    'General Shift',
    'Evening Shift',
    'Night Shift'
  ];

  workAreas = [
    'Site Supervision',
    'Concrete Work',
    'Structural Work',
    'Electrical Work',
    'Plumbing Work',
    'Road Construction',
    'Material Handling',
    'Safety Operations'
  ];

  allocations = [
    {
      id: 'WA-001',
      worker: 'Rajesh Kumar',
      category: 'Skilled Worker',
      project: 'Chennai Metro Construction',
      workArea: 'Concrete Work',
      contractor: 'ABC Constructions',
      shift: 'Morning Shift',
      startDate: '2026-08-20',
      endDate: '2026-09-20',
      status: 'Active'
    },
    {
      id: 'WA-002',
      worker: 'Arun Prakash',
      category: 'Engineer',
      project: 'Green Valley Apartments',
      workArea: 'Site Supervision',
      contractor: 'BuildPro Contractors',
      shift: 'General Shift',
      startDate: '2026-08-18',
      endDate: '2026-10-15',
      status: 'Active'
    },
    {
      id: 'WA-003',
      worker: 'Suresh Babu',
      category: 'Unskilled Worker',
      project: 'Airport Expansion',
      workArea: 'Material Handling',
      contractor: 'Prime Infra',
      shift: 'Evening Shift',
      startDate: '2026-08-15',
      endDate: '2026-09-30',
      status: 'Active'
    },
    {
      id: 'WA-004',
      worker: 'Vijay Kumar',
      category: 'Supervisor',
      project: 'Highway Development',
      workArea: 'Road Construction',
      contractor: 'National Builders',
      shift: 'Morning Shift',
      startDate: '2026-08-10',
      endDate: '2026-11-10',
      status: 'Active'
    },
    {
      id: 'WA-005',
      worker: 'Karthik Raj',
      category: 'Skilled Worker',
      project: 'Chennai Metro Construction',
      workArea: 'Structural Work',
      contractor: 'ABC Constructions',
      shift: 'General Shift',
      startDate: '2026-07-15',
      endDate: '2026-08-15',
      status: 'Completed'
    }
  ];

  get activeAllocations(): number {
    return this.allocations.filter(
      allocation => allocation.status === 'Active'
    ).length;
  }

  get completedAllocations(): number {
    return this.allocations.filter(
      allocation => allocation.status === 'Completed'
    ).length;
  }

  get totalAllocations(): number {
    return this.allocations.length;
  }

  get projectCount(): number {
    return new Set(
      this.allocations.map(allocation => allocation.project)
    ).size;
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';

      case 'completed':
        return 'status-completed';

      case 'pending':
        return 'status-pending';

      default:
        return '';
    }
  }

  allocateWorker(): void {

    if (
      !this.selectedProject ||
      !this.selectedCategory ||
      !this.selectedContractor ||
      !this.selectedShift ||
      !this.selectedWorkArea
    ) {
      alert('Please fill all required workforce allocation details.');
      return;
    }

    const newAllocation = {
      id: `WA-${String(this.allocations.length + 1).padStart(3, '0')}`,
      worker: 'New Worker',
      category: this.selectedCategory,
      project: this.selectedProject,
      workArea: this.selectedWorkArea,
      contractor: this.selectedContractor,
      shift: this.selectedShift,
      startDate: this.selectedStartDate || 'Not specified',
      endDate: this.selectedEndDate || 'Not specified',
      status: 'Active'
    };

    this.allocations.push(newAllocation);

    alert('Workforce allocated successfully.');

    this.clearForm();
  }

  clearForm(): void {
    this.selectedProject = '';
    this.selectedCategory = '';
    this.selectedContractor = '';
    this.selectedShift = '';
    this.selectedWorkArea = '';
    this.selectedStartDate = '';
    this.selectedEndDate = '';
  }

  viewAllocation(allocation: any): void {
    alert(
      `Allocation ID: ${allocation.id}\n` +
      `Worker: ${allocation.worker}\n` +
      `Category: ${allocation.category}\n` +
      `Project: ${allocation.project}\n` +
      `Work Area: ${allocation.workArea}\n` +
      `Contractor: ${allocation.contractor}\n` +
      `Shift: ${allocation.shift}\n` +
      `Start Date: ${allocation.startDate}\n` +
      `End Date: ${allocation.endDate}\n` +
      `Status: ${allocation.status}`
    );
  }

  reassignWorker(allocation: any): void {
    alert(`Reassignment requested for ${allocation.worker}.`);
  }

  deleteAllocation(index: number): void {
    const confirmed = confirm(
      'Are you sure you want to remove this workforce allocation?'
    );

    if (confirmed) {
      this.allocations.splice(index, 1);
    }
  }
}