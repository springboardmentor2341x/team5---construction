import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmPayrollMonitoringComponent } from './wm-payroll-monitoring';

describe('WmPayrollMonitoringComponent', () => {

  let component: WmPayrollMonitoringComponent;
  let fixture: ComponentFixture<WmPayrollMonitoringComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [WmPayrollMonitoringComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      WmPayrollMonitoringComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  // =====================================================
  // COMPONENT
  // =====================================================

  it('should create', () => {

    expect(component).toBeTruthy();

  });


  // =====================================================
  // PAYROLL RECORDS
  // =====================================================

  it('should contain payroll records', () => {

    expect(component.payrollRecords.length)
      .toBeGreaterThan(0);

  });


  // =====================================================
  // TOTAL WORKERS
  // =====================================================

  it('should calculate total workers', () => {

    expect(component.totalWorkers)
      .toBe(component.payrollRecords.length);

  });


  // =====================================================
  // TOTAL PAYROLL
  // =====================================================

  it('should calculate total payroll', () => {

    const expectedTotal =
      component.payrollRecords.reduce(
        (total, record) => total + record.netPay,
        0
      );

    expect(component.totalPayroll)
      .toBe(expectedTotal);

  });


  // =====================================================
  // PROCESSED PAYROLL
  // =====================================================

  it('should calculate processed payroll', () => {

    const expectedProcessed =
      component.payrollRecords.filter(
        record => record.status === 'Paid'
      ).length;

    expect(component.processedPayroll)
      .toBe(expectedProcessed);

  });


  // =====================================================
  // PENDING PAYROLL
  // =====================================================

  it('should calculate pending payroll', () => {

    const expectedPending =
      component.payrollRecords.filter(
        record =>
          record.status === 'Pending' ||
          record.status === 'On Hold'
      ).length;

    expect(component.pendingPayroll)
      .toBe(expectedPending);

  });


  // =====================================================
  // NET PAY
  // =====================================================

  it('should calculate net pay correctly', () => {

    component.basicPay = 30000;
    component.overtimePay = 5000;
    component.deductions = 2000;

    expect(component.netPay)
      .toBe(33000);

  });


  // =====================================================
  // STATUS CLASS
  // =====================================================

  it('should return correct status classes', () => {

    expect(component.getStatusClass('Paid'))
      .toBe('status-paid');

    expect(component.getStatusClass('Processing'))
      .toBe('status-processing');

    expect(component.getStatusClass('Pending'))
      .toBe('status-pending');

    expect(component.getStatusClass('On Hold'))
      .toBe('status-on-hold');

  });


  // =====================================================
  // CLEAR FORM
  // =====================================================

  it('should clear the payroll form', () => {

    component.selectedProject =
      'Airport Expansion';

    component.selectedContractor =
      'ABC Construction';

    component.selectedCategory =
      'Skilled Worker';

    component.workerCount = 10;
    component.basicPay = 30000;
    component.overtimeHours = 5;
    component.overtimePay = 2000;
    component.deductions = 1000;

    component.selectedStatus = 'Paid';

    component.clearForm();


    expect(component.selectedProject)
      .toBe('');

    expect(component.selectedContractor)
      .toBe('');

    expect(component.selectedCategory)
      .toBe('');

    expect(component.workerCount)
      .toBe(1);

    expect(component.basicPay)
      .toBe(0);

    expect(component.overtimeHours)
      .toBe(0);

    expect(component.overtimePay)
      .toBe(0);

    expect(component.deductions)
      .toBe(0);

    expect(component.selectedStatus)
      .toBe('Pending');

  });


  // =====================================================
  // PROCESS PAYMENT
  // =====================================================

  it('should process a payroll record', () => {

    const record =
      component.payrollRecords.find(
        item => item.status !== 'Paid'
      );

    expect(record).toBeDefined();

    if (record) {

      component.processPayment(record);

      expect(record.status)
        .toBe('Paid');

    }

  });


  // =====================================================
  // FILTER VALUES
  // =====================================================

  it('should allow payroll filter values', () => {

    component.selectedProject =
      'Chennai Metro Construction';

    component.selectedCategory =
      'Skilled Worker';

    component.selectedStatus =
      'Pending';


    expect(component.selectedProject)
      .toBe('Chennai Metro Construction');

    expect(component.selectedCategory)
      .toBe('Skilled Worker');

    expect(component.selectedStatus)
      .toBe('Pending');

  });

});