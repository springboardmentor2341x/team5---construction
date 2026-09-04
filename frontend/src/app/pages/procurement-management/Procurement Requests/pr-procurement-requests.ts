import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProcurementRequest {
  id: string;
  project: string;
  requestedBy: string;
  item: string;
  category: string;
  quantity: number;
  requiredDate: string;
  purpose: string;
  priority: string;
  requestDate: string;
  status: string;
  remarks: string;
}

@Component({
  selector: 'app-pr-procurement-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-procurement-requests.html',
  styleUrl: './pr-procurement-requests.css'
})
export class PrProcurementRequestsComponent {

  totalRequests = 8;
  pendingRequests = 3;
  approvedRequests = 2;
  processingRequests = 2;
  completedRequests = 1;

  searchText = '';
  selectedCategory = 'All';
  selectedStatus = 'All';
  selectedPriority = 'All';

  showAddRequest = false;
  showViewRequest = false;

  editingRequest: ProcurementRequest | null = null;
  selectedRequest: ProcurementRequest | null = null;

  requestForm: ProcurementRequest = {
    id: '',
    project: '',
    requestedBy: '',
    item: '',
    category: 'Raw Materials',
    quantity: 1,
    requiredDate: '',
    purpose: '',
    priority: 'Medium',
    requestDate: '',
    status: 'Pending',
    remarks: ''
  };

  requests: ProcurementRequest[] = [
    {
      id: 'PR-001',
      project: 'Green Valley Residential Project',
      requestedBy: 'Arun Kumar',
      item: 'Cement',
      category: 'Raw Materials',
      quantity: 500,
      requiredDate: '2026-09-05',
      purpose: 'Required for foundation and structural construction work.',
      priority: 'High',
      requestDate: '2026-08-25',
      status: 'Pending',
      remarks: 'Urgently required for upcoming construction activity.'
    },
    {
      id: 'PR-002',
      project: 'Chennai Commercial Complex',
      requestedBy: 'Rajesh Kumar',
      item: 'Concrete Mixer',
      category: 'Equipment',
      quantity: 2,
      requiredDate: '2026-09-10',
      purpose: 'Required for concrete mixing activities at the project site.',
      priority: 'High',
      requestDate: '2026-08-24',
      status: 'Approved',
      remarks: 'Request approved for procurement.'
    },
    {
      id: 'PR-003',
      project: 'Green Valley Residential Project',
      requestedBy: 'Suresh Babu',
      item: 'Steel Rods',
      category: 'Raw Materials',
      quantity: 1000,
      requiredDate: '2026-09-12',
      purpose: 'Required for reinforcement and structural work.',
      priority: 'Medium',
      requestDate: '2026-08-23',
      status: 'Processing',
      remarks: 'Vendor selection is in progress.'
    },
    {
      id: 'PR-004',
      project: 'Metro Highway Project',
      requestedBy: 'Vijay Anand',
      item: 'Excavator',
      category: 'Machinery',
      quantity: 1,
      requiredDate: '2026-09-15',
      purpose: 'Required for excavation and earthwork activities.',
      priority: 'High',
      requestDate: '2026-08-22',
      status: 'Approved',
      remarks: 'Approved by authorized project manager.'
    },
    {
      id: 'PR-005',
      project: 'Chennai Commercial Complex',
      requestedBy: 'Priya Sharma',
      item: 'Safety Helmets',
      category: 'Safety Equipment',
      quantity: 100,
      requiredDate: '2026-09-01',
      purpose: 'Required for worker safety at the construction site.',
      priority: 'High',
      requestDate: '2026-08-21',
      status: 'Completed',
      remarks: 'Items received successfully.'
    },
    {
      id: 'PR-006',
      project: 'Metro Highway Project',
      requestedBy: 'Manoj Kumar',
      item: 'Safety Shoes',
      category: 'Safety Equipment',
      quantity: 75,
      requiredDate: '2026-09-08',
      purpose: 'Required as personal protective equipment for workers.',
      priority: 'Medium',
      requestDate: '2026-08-20',
      status: 'Pending',
      remarks: 'Waiting for approval.'
    },
    {
      id: 'PR-007',
      project: 'Green Valley Residential Project',
      requestedBy: 'Meena Devi',
      item: 'Office Printer',
      category: 'Office Supplies',
      quantity: 2,
      requiredDate: '2026-09-20',
      purpose: 'Required for project office documentation and reports.',
      priority: 'Low',
      requestDate: '2026-08-19',
      status: 'Processing',
      remarks: 'Procurement team is processing the request.'
    },
    {
      id: 'PR-008',
      project: 'Chennai Commercial Complex',
      requestedBy: 'Karthik Raj',
      item: 'Sand',
      category: 'Raw Materials',
      quantity: 300,
      requiredDate: '2026-09-03',
      purpose: 'Required for concrete and masonry work.',
      priority: 'Medium',
      requestDate: '2026-08-18',
      status: 'Pending',
      remarks: 'Requires approval before vendor selection.'
    }
  ];

  filteredRequests: ProcurementRequest[] = [...this.requests];

  filterRequests(): void {
    const search = this.searchText.toLowerCase().trim();

    this.filteredRequests = this.requests.filter((request) => {

      const matchesSearch =
        request.id.toLowerCase().includes(search) ||
        request.project.toLowerCase().includes(search) ||
        request.requestedBy.toLowerCase().includes(search) ||
        request.item.toLowerCase().includes(search) ||
        request.category.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        request.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        request.status === this.selectedStatus;

      const matchesPriority =
        this.selectedPriority === 'All' ||
        request.priority === this.selectedPriority;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesPriority
      );
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'status-pending';

      case 'Approved':
        return 'status-approved';

      case 'Rejected':
        return 'status-rejected';

      case 'Processing':
        return 'status-processing';

      case 'Completed':
        return 'status-completed';

      default:
        return '';
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High':
        return 'priority-high';

      case 'Medium':
        return 'priority-medium';

      case 'Low':
        return 'priority-low';

      default:
        return '';
    }
  }

  openAddRequest(): void {
    this.editingRequest = null;

    this.requestForm = {
      id: this.generateRequestId(),
      project: '',
      requestedBy: '',
      item: '',
      category: 'Raw Materials',
      quantity: 1,
      requiredDate: '',
      purpose: '',
      priority: 'Medium',
      requestDate: this.getTodayDate(),
      status: 'Pending',
      remarks: ''
    };

    this.showAddRequest = true;
  }

  closeAddRequest(): void {
    this.showAddRequest = false;
    this.editingRequest = null;
  }

  viewRequest(request: ProcurementRequest): void {
    this.selectedRequest = request;
    this.showViewRequest = true;
  }

  closeViewRequest(): void {
    this.showViewRequest = false;
    this.selectedRequest = null;
  }

  editRequest(request: ProcurementRequest): void {
    this.editingRequest = request;

    this.requestForm = {
      ...request
    };

    this.showAddRequest = true;
  }

  saveRequest(): void {

    if (
      !this.requestForm.project.trim() ||
      !this.requestForm.requestedBy.trim() ||
      !this.requestForm.item.trim() ||
      !this.requestForm.requiredDate ||
      !this.requestForm.purpose.trim() ||
      this.requestForm.quantity <= 0
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (this.editingRequest) {

      const index = this.requests.findIndex(
        request => request.id === this.editingRequest!.id
      );

      if (index !== -1) {
        this.requests[index] = {
          ...this.requestForm
        };

        alert('Procurement request updated successfully.');
      }

    } else {

      this.requests.push({
        ...this.requestForm
      });

      alert('Procurement request submitted successfully.');
    }

    this.updateSummary();
    this.filterRequests();

    this.showAddRequest = false;
    this.editingRequest = null;
  }

  private generateRequestId(): string {
    const nextNumber = this.requests.length + 1;

    return `PR-${String(nextNumber).padStart(3, '0')}`;
  }

  private getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  private updateSummary(): void {
    this.totalRequests = this.requests.length;

    this.pendingRequests = this.requests.filter(
      request => request.status === 'Pending'
    ).length;

    this.approvedRequests = this.requests.filter(
      request => request.status === 'Approved'
    ).length;

    this.processingRequests = this.requests.filter(
      request => request.status === 'Processing'
    ).length;

    this.completedRequests = this.requests.filter(
      request => request.status === 'Completed'
    ).length;
  }
}