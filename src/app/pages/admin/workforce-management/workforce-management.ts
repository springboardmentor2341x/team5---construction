import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
interface Worker {
  id: number;
  name: string;
  employeeId: string;
  contractor: string;
  project: string;
  role: string;
  status: 'Active' | 'Pending' | 'Inactive' | 'On Leave';
}

@Component({
  selector: 'app-workforce-management',
  standalone: true,
  imports: [
  FormsModule,
  MatIconModule
],
  templateUrl: './workforce-management.html',
  styleUrl: './workforce-management.css'
})
export class WorkforceManagement {

  searchTerm = '';

  showDeletePopup = false;
  showSuccessPopup = false;

  selectedWorker: Worker | null = null;

  workers: Worker[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      employeeId: 'WRK-001',
      contractor: 'ABC Constructions',
      project: 'Green Valley Apartments',
      role: 'Mason',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Priya Reddy',
      employeeId: 'WRK-002',
      contractor: 'BuildPro Contractors',
      project: 'City Mall Project',
      role: 'Electrician',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Arjun Kumar',
      employeeId: 'WRK-003',
      contractor: 'ABC Constructions',
      project: 'Green Valley Apartments',
      role: 'Carpenter',
      status: 'On Leave'
    },
    {
      id: 4,
      name: 'Sneha Rao',
      employeeId: 'WRK-004',
      contractor: 'Prime Builders',
      project: 'Metro Hospital',
      role: 'Plumber',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      employeeId: 'WRK-005',
      contractor: 'BuildPro Contractors',
      project: 'City Mall Project',
      role: 'Welder',
      status: 'Pending'
    },
    {
      id: 6,
      name: 'Anjali Reddy',
      employeeId: 'WRK-006',
      contractor: 'Prime Builders',
      project: 'Metro Hospital',
      role: 'Painter',
      status: 'Inactive'
    }
  ];

  get filteredWorkers(): Worker[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.workers;
    }

    return this.workers.filter(worker =>
      worker.name.toLowerCase().includes(term) ||
      worker.employeeId.toLowerCase().includes(term) ||
      worker.contractor.toLowerCase().includes(term) ||
      worker.project.toLowerCase().includes(term) ||
      worker.role.toLowerCase().includes(term)
    );
  }

  get totalWorkers(): number {
    return this.workers.length;
  }

  get activeWorkers(): number {
    return this.workers.filter(worker => worker.status === 'Active').length;
  }

  get onLeaveWorkers(): number {
    return this.workers.filter(worker => worker.status === 'On Leave').length;
  }

  get inactiveWorkers(): number {
    return this.workers.filter(worker => worker.status === 'Inactive').length;
  }

  getStatusClass(status: Worker['status']): string {
    switch (status) {
      case 'Active':
        return 'active';

      case 'Pending':
        return 'pending';

      case 'Inactive':
        return 'inactive';

      case 'On Leave':
        return 'leave';

      default:
        return '';
    }
  }

  viewWorker(worker: Worker): void {
    alert(
      `Worker: ${worker.name}\n` +
      `Employee ID: ${worker.employeeId}\n` +
      `Role: ${worker.role}\n` +
      `Contractor: ${worker.contractor}\n` +
      `Project: ${worker.project}\n` +
      `Status: ${worker.status}`
    );
  }

  editWorker(worker: Worker): void {
    alert(`Edit Worker: ${worker.name}`);
  }

  openDeletePopup(worker: Worker): void {
    this.selectedWorker = worker;
    this.showDeletePopup = true;
  }

  cancelDelete(): void {
    this.showDeletePopup = false;
    this.selectedWorker = null;
  }

  confirmDelete(): void {
    if (!this.selectedWorker) {
      return;
    }

    this.workers = this.workers.filter(
      worker => worker.id !== this.selectedWorker?.id
    );

    this.showDeletePopup = false;
    this.showSuccessPopup = true;
    this.selectedWorker = null;
  }

  closeSuccessPopup(): void {
    this.showSuccessPopup = false;
  }

  addWorker(): void {
    alert('Add Worker form will be connected here.');
  }
}