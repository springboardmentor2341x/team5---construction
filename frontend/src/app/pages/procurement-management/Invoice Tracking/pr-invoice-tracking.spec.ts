import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrInvoiceTrackingComponent } from './pr-invoice-tracking';

describe('PrInvoiceTrackingComponent', () => {

  let component: PrInvoiceTrackingComponent;
  let fixture: ComponentFixture<PrInvoiceTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrInvoiceTrackingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrInvoiceTrackingComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invoices', () => {
    expect(component.invoices.length).toBeGreaterThan(0);
  });

  it('should calculate total invoices', () => {
    expect(component.totalInvoices).toBe(component.invoices.length);
  });

  it('should calculate pending invoices', () => {
    const count = component.invoices.filter(
      invoice => invoice.paymentStatus === 'Pending'
    ).length;

    expect(component.pendingInvoices).toBe(count);
  });

  it('should calculate partially paid invoices', () => {
    const count = component.invoices.filter(
      invoice => invoice.paymentStatus === 'Partially Paid'
    ).length;

    expect(component.partiallyPaidInvoices).toBe(count);
  });

  it('should calculate paid invoices', () => {
    const count = component.invoices.filter(
      invoice => invoice.paymentStatus === 'Paid'
    ).length;

    expect(component.paidInvoices).toBe(count);
  });

  it('should calculate overdue invoices', () => {
    const count = component.invoices.filter(
      invoice => invoice.paymentStatus === 'Overdue'
    ).length;

    expect(component.overdueInvoices).toBe(count);
  });

  it('should calculate total invoice amount', () => {
    const total = component.invoices.reduce(
      (sum, invoice) => sum + invoice.invoiceAmount,
      0
    );

    expect(component.totalInvoiceAmount).toBe(total);
  });

  it('should calculate pending amount', () => {
    const total = component.invoices
      .filter(
        invoice =>
          invoice.paymentStatus === 'Pending' ||
          invoice.paymentStatus === 'Overdue'
      )
      .reduce(
        (sum, invoice) => sum + invoice.invoiceAmount,
        0
      );

    expect(component.pendingAmount).toBe(total);
  });

  it('should calculate paid amount', () => {
    const total = component.invoices
      .filter(invoice => invoice.paymentStatus === 'Paid')
      .reduce(
        (sum, invoice) => sum + invoice.invoiceAmount,
        0
      );

    expect(component.paidAmount).toBe(total);
  });

  it('should search invoice by invoice number', () => {
    component.searchText = component.invoices[0].invoiceNumber;

    expect(component.filteredInvoices.length).toBeGreaterThan(0);
  });

  it('should search invoice by vendor', () => {
    component.searchText = component.invoices[0].vendor;

    expect(component.filteredInvoices.length).toBeGreaterThan(0);
  });

  it('should search invoice by purchase order', () => {
    component.searchText = component.invoices[0].purchaseOrder;

    expect(component.filteredInvoices.length).toBeGreaterThan(0);
  });

  it('should search invoice by project', () => {
    component.searchText = component.invoices[0].project;

    expect(component.filteredInvoices.length).toBeGreaterThan(0);
  });

  it('should filter pending invoices', () => {
    component.selectedPaymentStatus = 'Pending';

    const results = component.filteredInvoices;

    for (const invoice of results) {
      expect(invoice.paymentStatus).toBe('Pending');
    }
  });

  it('should filter partially paid invoices', () => {
    component.selectedPaymentStatus = 'Partially Paid';

    const results = component.filteredInvoices;

    for (const invoice of results) {
      expect(invoice.paymentStatus).toBe('Partially Paid');
    }
  });

  it('should filter paid invoices', () => {
    component.selectedPaymentStatus = 'Paid';

    const results = component.filteredInvoices;

    for (const invoice of results) {
      expect(invoice.paymentStatus).toBe('Paid');
    }
  });

  it('should filter overdue invoices', () => {
    component.selectedPaymentStatus = 'Overdue';

    const results = component.filteredInvoices;

    for (const invoice of results) {
      expect(invoice.paymentStatus).toBe('Overdue');
    }
  });

  it('should filter invoice status', () => {
    component.selectedInvoiceStatus = 'Completed';

    const results = component.filteredInvoices;

    for (const invoice of results) {
      expect(invoice.invoiceStatus).toBe('Completed');
    }
  });

  it('should clear filters', () => {
    component.searchText = 'ABC';
    component.selectedPaymentStatus = 'Paid';
    component.selectedInvoiceStatus = 'Completed';

    component.clearFilters();

    expect(component.searchText).toBe('');
    expect(component.selectedPaymentStatus).toBe('All');
    expect(component.selectedInvoiceStatus).toBe('All');
  });

  it('should open add invoice modal', () => {
    component.openAddModal();

    expect(component.showAddModal).toBe(true);
  });

  it('should close add invoice modal', () => {
    component.openAddModal();

    component.closeAddModal();

    expect(component.showAddModal).toBe(false);
  });

  it('should open view invoice modal', () => {
    const invoice = component.invoices[0];

    component.viewInvoice(invoice);

    expect(component.showViewModal).toBe(true);
    expect(component.selectedInvoice).toEqual(invoice);
  });

  it('should close view invoice modal', () => {
    const invoice = component.invoices[0];

    component.viewInvoice(invoice);
    component.closeViewModal();

    expect(component.showViewModal).toBe(false);
    expect(component.selectedInvoice).toBeNull();
  });

  it('should open edit invoice modal', () => {
    const invoice = component.invoices[0];

    component.editInvoice(invoice);

    expect(component.showEditModal).toBe(true);
    expect(component.selectedInvoice).toEqual(invoice);
  });

  it('should close edit invoice modal', () => {
    const invoice = component.invoices[0];

    component.editInvoice(invoice);
    component.closeEditModal();

    expect(component.showEditModal).toBe(false);
    expect(component.selectedInvoice).toBeNull();
  });

  it('should have delete invoice method', () => {
    expect(typeof component.deleteInvoice).toBe('function');
  });

  it('should return pending payment status class', () => {
    expect(component.getPaymentStatusClass('Pending'))
      .toBe('payment-pending');
  });

  it('should return partially paid status class', () => {
    expect(component.getPaymentStatusClass('Partially Paid'))
      .toBe('payment-partial');
  });

  it('should return paid status class', () => {
    expect(component.getPaymentStatusClass('Paid'))
      .toBe('payment-paid');
  });

  it('should return overdue status class', () => {
    expect(component.getPaymentStatusClass('Overdue'))
      .toBe('payment-overdue');
  });

  it('should return empty payment class for unknown status', () => {
    expect(component.getPaymentStatusClass('Unknown')).toBe('');
  });

  it('should return received invoice status class', () => {
    expect(component.getInvoiceStatusClass('Received'))
      .toBe('invoice-received');
  });

  it('should return verified invoice status class', () => {
    expect(component.getInvoiceStatusClass('Verified'))
      .toBe('invoice-verified');
  });

  it('should return processing invoice status class', () => {
    expect(component.getInvoiceStatusClass('Processing'))
      .toBe('invoice-processing');
  });

  it('should return completed invoice status class', () => {
    expect(component.getInvoiceStatusClass('Completed'))
      .toBe('invoice-completed');
  });

  it('should return cancelled invoice status class', () => {
    expect(component.getInvoiceStatusClass('Cancelled'))
      .toBe('invoice-cancelled');
  });

  it('should return empty invoice class for unknown status', () => {
    expect(component.getInvoiceStatusClass('Unknown')).toBe('');
  });

  it('should format invoice amount', () => {
    const result = component.formatAmount(185000);

    expect(result).toContain('185,000');
  });

  it('should identify overdue invoice', () => {
    const invoice = component.invoices.find(
      item => item.paymentStatus === 'Overdue'
    );

    expect(invoice).toBeTruthy();

    if (invoice) {
      expect(component.isOverdue(invoice)).toBe(true);
    }
  });

});