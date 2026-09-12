import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Worker {
  workerId: string;
  workerName: string;
  contact: string;
  category: string;
  skill: string;
  contractor: string;
  project: string;
  joiningDate: string;
  status: string;
}

@Component({
  selector: 'app-wm-worker-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-worker-registration.html',
  styleUrl: './wm-worker-registration.css'
})
export class WmWorkerRegistrationComponent {

  showForm = false;
  showBulkForm = false;

  searchText = '';
  categoryFilter = 'All';
  statusFilter = 'All';

  worker: Worker = {
    workerId: '',
    workerName: '',
    contact: '',
    category: '',
    skill: '',
    contractor: '',
    project: '',
    joiningDate: '',
    status: 'Active'
  };

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

  projects = [
    'Chennai Metro Construction',
    'Green Valley Apartments',
    'Airport Expansion',
    'Highway Development'
  ];

  statuses = [
    'Active',
    'Inactive',
    'On Leave',
    'Transferred'
  ];

  workers: Worker[] = [
    {
      workerId: 'WRK-1001',
      workerName: 'Arun Kumar',
      contact: '9876543210',
      category: 'Skilled Workers',
      skill: 'Masonry',
      contractor: 'ABC Constructions',
      project: 'Chennai Metro Construction',
      joiningDate: '2026-01-15',
      status: 'Active'
    },
    {
      workerId: 'WRK-1002',
      workerName: 'Ravi Shankar',
      contact: '9876501234',
      category: 'Engineers',
      skill: 'Civil Engineering',
      contractor: 'Prime Infra',
      project: 'Airport Expansion',
      joiningDate: '2026-02-10',
      status: 'Active'
    },
    {
      workerId: 'WRK-1003',
      workerName: 'Suresh B',
      contact: '9988776655',
      category: 'Unskilled Workers',
      skill: 'General Labour',
      contractor: 'BuildPro Contractors',
      project: 'Green Valley Apartments',
      joiningDate: '2026-03-05',
      status: 'Active'
    },
    {
      workerId: 'WRK-1004',
      workerName: 'Karthik Raj',
      contact: '9898989898',
      category: 'Supervisors',
      skill: 'Site Supervision',
      contractor: 'National Builders',
      project: 'Highway Development',
      joiningDate: '2025-12-20',
      status: 'Active'
    },
    {
      workerId: 'WRK-1005',
      workerName: 'Manoj Kumar',
      contact: '9000011111',
      category: 'Skilled Workers',
      skill: 'Electrical Work',
      contractor: 'ABC Constructions',
      project: 'Chennai Metro Construction',
      joiningDate: '2026-04-12',
      status: 'On Leave'
    }
  ];

  openRegistration(): void {
    this.showForm = true;
    this.showBulkForm = false;
  }

  openBulkRegistration(): void {
    this.showBulkForm = true;
    this.showForm = false;
  }

  closeForms(): void {
    this.showForm = false;
    this.showBulkForm = false;
    this.resetWorker();
  }

  registerWorker(): void {

    if (
      !this.worker.workerId ||
      !this.worker.workerName ||
      !this.worker.contact ||
      !this.worker.category ||
      !this.worker.skill ||
      !this.worker.contractor ||
      !this.worker.project ||
      !this.worker.joiningDate
    ) {
      alert('Please fill all required worker information.');
      return;
    }

    this.workers.unshift({
      ...this.worker
    });

    alert('Worker registered successfully.');

    this.closeForms();
  }

  resetWorker(): void {
    this.worker = {
      workerId: '',
      workerName: '',
      contact: '',
      category: '',
      skill: '',
      contractor: '',
      project: '',
      joiningDate: '',
      status: 'Active'
    };
  }

  get filteredWorkers(): Worker[] {

    return this.workers.filter(worker => {

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        worker.workerId.toLowerCase().includes(search) ||
        worker.workerName.toLowerCase().includes(search) ||
        worker.skill.toLowerCase().includes(search) ||
        worker.contractor.toLowerCase().includes(search) ||
        worker.project.toLowerCase().includes(search);

      const matchesCategory =
        this.categoryFilter === 'All' ||
        worker.category === this.categoryFilter;

      const matchesStatus =
        this.statusFilter === 'All' ||
        worker.status === this.statusFilter;

      return matchesSearch &&
             matchesCategory &&
             matchesStatus;
    });
  }

  get activeWorkers(): number {
    return this.workers.filter(
      worker => worker.status === 'Active'
    ).length;
  }

  get inactiveWorkers(): number {
    return this.workers.filter(
      worker => worker.status === 'Inactive'
    ).length;
  }

  get leaveWorkers(): number {
    return this.workers.filter(
      worker => worker.status === 'On Leave'
    ).length;
  }
}