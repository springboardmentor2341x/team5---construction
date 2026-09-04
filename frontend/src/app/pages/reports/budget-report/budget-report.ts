import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-report.html',
  styleUrl: './budget-report.css'
})
export class BudgetReportComponent {

  selectedProject = 'Chennai Commercial Complex';
  selectedPeriod = 'Current Month';
  selectedStatus = 'All Status';

  plannedBudget = 50000000;
  estimatedCost = 52000000;
  actualExpenses = 34000000;
  utilizedAmount = 34000000;
  remainingBudget = 16000000;
  utilizationPercentage = 68;

  budgetRecords = [
    {
      id: 'BDG-001',
      category: 'Materials',
      planned: 20000000,
      estimated: 21000000,
      actual: 14500000,
      utilized: 14500000,
      remaining: 5500000,
      status: 'On Track'
    },
    {
      id: 'BDG-002',
      category: 'Workforce',
      planned: 12000000,
      estimated: 12500000,
      actual: 8200000,
      utilized: 8200000,
      remaining: 3800000,
      status: 'On Track'
    },
    {
      id: 'BDG-003',
      category: 'Equipment',
      planned: 8000000,
      estimated: 8500000,
      actual: 5600000,
      utilized: 5600000,
      remaining: 2400000,
      status: 'On Track'
    },
    {
      id: 'BDG-004',
      category: 'Transportation',
      planned: 5000000,
      estimated: 5200000,
      actual: 3200000,
      utilized: 3200000,
      remaining: 1800000,
      status: 'On Track'
    },
    {
      id: 'BDG-005',
      category: 'Other Expenses',
      planned: 5000000,
      estimated: 4800000,
      actual: 2500000,
      utilized: 2500000,
      remaining: 2500000,
      status: 'Within Budget'
    }
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reports/dashboard']);
  }

  applyFilters(): void {
    alert('✓ Budget report filters applied successfully!');
  }

  downloadPdf(): void {
    alert('✓ Budget Report PDF downloaded successfully!');
  }

  exportExcel(): void {
    alert('✓ Budget Report Excel file exported successfully!');
  }

  viewReport(): void {
    this.router.navigate(['/reports/preview']);
  }
}