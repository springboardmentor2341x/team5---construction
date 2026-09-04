import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pr-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pr-dashboard.html',
  styleUrl: './pr-dashboard.css'
})
export class PrDashboardComponent {

  currentDate = '30 Aug 2026';

  /* ================= KPI DATA ================= */

  totalRequests = 128;
  newRequests = 14;

  totalPurchaseOrders = 64;
  activePurchaseOrders = 27;

  activeVendors = 32;
  supplierCount = 41;

  procurementValue = '₹8.2M';

  /* ================= SECONDARY DATA ================= */

  pendingApprovals = 18;
  pendingInvoices = 12;
  overdueInvoices = 4;
  upcomingDeliveries = 9;

  /* ================= STATUS ================= */

  statusCounts = {
    pending: 24,
    approved: 38,
    processing: 18,
    completed: 42,
    rejected: 6
  };

  /* ================= BUDGET ================= */

  budgetUsed = 68;

  /* ================= RECENT REQUESTS ================= */

  recentRequests = [
    {
      id: 'PR-00128',
      project: 'Green Valley Tower',
      item: 'Cement',
      category: 'Raw Materials',
      quantity: '500 Bags',
      priority: 'High',
      status: 'Approved'
    },
    {
      id: 'PR-00127',
      project: 'Metro Complex',
      item: 'Steel Rods',
      category: 'Raw Materials',
      quantity: '2,000 Kg',
      priority: 'Medium',
      status: 'Pending'
    },
    {
      id: 'PR-00126',
      project: 'Lake View Project',
      item: 'Safety Helmets',
      category: 'Safety Equipment',
      quantity: '150 Nos',
      priority: 'Low',
      status: 'Processing'
    },
    {
      id: 'PR-00125',
      project: 'City Mall',
      item: 'Concrete Mixer',
      category: 'Equipment',
      quantity: '2 Nos',
      priority: 'High',
      status: 'Completed'
    }
  ];

  /* ================= PURCHASE ORDERS ================= */

  recentOrders = [
    {
      id: 'PO-00452',
      vendor: 'ABC Building Supplies',
      project: 'Green Valley Tower',
      deliveryDate: '05 Sep 2026',
      amount: '₹4,25,000',
      status: 'Processing'
    },
    {
      id: 'PO-00451',
      vendor: 'Metro Steel Suppliers',
      project: 'Metro Complex',
      deliveryDate: '07 Sep 2026',
      amount: '₹7,80,000',
      status: 'Approved'
    },
    {
      id: 'PO-00450',
      vendor: 'SafeBuild Equipments',
      project: 'Lake View Project',
      deliveryDate: '10 Sep 2026',
      amount: '₹1,25,000',
      status: 'Pending'
    }
  ];

  /* ================= ACTIONS ================= */

  refreshDashboard(): void {
    console.log('Procurement dashboard refreshed');
  }

  createRequest(): void {
    console.log('Navigate to Procurement Request');
  }

  addVendor(): void {
    console.log('Navigate to Vendor Management');
  }

  createPurchaseOrder(): void {
    console.log('Navigate to Purchase Order');
  }

  trackInvoice(): void {
    console.log('Navigate to Invoice Tracking');
  }
}