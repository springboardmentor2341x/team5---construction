import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procurement-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './procurement-report.html',
  styleUrl: './procurement-report.css'
})
export class ProcurementReportComponent {

  selectedProject = 'Chennai Commercial Complex';
  selectedPeriod = 'Current Month';
  selectedStatus = 'All Status';

  totalRequests = 48;
  approvedRequests = 35;
  pendingRequests = 7;
  totalProcurementValue = 18500000;

  procurementRecords = [
    {
      id: 'PR-001',
      item: 'Cement',
      category: 'Construction Materials',
      quantity: '500 Bags',
      vendor: 'ABC Building Supplies',
      amount: 425000,
      requestStatus: 'Approved',
      purchaseOrder: 'PO-001',
      invoiceStatus: 'Paid'
    },
    {
      id: 'PR-002',
      item: 'Steel Rods',
      category: 'Structural Materials',
      quantity: '12 Tons',
      vendor: 'Prime Steel Traders',
      amount: 1250000,
      requestStatus: 'Approved',
      purchaseOrder: 'PO-002',
      invoiceStatus: 'Paid'
    },
    {
      id: 'PR-003',
      item: 'Electrical Cables',
      category: 'Electrical',
      quantity: '2500 Meters',
      vendor: 'PowerTech Electricals',
      amount: 680000,
      requestStatus: 'Pending',
      purchaseOrder: '—',
      invoiceStatus: 'Pending'
    },
    {
      id: 'PR-004',
      item: 'Plumbing Pipes',
      category: 'Plumbing',
      quantity: '800 Meters',
      vendor: 'BuildFlow Suppliers',
      amount: 375000,
      requestStatus: 'Approved',
      purchaseOrder: 'PO-004',
      invoiceStatus: 'Paid'
    },
    {
      id: 'PR-005',
      item: 'Floor Tiles',
      category: 'Finishing Materials',
      quantity: '4500 Sq.Ft',
      vendor: 'Classic Tiles & Marbles',
      amount: 525000,
      requestStatus: 'Under Review',
      purchaseOrder: '—',
      invoiceStatus: 'Not Generated'
    }
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reports/dashboard']);
  }

  applyFilters(): void {
    alert('✓ Procurement report filters applied successfully!');
  }

  downloadPdf(): void {
    alert('✓ Procurement Report PDF downloaded successfully!');
  }

  exportExcel(): void {
    alert('✓ Procurement Report Excel file exported successfully!');
  }

  viewReport(): void {
    this.router.navigate(['/reports/preview']);
  }
}