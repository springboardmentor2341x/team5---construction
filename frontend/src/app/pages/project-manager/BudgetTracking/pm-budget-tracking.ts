import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-budget-tracking',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pm-budget-tracking.html',
  styleUrls: ['./pm-budget-tracking.css']
})
export class BudgetTrackingComponent {

  constructor(private router: Router) {}

  addExpense(): void {
    alert('Add Expense clicked');
  }

  searchExpenses(): void {
    alert('Searching expenses...');
  }

  viewExpense(id: string): void {
    alert('Viewing Expense: ' + id);
  }

  editExpense(id: string): void {
    alert('Editing Expense: ' + id);
  }

  exportPDF(): void {
    alert('Exporting Budget Report as PDF...');
  }

  exportExcel(): void {
    alert('Exporting Budget Report as Excel...');
  }

  printReport(): void {
    window.print();
  }

  goToDashboard(): void {
    this.router.navigate(['/project-manager/dashboard']);
  }

  goToProcurementRequests(): void {
    this.router.navigate(['/project-manager/procurement-request']);
  }

}
