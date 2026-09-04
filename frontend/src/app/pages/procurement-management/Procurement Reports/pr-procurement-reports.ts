import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProcurementReport {
  id: string;
  reportName: string;
  reportType:
    | 'Procurement Summary'
    | 'Vendor Report'
    | 'Purchase Order Report'
    | 'Invoice Report'
    | 'Category Report'
    | 'Project Cost Report'
    | 'Pending Report';
  project: string;
  period: string;
  totalRequests: number;
  approvedRequests: number;
  pendingRequests: number;
  totalPurchaseOrders: number;
  totalInvoiceAmount: number;
  paidAmount: number;
  pendingAmount: number;
  status: 'Generated' | 'Processing' | 'Pending';
  generatedDate: string;
}

@Component({
  selector: 'app-pr-procurement-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-procurement-reports.html',
  styleUrls: ['./pr-procurement-reports.css']
})
export class PrProcurementReportsComponent {

  searchText = '';
  selectedReportType = 'All';
  selectedProject = 'All';
  selectedStatus = 'All';

  showViewModal = false;

  selectedReport: ProcurementReport | null = null;

  reports: ProcurementReport[] = [

    {
      id: 'REP-001',
      reportName: 'Monthly Procurement Summary',
      reportType: 'Procurement Summary',
      project: 'All Projects',
      period: 'August 2026',
      totalRequests: 48,
      approvedRequests: 38,
      pendingRequests: 10,
      totalPurchaseOrders: 32,
      totalInvoiceAmount: 8450000,
      paidAmount: 6250000,
      pendingAmount: 2200000,
      status: 'Generated',
      generatedDate: '2026-08-28'
    },

    {
      id: 'REP-002',
      reportName: 'Vendor Performance Report',
      reportType: 'Vendor Report',
      project: 'All Projects',
      period: 'August 2026',
      totalRequests: 35,
      approvedRequests: 30,
      pendingRequests: 5,
      totalPurchaseOrders: 27,
      totalInvoiceAmount: 5680000,
      paidAmount: 4250000,
      pendingAmount: 1430000,
      status: 'Generated',
      generatedDate: '2026-08-27'
    },

    {
      id: 'REP-003',
      reportName: 'Purchase Order Summary',
      reportType: 'Purchase Order Report',
      project: 'Green Valley Apartments',
      period: 'August 2026',
      totalRequests: 18,
      approvedRequests: 15,
      pendingRequests: 3,
      totalPurchaseOrders: 14,
      totalInvoiceAmount: 3250000,
      paidAmount: 2450000,
      pendingAmount: 800000,
      status: 'Generated',
      generatedDate: '2026-08-26'
    },

    {
      id: 'REP-004',
      reportName: 'Invoice Tracking Report',
      reportType: 'Invoice Report',
      project: 'City Center Mall',
      period: 'August 2026',
      totalRequests: 15,
      approvedRequests: 12,
      pendingRequests: 3,
      totalPurchaseOrders: 10,
      totalInvoiceAmount: 2875000,
      paidAmount: 1985000,
      pendingAmount: 890000,
      status: 'Processing',
      generatedDate: '2026-08-25'
    },

    {
      id: 'REP-005',
      reportName: 'Procurement Category Report',
      reportType: 'Category Report',
      project: 'Tech Park Phase II',
      period: 'August 2026',
      totalRequests: 12,
      approvedRequests: 9,
      pendingRequests: 3,
      totalPurchaseOrders: 8,
      totalInvoiceAmount: 1850000,
      paidAmount: 1325000,
      pendingAmount: 525000,
      status: 'Generated',
      generatedDate: '2026-08-24'
    },

    {
      id: 'REP-006',
      reportName: 'Project Procurement Cost',
      reportType: 'Project Cost Report',
      project: 'Green Valley Apartments',
      period: 'July - August 2026',
      totalRequests: 24,
      approvedRequests: 20,
      pendingRequests: 4,
      totalPurchaseOrders: 18,
      totalInvoiceAmount: 4250000,
      paidAmount: 3150000,
      pendingAmount: 1100000,
      status: 'Generated',
      generatedDate: '2026-08-23'
    },

    {
      id: 'REP-007',
      reportName: 'Pending Procurement Report',
      reportType: 'Pending Report',
      project: 'City Center Mall',
      period: 'August 2026',
      totalRequests: 11,
      approvedRequests: 4,
      pendingRequests: 7,
      totalPurchaseOrders: 5,
      totalInvoiceAmount: 1650000,
      paidAmount: 650000,
      pendingAmount: 1000000,
      status: 'Pending',
      generatedDate: '2026-08-22'
    },

    {
      id: 'REP-008',
      reportName: 'Monthly Invoice Summary',
      reportType: 'Invoice Report',
      project: 'Tech Park Phase II',
      period: 'August 2026',
      totalRequests: 16,
      approvedRequests: 13,
      pendingRequests: 3,
      totalPurchaseOrders: 11,
      totalInvoiceAmount: 2985000,
      paidAmount: 2185000,
      pendingAmount: 800000,
      status: 'Generated',
      generatedDate: '2026-08-21'
    }

  ];


  /* =====================================================
     FILTERED REPORTS
  ===================================================== */

  get filteredReports(): ProcurementReport[] {

    const search = this.searchText.trim().toLowerCase();

    return this.reports.filter(report => {

      const matchesSearch =
        !search ||
        report.id.toLowerCase().includes(search) ||
        report.reportName.toLowerCase().includes(search) ||
        report.reportType.toLowerCase().includes(search) ||
        report.project.toLowerCase().includes(search) ||
        report.period.toLowerCase().includes(search);

      const matchesReportType =
        this.selectedReportType === 'All' ||
        report.reportType === this.selectedReportType;

      const matchesProject =
        this.selectedProject === 'All' ||
        report.project === this.selectedProject;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        report.status === this.selectedStatus;

      return (
        matchesSearch &&
        matchesReportType &&
        matchesProject &&
        matchesStatus
      );
    });
  }


  /* =====================================================
     SUMMARY
  ===================================================== */

  get totalReports(): number {
    return this.reports.length;
  }

  get generatedReports(): number {
    return this.reports.filter(
      report => report.status === 'Generated'
    ).length;
  }

  get totalRequests(): number {
    return this.reports.reduce(
      (total, report) => total + report.totalRequests,
      0
    );
  }

  get totalPurchaseOrders(): number {
    return this.reports.reduce(
      (total, report) => total + report.totalPurchaseOrders,
      0
    );
  }

  get totalInvoiceAmount(): number {
    return this.reports.reduce(
      (total, report) => total + report.totalInvoiceAmount,
      0
    );
  }

  get totalPendingAmount(): number {
    return this.reports.reduce(
      (total, report) => total + report.pendingAmount,
      0
    );
  }


  /* =====================================================
     VIEW REPORT
  ===================================================== */

  viewReport(report: ProcurementReport): void {

    this.selectedReport = report;

    this.showViewModal = true;
  }

  closeViewModal(): void {

    this.showViewModal = false;

    this.selectedReport = null;
  }


  /* =====================================================
     REPORT TYPE CLASS
  ===================================================== */

  getReportTypeClass(type: string): string {

    switch (type) {

      case 'Procurement Summary':
        return 'type-summary';

      case 'Vendor Report':
        return 'type-vendor';

      case 'Purchase Order Report':
        return 'type-purchase-order';

      case 'Invoice Report':
        return 'type-invoice';

      case 'Category Report':
        return 'type-category';

      case 'Project Cost Report':
        return 'type-project';

      case 'Pending Report':
        return 'type-pending';

      default:
        return '';
    }
  }


  /* =====================================================
     STATUS CLASS
  ===================================================== */

  getStatusClass(status: string): string {

    switch (status) {

      case 'Generated':
        return 'status-generated';

      case 'Processing':
        return 'status-processing';

      case 'Pending':
        return 'status-pending';

      default:
        return '';
    }
  }


  /* =====================================================
     FORMAT AMOUNT
  ===================================================== */

  formatAmount(amount: number): string {

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }


  /* =====================================================
     CLEAR FILTERS
  ===================================================== */

  clearFilters(): void {

    this.searchText = '';

    this.selectedReportType = 'All';

    this.selectedProject = 'All';

    this.selectedStatus = 'All';
  }

}