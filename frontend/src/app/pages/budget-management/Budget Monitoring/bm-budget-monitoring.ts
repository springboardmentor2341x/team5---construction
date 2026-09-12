import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bm-budget-monitoring',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bm-budget-monitoring.html',
  styleUrl: './bm-budget-monitoring.css'
})
export class BmBudgetMonitoringComponent {

  selectedProject = 'Chennai Commercial Complex';

  totalPlanned = 5000000;
  estimatedCost = 4750000;
  actualSpent = 3250000;

  categories = [
    {
      name: 'Labor Cost',
      planned: 1000000,
      estimated: 900000,
      actual: 700000
    },
    {
      name: 'Material Cost',
      planned: 2000000,
      estimated: 1900000,
      actual: 1400000
    },
    {
      name: 'Equipment Cost',
      planned: 800000,
      estimated: 700000,
      actual: 500000
    },
    {
      name: 'Transportation Cost',
      planned: 400000,
      estimated: 400000,
      actual: 300000
    },
    {
      name: 'Maintenance Cost',
      planned: 300000,
      estimated: 250000,
      actual: 200000
    },
    {
      name: 'Administrative Cost',
      planned: 500000,
      estimated: 400000,
      actual: 150000
    }
  ];

  get remainingBudget(): number {
    return this.totalPlanned - this.actualSpent;
  }

  get utilization(): number {
    if (this.totalPlanned === 0) {
      return 0;
    }

    return Math.round(
      (this.actualSpent / this.totalPlanned) * 100
    );
  }

  get estimatedUtilization(): number {
    if (this.totalPlanned === 0) {
      return 0;
    }

    return Math.round(
      (this.estimatedCost / this.totalPlanned) * 100
    );
  }

  get variance(): number {
    return this.totalPlanned - this.estimatedCost;
  }

  formatCurrency(value: number): string {
    return '₹' + Number(value || 0).toLocaleString('en-IN');
  }

  getCategoryUtilization(actual: number, planned: number): number {
    if (planned === 0) {
      return 0;
    }

    return Math.round((actual / planned) * 100);
  }

  getCategoryRemaining(planned: number, actual: number): number {
    return planned - actual;
  }
}