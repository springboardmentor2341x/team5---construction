import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bm-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bm-dashboard.html',
  styleUrl: './bm-dashboard.css'
})
export class BmDashboardComponent {

  totalBudget = 5000000;
  estimatedCost = 4750000;
  amountSpent = 3250000;

  get remainingBudget(): number {
    return this.totalBudget - this.amountSpent;
  }

  get utilization(): number {
    if (this.totalBudget === 0) {
      return 0;
    }

    return (this.amountSpent / this.totalBudget) * 100;
  }

  categories = [
    {
      name: 'Labor Cost',
      budget: 1000000,
      estimated: 900000,
      actual: 700000
    },
    {
      name: 'Material Cost',
      budget: 2000000,
      estimated: 1900000,
      actual: 1400000
    },
    {
      name: 'Equipment Cost',
      budget: 800000,
      estimated: 700000,
      actual: 500000
    },
    {
      name: 'Transportation Cost',
      budget: 400000,
      estimated: 400000,
      actual: 300000
    },
    {
      name: 'Maintenance Cost',
      budget: 300000,
      estimated: 250000,
      actual: 200000
    },
    {
      name: 'Administrative Cost',
      budget: 500000,
      estimated: 400000,
      actual: 150000
    }
  ];

  formatCurrency(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }

  getRemaining(budget: number, actual: number): number {
    return budget - actual;
  }

  getPercentage(actual: number, budget: number): number {
    if (budget === 0) {
      return 0;
    }

    return Math.round((actual / budget) * 100);
  }
}