import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bm-expense-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bm-expense-management.html',
  styleUrl: './bm-expense-management.css'
})
export class BmExpenseManagementComponent {

  selectedProject = 'Chennai Commercial Complex';

  expenses = [
    {
      expenseId: 'EXP-001',
      date: '2026-08-05',
      description: 'Worker wages - August',
      category: 'Labor Cost',
      amount: 700000,
      sourceModule: 'Workforce Management'
    },
    {
      expenseId: 'EXP-002',
      date: '2026-08-08',
      description: 'Cement and steel purchase',
      category: 'Material Cost',
      amount: 1400000,
      sourceModule: 'Material & Inventory'
    },
    {
      expenseId: 'EXP-003',
      date: '2026-08-12',
      description: 'Excavator usage',
      category: 'Equipment Cost',
      amount: 500000,
      sourceModule: 'Resource Management'
    },
    {
      expenseId: 'EXP-004',
      date: '2026-08-15',
      description: 'Material transportation',
      category: 'Transportation Cost',
      amount: 300000,
      sourceModule: 'Procurement'
    },
    {
      expenseId: 'EXP-005',
      date: '2026-08-18',
      description: 'Equipment maintenance',
      category: 'Maintenance Cost',
      amount: 200000,
      sourceModule: 'Resource Management'
    },
    {
      expenseId: 'EXP-006',
      date: '2026-08-20',
      description: 'Administrative expenses',
      category: 'Administrative Cost',
      amount: 150000,
      sourceModule: 'Project Management'
    }
  ];

  newExpense = {
    date: '',
    description: '',
    category: 'Labor Cost',
    amount: 0,
    sourceModule: 'Manual Entry'
  };

  get totalExpenses(): number {
    return this.expenses.reduce(
      (total, expense) => total + Number(expense.amount || 0),
      0
    );
  }

  get expenseCount(): number {
    return this.expenses.length;
  }

  formatCurrency(value: number): string {
    return '₹' + Number(value || 0).toLocaleString('en-IN');
  }

  addExpense(): void {

    if (
      !this.newExpense.date ||
      !this.newExpense.description ||
      Number(this.newExpense.amount) <= 0
    ) {
      alert('Please enter date, description and a valid amount.');
      return;
    }

    const nextNumber = this.expenses.length + 1;

    this.expenses.push({
      expenseId: `EXP-${String(nextNumber).padStart(3, '0')}`,
      date: this.newExpense.date,
      description: this.newExpense.description,
      category: this.newExpense.category,
      amount: Number(this.newExpense.amount),
      sourceModule: this.newExpense.sourceModule
    });

    this.newExpense = {
      date: '',
      description: '',
      category: 'Labor Cost',
      amount: 0,
      sourceModule: 'Manual Entry'
    };
  }

  removeExpense(index: number): void {
    this.expenses.splice(index, 1);
  }
}