import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-requests',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './material-requests.html',
  styleUrl: './material-requests.css'
})
export class MaterialRequests {

  searchTerm = '';
  selectedStatus = 'All';

  selectedRequest: any = null;
  showViewPopup = false;

  requests = [
    {
      id: 'MR-001',
      material: 'Cement',
      project: 'Hyderabad Commercial Complex',
      quantity: '500 bags',
      requestedBy: 'Site Engineer',
      date: '19 Aug 2026',
      status: 'Pending'
    },
    {
      id: 'MR-002',
      material: 'Steel',
      project: 'Government Hospital',
      quantity: '20 tons',
      requestedBy: 'Project Manager',
      date: '18 Aug 2026',
      status: 'Approved'
    },
    {
      id: 'MR-003',
      material: 'Bricks',
      project: 'Residential Apartments',
      quantity: '2,000 units',
      requestedBy: 'Site Engineer',
      date: '17 Aug 2026',
      status: 'Fulfilled'
    },
    {
      id: 'MR-004',
      material: 'Plumbing Pipes',
      project: 'Office Building',
      quantity: '300 units',
      requestedBy: 'Site Engineer',
      date: '16 Aug 2026',
      status: 'Pending'
    },
    {
      id: 'MR-005',
      material: 'Electrical Cable',
      project: 'Office Building',
      quantity: '800 meters',
      requestedBy: 'Electrical Supervisor',
      date: '15 Aug 2026',
      status: 'Rejected'
    }
  ];

  get filteredRequests() {
    return this.requests.filter(request => {

      const matchesSearch =
        !this.searchTerm.trim() ||
        request.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.material.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.project.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' ||
        request.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get pendingCount() {
    return this.requests.filter(r => r.status === 'Pending').length;
  }

  get approvedCount() {
    return this.requests.filter(r => r.status === 'Approved').length;
  }

  get fulfilledCount() {
    return this.requests.filter(r => r.status === 'Fulfilled').length;
  }

  viewRequest(request: any) {
  this.selectedRequest = request;
  this.showViewPopup = true;
}
closeViewPopup() {
  this.showViewPopup = false;
  this.selectedRequest = null;
}

  approveRequest(request: any) {
    request.status = 'Approved';
  }

  rejectRequest(request: any) {
    request.status = 'Rejected';
  }
}