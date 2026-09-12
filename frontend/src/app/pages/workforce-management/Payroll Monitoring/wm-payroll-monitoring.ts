import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wm-payroll-monitoring',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-payroll-monitoring.html',
  styleUrl: './wm-payroll-monitoring.css'
})
export class WmPayrollMonitoringComponent {

  // =====================================================
  // PAYROLL PROCESSING
  // =====================================================

  selectedProject = '';
  selectedContractor = '';
  selectedPeriod = 'August 2026';
  selectedCategory = '';

  workerCount = 1;
  basicPay = 0;
  overtimeHours = 0;
  overtimePay = 0;
  deductions = 0;

  paymentDate = '2026-08-31';

  selectedStatus = 'Pending';


  // =====================================================
  // DROPDOWN DATA
  // =====================================================

  projects: string[] = [
    'Chennai Metro Construction',
    'Green Valley Apartments',
    'Airport Expansion',
    'Highway Development'
  ];

  contractors: string[] = [
    'ABC Construction',
    'BuildRight Contractors',
    'Metro Works Ltd',
    'Prime Infrastructure'
  ];

  categories: string[] = [
    'Skilled Worker',
    'Unskilled Worker',
    'Engineer',
    'Supervisor',
    'Electrician',
    'Plumber',
    'Helper'
  ];


  // =====================================================
  // PAYROLL RECORDS
  // =====================================================

  payrollRecords = [

    {
      id: 'PR-001',
      worker: 'Rajesh Kumar',
      category: 'Skilled Worker',
      project: 'Chennai Metro Construction',
      period: 'August 2026',
      basicPay: 28000,
      overtime: 3500,
      deductions: 1500,
      netPay: 30000,
      status: 'Paid'
    },

    {
      id: 'PR-002',
      worker: 'Arun Prakash',
      category: 'Engineer',
      project: 'Green Valley Apartments',
      period: 'August 2026',
      basicPay: 42000,
      overtime: 5000,
      deductions: 2500,
      netPay: 44500,
      status: 'Processing'
    },

    {
      id: 'PR-003',
      worker: 'Suresh Babu',
      category: 'Unskilled Worker',
      project: 'Airport Expansion',
      period: 'August 2026',
      basicPay: 22000,
      overtime: 2800,
      deductions: 1000,
      netPay: 23800,
      status: 'Paid'
    },

    {
      id: 'PR-004',
      worker: 'Vijay Kumar',
      category: 'Supervisor',
      project: 'Highway Development',
      period: 'August 2026',
      basicPay: 36000,
      overtime: 4200,
      deductions: 1800,
      netPay: 38400,
      status: 'Pending'
    },

    {
      id: 'PR-005',
      worker: 'Karthik Raj',
      category: 'Skilled Worker',
      project: 'Chennai Metro Construction',
      period: 'August 2026',
      basicPay: 29000,
      overtime: 3200,
      deductions: 1400,
      netPay: 30800,
      status: 'Paid'
    },

    {
      id: 'PR-006',
      worker: 'Mohammed Irfan',
      category: 'Electrician',
      project: 'Green Valley Apartments',
      period: 'August 2026',
      basicPay: 27000,
      overtime: 3000,
      deductions: 1200,
      netPay: 28800,
      status: 'Processing'
    },

    {
      id: 'PR-007',
      worker: 'Prakash Raj',
      category: 'Plumber',
      project: 'Airport Expansion',
      period: 'August 2026',
      basicPay: 26000,
      overtime: 2500,
      deductions: 1100,
      netPay: 27400,
      status: 'Paid'
    },

    {
      id: 'PR-008',
      worker: 'Manoj Kumar',
      category: 'Helper',
      project: 'Highway Development',
      period: 'August 2026',
      basicPay: 21000,
      overtime: 1800,
      deductions: 900,
      netPay: 21900,
      status: 'On Hold'
    }

  ];


  // =====================================================
  // TOTAL PAYROLL
  // =====================================================

  get totalPayroll(): number {

    return this.payrollRecords.reduce(
      (total, record) => total + record.netPay,
      0
    );

  }


  // =====================================================
  // PROCESSED PAYROLL
  // =====================================================

  get processedPayroll(): number {

    return this.payrollRecords.filter(
      record => record.status === 'Paid'
    ).length;

  }


  // =====================================================
  // PENDING PAYROLL
  // =====================================================

  get pendingPayroll(): number {

    return this.payrollRecords.filter(
      record =>
        record.status === 'Pending' ||
        record.status === 'On Hold'
    ).length;

  }


  // =====================================================
  // TOTAL WORKERS
  // =====================================================

  get totalWorkers(): number {

    return this.payrollRecords.length;

  }


  // =====================================================
  // NET PAY CALCULATION
  // =====================================================

  get netPay(): number {

    return Math.max(
      0,
      Number(this.basicPay || 0) +
      Number(this.overtimePay || 0) -
      Number(this.deductions || 0)
    );

  }


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(status: string): string {

    switch (status.toLowerCase()) {

      case 'paid':
        return 'status-paid';

      case 'processing':
        return 'status-processing';

      case 'pending':
        return 'status-pending';

      case 'on hold':
        return 'status-on-hold';

      default:
        return '';

    }

  }


  // =====================================================
  // CALCULATE PAYROLL
  // =====================================================

  calculatePayroll(): void {

    const calculatedNetPay = this.netPay;

    alert(
      `Payroll Calculation\n\n` +
      `Basic Pay: ₹${Number(this.basicPay || 0).toLocaleString('en-IN')}\n` +
      `Overtime Pay: ₹${Number(this.overtimePay || 0).toLocaleString('en-IN')}\n` +
      `Deductions: ₹${Number(this.deductions || 0).toLocaleString('en-IN')}\n` +
      `Net Pay: ₹${calculatedNetPay.toLocaleString('en-IN')}`
    );

  }


  // =====================================================
  // PROCESS PAYROLL
  // =====================================================

  processPayroll(): void {

    alert(
      `Payroll processing started for ${this.selectedPeriod}.`
    );

  }


  // =====================================================
  // PROCESS INDIVIDUAL PAYMENT
  // =====================================================

  processPayment(record: any): void {

    const confirmed = confirm(
      `Process payment for ${record.worker}?\n\n` +
      `Net Pay: ₹${record.netPay.toLocaleString('en-IN')}`
    );

    if (confirmed) {

      record.status = 'Paid';

      alert(
        `Payment processed successfully for ${record.worker}.`
      );

    }

  }


  // =====================================================
  // FILTER PAYROLL
  // =====================================================

  filterPayroll(): void {

    alert(
      `Payroll filtered.\n\n` +
      `Project: ${this.selectedProject || 'All Projects'}\n` +
      `Period: ${this.selectedPeriod || 'All Periods'}\n` +
      `Category: ${this.selectedCategory || 'All Categories'}\n` +
      `Status: ${this.selectedStatus || 'All Statuses'}`
    );

  }


  // =====================================================
  // VIEW PAYROLL
  // =====================================================

  viewPayroll(record: any): void {

    alert(
      `Payroll Details\n\n` +
      `Payroll ID: ${record.id}\n` +
      `Worker: ${record.worker}\n` +
      `Category: ${record.category}\n` +
      `Project: ${record.project}\n` +
      `Pay Period: ${record.period}\n` +
      `Basic Pay: ₹${record.basicPay.toLocaleString('en-IN')}\n` +
      `Overtime: ₹${record.overtime.toLocaleString('en-IN')}\n` +
      `Deductions: ₹${record.deductions.toLocaleString('en-IN')}\n` +
      `Net Pay: ₹${record.netPay.toLocaleString('en-IN')}\n` +
      `Status: ${record.status}`
    );

  }


  // =====================================================
  // EDIT PAYROLL
  // =====================================================

  editPayroll(record: any): void {

    alert(
      `Edit payroll record for ${record.worker}.`
    );

  }


  // =====================================================
  // CLEAR FORM
  // =====================================================

  clearForm(): void {

    this.selectedProject = '';
    this.selectedContractor = '';
    this.selectedPeriod = 'August 2026';
    this.selectedCategory = '';

    this.workerCount = 1;
    this.basicPay = 0;
    this.overtimeHours = 0;
    this.overtimePay = 0;
    this.deductions = 0;

    this.paymentDate = '2026-08-31';
    this.selectedStatus = 'Pending';

  }

}