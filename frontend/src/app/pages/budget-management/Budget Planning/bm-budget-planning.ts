import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bm-budget-planning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bm-budget-planning.html',
  styleUrl: './bm-budget-planning.css'
})
export class BmBudgetPlanningComponent {

  selectedProject = 'Chennai Commercial Complex';

  totalBudget = 5000000;

  categories = [
    {
      name: 'Labor Cost',
      allocated: 1000000,
      description: 'Worker wages and workforce expenses'
    },
    {
      name: 'Material Cost',
      allocated: 2000000,
      description: 'Construction materials and inventory'
    },
    {
      name: 'Equipment Cost',
      allocated: 800000,
      description: 'Machinery and equipment usage'
    },
    {
      name: 'Transportation Cost',
      allocated: 400000,
      description: 'Transportation and logistics'
    },
    {
      name: 'Maintenance Cost',
      allocated: 300000,
      description: 'Equipment and site maintenance'
    },
    {
      name: 'Administrative Cost',
      allocated: 500000,
      description: 'Administrative and project expenses'
    }
  ];

  get totalAllocated(): number {
    return this.categories.reduce(
      (total, category) => total + Number(category.allocated || 0),
      0
    );
  }

  get remainingBudget(): number {
    return this.totalBudget - this.totalAllocated;
  }

  get allocationPercentage(): number {
    if (this.totalBudget === 0) {
      return 0;
    }

    return Math.round(
      (this.totalAllocated / this.totalBudget) * 100
    );
  }

  formatCurrency(value: number): string {
    return '₹' + Number(value || 0).toLocaleString('en-IN');
  }

  addCategory(): void {
    this.categories.push({
      name: 'New Cost Category',
      allocated: 0,
      description: 'Enter category description'
    });
  }

  removeCategory(index: number): void {
    this.categories.splice(index, 1);
  }

  saveBudget(): void {
    console.log('Budget saved:', {
      project: this.selectedProject,
      totalBudget: this.totalBudget,
      categories: this.categories
    });

    alert('Budget plan saved successfully.');
  }
}