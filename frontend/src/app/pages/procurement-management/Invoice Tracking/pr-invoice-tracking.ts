import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Invoice {
  id: string;
  invoiceNumber: string;
  vendor: string;
  purchaseOrder: string;
  project: string;
  invoiceDate: string;
  dueDate: string;
  invoiceAmount: number;
  paymentStatus: 'Pending' | 'Partially Paid' | 'Paid' | 'Overdue';
  invoiceStatus: 'Received' | 'Verified' | 'Processing' | 'Completed' | 'Cancelled';
  remarks: string;
}

@Component({
  selector: 'app-pr-invoice-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-invoice-tracking.html',
  styleUrls: ['./pr-invoice-tracking.css']
})
export class PrInvoiceTrackingComponent {

  searchText = '';
  selectedPaymentStatus = 'All';
  selectedInvoiceStatus = 'All';

  showAddModal = false;
  showViewModal = false;
  showEditModal = false;

  selectedInvoice: Invoice | null = null;

  newInvoice: Invoice = this.createEmptyInvoice();

  invoices: Invoice[] = [
    {
      id: 'INV-001',
      invoiceNumber: 'ABC-2026-001',
      vendor: 'ABC Building Materials',
      purchaseOrder: 'PO-001',
      project: 'Green Valley Apartments',
      invoiceDate: '2026-08-01',
      dueDate: '2026-08-31',
      invoiceAmount: 185000,
      paymentStatus: 'Pending',
      invoiceStatus: 'Verified',
      remarks: 'Cement and brick supply invoice'
    },
    {
      id: 'INV-002',
      invoiceNumber: 'SLS-2026-045',
      vendor: 'Sri Lakshmi Steel',
      purchaseOrder: 'PO-002',
      project: 'City Center Mall',
      invoiceDate: '2026-08-03',
      dueDate: '2026-08-25',
      invoiceAmount: 325000,
      paymentStatus: 'Partially Paid',
      invoiceStatus: 'Processing',
      remarks: 'TMT bars supplied'
    },
    {
      id: 'INV-003',
      invoiceNumber: 'CCT-2026-078',
      vendor: 'Chennai Cement Traders',
      purchaseOrder: 'PO-003',
      project: 'Green Valley Apartments',
      invoiceDate: '2026-08-05',
      dueDate: '2026-09-05',
      invoiceAmount: 142500,
      paymentStatus: 'Paid',
      invoiceStatus: 'Completed',
      remarks: 'OPC and PPC cement'
    },
    {
      id: 'INV-004',
      invoiceNumber: 'GEA-2026-022',
      vendor: 'Green Earth Aggregates',
      purchaseOrder: 'PO-004',
      project: 'Tech Park Phase II',
      invoiceDate: '2026-08-07',
      dueDate: '2026-08-20',
      invoiceAmount: 98000,
      paymentStatus: 'Overdue',
      invoiceStatus: 'Verified',
      remarks: 'M-Sand and blue metal'
    },
    {
      id: 'INV-005',
      invoiceNumber: 'ME-2026-114',
      vendor: 'Metro Electricals',
      purchaseOrder: 'PO-005',
      project: 'City Center Mall',
      invoiceDate: '2026-08-10',
      dueDate: '2026-09-10',
      invoiceAmount: 87500,
      paymentStatus: 'Pending',
      invoiceStatus: 'Received',
      remarks: 'Electrical cables and switches'
    },
    {
      id: 'INV-006',
      invoiceNumber: 'BPH-2026-056',
      vendor: 'BuildPro Hardware',
      purchaseOrder: 'PO-006',
      project: 'Tech Park Phase II',
      invoiceDate: '2026-08-12',
      dueDate: '2026-09-12',
      invoiceAmount: 45600,
      paymentStatus: 'Paid',
      invoiceStatus: 'Completed',
      remarks: 'Tools and fasteners'
    },
    {
      id: 'INV-007',
      invoiceNumber: 'PP-2026-031',
      vendor: 'Prime Paints & Coatings',
      purchaseOrder: 'PO-007',
      project: 'Green Valley Apartments',
      invoiceDate: '2026-08-14',
      dueDate: '2026-08-28',
      invoiceAmount: 76500,
      paymentStatus: 'Overdue',
      invoiceStatus: 'Processing',
      remarks: 'Interior and exterior paints'
    },
    {
      id: 'INV-008',
      invoiceNumber: 'SBE-2026-089',
      vendor: 'SafeBuild Equipment',
      purchaseOrder: 'PO-008',
      project: 'City Center Mall',
      invoiceDate: '2026-08-16',
      dueDate: '2026-09-16',
      invoiceAmount: 62800,
      paymentStatus: 'Pending',
      invoiceStatus: 'Verified',
      remarks: 'Safety helmets, gloves and PPE'
    },
    {
      id: 'INV-009',
      invoiceNumber: 'CTM-2026-041',
      vendor: 'Classic Tiles & Marble',
      purchaseOrder: 'PO-009',
      project: 'Green Valley Apartments',
      invoiceDate: '2026-08-18',
      dueDate: '2026-09-18',
      invoiceAmount: 118000,
      paymentStatus: 'Paid',
      invoiceStatus: 'Completed',
      remarks: 'Floor tiles and marble'
    },
    {
      id: 'INV-010',
      invoiceNumber: 'UPS-2026-017',
      vendor: 'Urban Plumbing Solutions',
      purchaseOrder: 'PO-010',
      project: 'Tech Park Phase II',
      invoiceDate: '2026-08-20',
      dueDate: '2026-09-20',
      invoiceAmount: 54200,
      paymentStatus: 'Partially Paid',
      invoiceStatus: 'Processing',
      remarks: 'Pipes and plumbing fittings'
    }
  ];

  /* =========================================================
     FILTERED INVOICES
  ========================================================= */

  get filteredInvoices(): Invoice[] {

    const search = this.searchText.trim().toLowerCase();

    return this.invoices.filter(invoice => {

      const matchesSearch =
        !search ||
        invoice.id.toLowerCase().includes(search) ||
        invoice.invoiceNumber.toLowerCase().includes(search) ||
        invoice.vendor.toLowerCase().includes(search) ||
        invoice.purchaseOrder.toLowerCase().includes(search) ||
        invoice.project.toLowerCase().includes(search) ||
        invoice.remarks.toLowerCase().includes(search);

      const matchesPaymentStatus =
        this.selectedPaymentStatus === 'All' ||
        invoice.paymentStatus === this.selectedPaymentStatus;

      const matchesInvoiceStatus =
        this.selectedInvoiceStatus === 'All' ||
        invoice.invoiceStatus === this.selectedInvoiceStatus;

      return (
        matchesSearch &&
        matchesPaymentStatus &&
        matchesInvoiceStatus
      );
    });
  }

  /* =========================================================
     SUMMARY
  ========================================================= */

  get totalInvoices(): number {
    return this.invoices.length;
  }

  get pendingInvoices(): number {
    return this.invoices.filter(
      invoice => invoice.paymentStatus === 'Pending'
    ).length;
  }

  get partiallyPaidInvoices(): number {
    return this.invoices.filter(
      invoice => invoice.paymentStatus === 'Partially Paid'
    ).length;
  }

  get paidInvoices(): number {
    return this.invoices.filter(
      invoice => invoice.paymentStatus === 'Paid'
    ).length;
  }

  get overdueInvoices(): number {
    return this.invoices.filter(
      invoice => invoice.paymentStatus === 'Overdue'
    ).length;
  }

  get totalInvoiceAmount(): number {
    return this.invoices.reduce(
      (total, invoice) => total + invoice.invoiceAmount,
      0
    );
  }

  get pendingAmount(): number {
    return this.invoices
      .filter(invoice =>
        invoice.paymentStatus === 'Pending' ||
        invoice.paymentStatus === 'Overdue'
      )
      .reduce(
        (total, invoice) => total + invoice.invoiceAmount,
        0
      );
  }

  get paidAmount(): number {
    return this.invoices
      .filter(invoice => invoice.paymentStatus === 'Paid')
      .reduce(
        (total, invoice) => total + invoice.invoiceAmount,
        0
      );
  }

  /* =========================================================
     ADD INVOICE
  ========================================================= */

  openAddModal(): void {
    this.newInvoice = this.createEmptyInvoice();
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addInvoice(): void {

    if (
      !this.newInvoice.invoiceNumber.trim() ||
      !this.newInvoice.vendor.trim() ||
      !this.newInvoice.purchaseOrder.trim() ||
      !this.newInvoice.project.trim() ||
      !this.newInvoice.invoiceDate ||
      !this.newInvoice.dueDate ||
      this.newInvoice.invoiceAmount <= 0
    ) {
      return;
    }

    const newId =
      `INV-${String(this.invoices.length + 1).padStart(3, '0')}`;

    const invoice: Invoice = {
      ...this.newInvoice,
      id: newId
    };

    this.invoices = [
      invoice,
      ...this.invoices
    ];

    this.closeAddModal();
  }

  /* =========================================================
     VIEW INVOICE
  ========================================================= */

  viewInvoice(invoice: Invoice): void {
    this.selectedInvoice = invoice;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedInvoice = null;
  }

  /* =========================================================
     EDIT INVOICE
  ========================================================= */

  editInvoice(invoice: Invoice): void {

    this.selectedInvoice = {
      ...invoice
    };

    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedInvoice = null;
  }

  updateInvoice(): void {

    if (!this.selectedInvoice) {
      return;
    }

    if (
      !this.selectedInvoice.invoiceNumber.trim() ||
      !this.selectedInvoice.vendor.trim() ||
      !this.selectedInvoice.purchaseOrder.trim() ||
      !this.selectedInvoice.project.trim() ||
      !this.selectedInvoice.invoiceDate ||
      !this.selectedInvoice.dueDate ||
      this.selectedInvoice.invoiceAmount <= 0
    ) {
      return;
    }

    const index = this.invoices.findIndex(
      invoice =>
        invoice.id === this.selectedInvoice!.id
    );

    if (index === -1) {
      return;
    }

    const updatedInvoices = [
      ...this.invoices
    ];

    updatedInvoices[index] = {
      ...this.selectedInvoice
    };

    this.invoices = updatedInvoices;

    this.closeEditModal();
  }

  /* =========================================================
     DELETE INVOICE
  ========================================================= */

  deleteInvoice(invoice: Invoice): void {

    const confirmed = window.confirm(
      `Are you sure you want to delete invoice ${invoice.invoiceNumber}?`
    );

    if (!confirmed) {
      return;
    }

    this.invoices = this.invoices.filter(
      item => item.id !== invoice.id
    );

    if (
      this.selectedInvoice &&
      this.selectedInvoice.id === invoice.id
    ) {
      this.selectedInvoice = null;
      this.showViewModal = false;
      this.showEditModal = false;
    }
  }

  /* =========================================================
     STATUS CLASSES
  ========================================================= */

  getPaymentStatusClass(status: string): string {

    switch (status) {

      case 'Pending':
        return 'payment-pending';

      case 'Partially Paid':
        return 'payment-partial';

      case 'Paid':
        return 'payment-paid';

      case 'Overdue':
        return 'payment-overdue';

      default:
        return '';
    }
  }

  getInvoiceStatusClass(status: string): string {

    switch (status) {

      case 'Received':
        return 'invoice-received';

      case 'Verified':
        return 'invoice-verified';

      case 'Processing':
        return 'invoice-processing';

      case 'Completed':
        return 'invoice-completed';

      case 'Cancelled':
        return 'invoice-cancelled';

      default:
        return '';
    }
  }

  /* =========================================================
     DATE / AMOUNT HELPERS
  ========================================================= */

  formatAmount(amount: number): string {

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }

  isOverdue(invoice: Invoice): boolean {

    if (invoice.paymentStatus === 'Paid') {
      return false;
    }

    const today = new Date();
    const dueDate = new Date(invoice.dueDate);

    return dueDate < today;
  }

  /* =========================================================
     FILTER CLEAR
  ========================================================= */

  clearFilters(): void {
    this.searchText = '';
    this.selectedPaymentStatus = 'All';
    this.selectedInvoiceStatus = 'All';
  }

  /* =========================================================
     EMPTY INVOICE
  ========================================================= */

  private createEmptyInvoice(): Invoice {

    return {
      id: '',
      invoiceNumber: '',
      vendor: '',
      purchaseOrder: '',
      project: '',
      invoiceDate: '',
      dueDate: '',
      invoiceAmount: 0,
      paymentStatus: 'Pending',
      invoiceStatus: 'Received',
      remarks: ''
    };
  }
}