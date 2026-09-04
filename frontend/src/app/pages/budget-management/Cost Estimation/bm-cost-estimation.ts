import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bc-cost-estimation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bm-cost-estimation.html',
  styleUrl: './bm-cost-estimation.css'
})
export class BmCostEstimationComponent {

  selectedProject = 'Chennai Commercial Complex';

  activities = [
    {
      activity: 'Site Preparation',
      category: 'Labor Cost',
      estimated: 350000,
      actual: 300000
    },
    {
      activity: 'Foundation Work',
      category: 'Material Cost',
      estimated: 850000,
      actual: 720000
    },
    {
      activity: 'Structural Construction',
      category: 'Material Cost',
      estimated: 1100000,
      actual: 850000
    },
    {
      activity: 'Equipment Operations',
      category: 'Equipment Cost',
      estimated: 700000,
      actual: 500000
    },
    {
      activity: 'Material Transportation',
      category: 'Transportation Cost',
      estimated: 400000,
      actual: 300000
    },
    {
      activity: 'Equipment Maintenance',
      category: 'Maintenance Cost',
      estimated: 250000,
      actual: 200000
    },
    {
      activity: 'Project Administration',
      category: 'Administrative Cost',
      estimated: 400000,
      actual: 150000
    }
  ];

  get totalEstimated(): number {
    return this.activities.reduce(
      (total, item) => total + Number(item.estimated || 0),
      0
    );
  }

  get totalActual(): number {
    return this.activities.reduce(
      (total, item) => total + Number(item.actual || 0),
      0
    );
  }

  get totalVariance(): number {
    return this.totalEstimated - this.totalActual;
  }

  get estimationUtilization(): number {
    if (this.totalEstimated === 0) {
      return 0;
    }

    return Math.round(
      (this.totalActual / this.totalEstimated) * 100
    );
  }

  formatCurrency(value: number): string {
    return '₹' + Number(value || 0).toLocaleString('en-IN');
  }

  getVariance(estimated: number, actual: number): number {
    return Number(estimated || 0) - Number(actual || 0);
  }

  getPercentage(estimated: number, actual: number): number {
    if (!estimated) {
      return 0;
    }

    return Math.round((actual / estimated) * 100);
  }

  addActivity(): void {
    this.activities.push({
      activity: 'New Activity',
      category: 'Labor Cost',
      estimated: 0,
      actual: 0
    });
  }

  removeActivity(index: number): void {
    this.activities.splice(index, 1);
  }

  saveEstimation(): void {
    console.log('Cost estimation saved:', {
      project: this.selectedProject,
      activities: this.activities
    });

    alert('Cost estimation saved successfully.');
  }
}