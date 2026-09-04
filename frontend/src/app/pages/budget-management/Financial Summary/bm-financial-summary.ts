import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bm-financial-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bm-financial-summary.html',
  styleUrl: './bm-financial-summary.css'
})
export class BmFinancialSummaryComponent {

  // =========================
  // PROJECT SELECTION
  // =========================

  selectedProject = 'Chennai Commercial Complex';

  projects = [
    'Chennai Commercial Complex',
    'Residential Apartment Project',
    'IT Park Development',
    'Industrial Warehouse Project'
  ];


  // =========================
  // REPORTING PERIOD
  // =========================

  reportPeriod = 'August 2026';

  periods = [
    'June 2026',
    'July 2026',
    'August 2026',
    'September 2026'
  ];


  // =========================
  // FINANCIAL DATA
  // =========================

  // Sample UI data.
  // These values should later come from the database/API.

  totalPlanned = 5000000;

  totalEstimated = 4750000;

  totalActual = 3250000;


  // =========================
  // COST CATEGORY DATA
  // =========================

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


  // =========================
  // REMAINING BUDGET
  // =========================

  get remainingBudget(): number {

    return this.totalPlanned - this.totalActual;

  }


  // =========================
  // BUDGET UTILIZATION
  // =========================

  get utilization(): number {

    if (this.totalPlanned === 0) {

      return 0;

    }

    return Math.round(
      (this.totalActual / this.totalPlanned) * 100
    );

  }


  // =========================
  // ESTIMATED UTILIZATION
  // =========================

  get estimatedUtilization(): number {

    if (this.totalPlanned === 0) {

      return 0;

    }

    return Math.round(
      (this.totalEstimated / this.totalPlanned) * 100
    );

  }


  // =========================
  // BUDGET VARIANCE
  // =========================

  get budgetVariance(): number {

    return this.totalPlanned - this.totalEstimated;

  }


  // =========================
  // ACTUAL VS ESTIMATED
  // =========================

  get actualVariance(): number {

    return this.totalEstimated - this.totalActual;

  }


  // =========================
  // FINANCIAL STATUS
  // =========================

  get financialStatus(): string {

    if (this.utilization >= 90) {

      return 'High Utilization';

    }

    if (this.utilization >= 75) {

      return 'Moderate Utilization';

    }

    return 'Within Budget';

  }


  // =========================
  // STATUS CSS CLASS
  // =========================

  get financialStatusClass(): string {

    if (this.utilization >= 90) {

      return 'danger';

    }

    if (this.utilization >= 75) {

      return 'warning';

    }

    return 'safe';

  }


  // =========================
  // CATEGORY REMAINING
  // =========================

  getRemaining(
    planned: number,
    actual: number
  ): number {

    return planned - actual;

  }


  // =========================
  // CATEGORY UTILIZATION
  // =========================

  getUtilization(
    actual: number,
    planned: number
  ): number {

    if (planned === 0) {

      return 0;

    }

    return Math.round(
      (actual / planned) * 100
    );

  }


  // =========================
  // CATEGORY VARIANCE
  // =========================

  getVariance(
    estimated: number,
    actual: number
  ): number {

    return estimated - actual;

  }


  // =========================
  // CURRENCY FORMAT
  // =========================

  formatCurrency(value: number): string {

    return '₹' +
      Number(value || 0).toLocaleString('en-IN');

  }


  // =========================
  // REFRESH SUMMARY
  // =========================

  refreshSummary(): void {

    console.log(
      'Financial summary refreshed:',
      {
        project: this.selectedProject,
        period: this.reportPeriod
      }
    );

  }


  // =========================
  // GENERATE FINANCIAL REPORT
  // =========================

  generateFinancialReport(): void {

    console.log(
      'Financial Report:',
      {
        project: this.selectedProject,
        period: this.reportPeriod,
        totalPlanned: this.totalPlanned,
        totalEstimated: this.totalEstimated,
        totalActual: this.totalActual,
        remainingBudget: this.remainingBudget,
        utilization: this.utilization,
        categories: this.categories
      }
    );

    alert(
      'Financial report generated successfully for ' +
      this.selectedProject
    );

  }

}