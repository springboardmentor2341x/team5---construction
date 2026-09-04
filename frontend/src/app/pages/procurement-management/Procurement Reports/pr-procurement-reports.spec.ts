import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrProcurementReportsComponent } from './pr-procurement-reports';

describe('PrProcurementReportsComponent', () => {

  let component: PrProcurementReportsComponent;
  let fixture: ComponentFixture<PrProcurementReportsComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PrProcurementReportsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      PrProcurementReportsComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('should have procurement reports', () => {

    expect(component.reports).toBeDefined();
    expect(component.reports.length).toBeGreaterThan(0);

  });


  it('should contain required report types', () => {

    const reportTypes = component.reports.map(
      report => report.reportType
    );

    expect(reportTypes).toContain('Summary');
    expect(reportTypes).toContain('Vendor');
    expect(reportTypes).toContain('Purchase Order');
    expect(reportTypes).toContain('Invoice');
    expect(reportTypes).toContain('Category');
    expect(reportTypes).toContain('Project');
    expect(reportTypes).toContain('Pending');

  });


  it('should calculate total reports correctly', () => {

    expect(component.totalReports).toBe(8);

  });


  it('should calculate generated reports correctly', () => {

    expect(component.generatedReports).toBe(6);

  });


  it('should calculate total procurement requests correctly', () => {

    expect(component.totalRequests).toBe(231);

  });


  it('should calculate total purchase orders correctly', () => {

    expect(component.totalPurchaseOrders).toBe(173);

  });


  it('should filter reports by search text', () => {

    component.searchText = 'Vendor';

    expect(component.filteredReports.length).toBe(1);

    expect(
      component.filteredReports[0].reportType
    ).toBe('Vendor');

  });


  it('should filter reports by report type', () => {

    component.selectedReportType = 'Invoice';

    expect(component.filteredReports.length).toBe(1);

    expect(
      component.filteredReports[0].reportType
    ).toBe('Invoice');

  });


  it('should filter reports by status', () => {

    component.selectedStatus = 'Pending';

    expect(component.filteredReports.length).toBe(1);

    expect(
      component.filteredReports[0].status
    ).toBe('Pending');

  });


  it('should clear all filters', () => {

    component.searchText = 'Vendor';
    component.selectedReportType = 'Invoice';
    component.selectedStatus = 'Pending';

    component.clearFilters();

    expect(component.searchText).toBe('');
    expect(component.selectedReportType).toBe('All');
    expect(component.selectedStatus).toBe('All');

  });


  it('should open view modal', () => {

    const report = component.reports[0];

    component.viewReport(report);

    expect(component.selectedReport).toEqual(report);
    expect(component.showViewModal).toBe(true);

  });


  it('should close view modal', () => {

    const report = component.reports[0];

    component.viewReport(report);
    component.closeViewModal();

    expect(component.selectedReport).toBeNull();
    expect(component.showViewModal).toBe(false);

  });


  it('should return correct status class', () => {

    expect(
      component.getStatusClass('Generated')
    ).toBe('status-generated');

    expect(
      component.getStatusClass('Processing')
    ).toBe('status-processing');

    expect(
      component.getStatusClass('Pending')
    ).toBe('status-pending');

  });


  it('should return correct report type class', () => {

    expect(
      component.getReportTypeClass('Summary')
    ).toBe('type-summary');

    expect(
      component.getReportTypeClass('Vendor')
    ).toBe('type-vendor');

    expect(
      component.getReportTypeClass('Purchase Order')
    ).toBe('type-purchase-order');

    expect(
      component.getReportTypeClass('Invoice')
    ).toBe('type-invoice');

    expect(
      component.getReportTypeClass('Category')
    ).toBe('type-category');

    expect(
      component.getReportTypeClass('Project')
    ).toBe('type-project');

    expect(
      component.getReportTypeClass('Pending')
    ).toBe('type-pending');

  });


  it('should format amount correctly', () => {

    expect(
      component.formatAmount(100000)
    ).toContain('₹');

  });

});