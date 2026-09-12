import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wm-workforce-categories',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-workforce-categories.html',
  styleUrl: './wm-workforce-categories.css'
})
export class WmWorkforceCategoriesComponent {

  // =====================================================
  // FORM FIELDS
  // =====================================================

  categoryName = '';
  workforceType = '';
  skillLevel = '';
  workerCount = 0;
  dailyWage = 0;
  overtimeRate = 0;
  categoryStatus = 'Active';
  description = '';

  // =====================================================
  // SUMMARY
  // =====================================================

  get totalCategories(): number {
    return this.categories.length;
  }

  get totalWorkers(): number {
    return this.categories.reduce(
      (total, category) => total + category.workers,
      0
    );
  }

  get skilledWorkers(): number {
    return this.categories
      .filter(category =>
        category.type === 'Skilled'
      )
      .reduce(
        (total, category) => total + category.workers,
        0
      );
  }

  get activeCategories(): number {
    return this.categories.filter(
      category => category.status === 'Active'
    ).length;
  }

  // =====================================================
  // WORKFORCE CATEGORIES
  // =====================================================

  categories = [
    {
      id: 'WC-001',
      name: 'Masonry Workers',
      type: 'Skilled',
      skillLevel: 'Advanced',
      workers: 42,
      dailyWage: 850,
      overtimeRate: 120,
      status: 'Active'
    },

    {
      id: 'WC-002',
      name: 'Carpentry Workers',
      type: 'Skilled',
      skillLevel: 'Advanced',
      workers: 28,
      dailyWage: 900,
      overtimeRate: 130,
      status: 'Active'
    },

    {
      id: 'WC-003',
      name: 'Electrical Workers',
      type: 'Technical',
      skillLevel: 'Expert',
      workers: 18,
      dailyWage: 1000,
      overtimeRate: 150,
      status: 'Active'
    },

    {
      id: 'WC-004',
      name: 'Plumbing Workers',
      type: 'Skilled',
      skillLevel: 'Intermediate',
      workers: 22,
      dailyWage: 800,
      overtimeRate: 115,
      status: 'Active'
    },

    {
      id: 'WC-005',
      name: 'General Helpers',
      type: 'Unskilled',
      skillLevel: 'Beginner',
      workers: 55,
      dailyWage: 550,
      overtimeRate: 80,
      status: 'Active'
    },

    {
      id: 'WC-006',
      name: 'Site Supervisors',
      type: 'Supervisory',
      skillLevel: 'Expert',
      workers: 12,
      dailyWage: 1400,
      overtimeRate: 200,
      status: 'Active'
    },

    {
      id: 'WC-007',
      name: 'Equipment Operators',
      type: 'Technical',
      skillLevel: 'Advanced',
      workers: 16,
      dailyWage: 1100,
      overtimeRate: 160,
      status: 'Active'
    },

    {
      id: 'WC-008',
      name: 'Painting Workers',
      type: 'Semi-Skilled',
      skillLevel: 'Intermediate',
      workers: 20,
      dailyWage: 700,
      overtimeRate: 100,
      status: 'Inactive'
    }
  ];

  // =====================================================
  // FORM ACTIONS
  // =====================================================

  openAddCategory(): void {

    this.clearForm();

    alert(
      'Add Workforce Category form is ready.'
    );

  }

  saveCategory(): void {

    if (
      !this.categoryName ||
      !this.workforceType
    ) {

      alert(
        'Please enter Category Name and Workforce Type.'
      );

      return;
    }

    const newId =
      `WC-${String(this.categories.length + 1).padStart(3, '0')}`;

    this.categories.push({
      id: newId,
      name: this.categoryName,
      type: this.workforceType,
      skillLevel: this.skillLevel || 'Beginner',
      workers: Number(this.workerCount) || 0,
      dailyWage: Number(this.dailyWage) || 0,
      overtimeRate: Number(this.overtimeRate) || 0,
      status: this.categoryStatus
    });

    alert(
      `${this.categoryName} category saved successfully.`
    );

    this.clearForm();
  }

  clearForm(): void {

    this.categoryName = '';
    this.workforceType = '';
    this.skillLevel = '';
    this.workerCount = 0;
    this.dailyWage = 0;
    this.overtimeRate = 0;
    this.categoryStatus = 'Active';
    this.description = '';

  }

  // =====================================================
  // FILTER
  // =====================================================

  filterCategories(): void {

    alert(
      'Workforce category filter is ready.'
    );

  }

  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(status: string): string {

    switch (status.toLowerCase()) {

      case 'active':
        return 'status-active';

      case 'inactive':
        return 'status-inactive';

      default:
        return '';

    }

  }

  // =====================================================
  // VIEW
  // =====================================================

  viewCategory(category: any): void {

    alert(
      `Workforce Category Details\n\n` +
      `Category ID: ${category.id}\n` +
      `Category: ${category.name}\n` +
      `Workforce Type: ${category.type}\n` +
      `Skill Level: ${category.skillLevel}\n` +
      `Workers: ${category.workers}\n` +
      `Daily Wage: ₹${category.dailyWage}\n` +
      `Overtime Rate: ₹${category.overtimeRate}\n` +
      `Status: ${category.status}`
    );

  }

  // =====================================================
  // EDIT
  // =====================================================

  editCategory(category: any): void {

    this.categoryName = category.name;
    this.workforceType = category.type;
    this.skillLevel = category.skillLevel;
    this.workerCount = category.workers;
    this.dailyWage = category.dailyWage;
    this.overtimeRate = category.overtimeRate;
    this.categoryStatus = category.status;

    alert(
      `Editing ${category.name}.`
    );

  }

  // =====================================================
  // DELETE
  // =====================================================

  deleteCategory(category: any): void {

    const confirmed = confirm(
      `Are you sure you want to delete ${category.name}?`
    );

    if (!confirmed) {
      return;
    }

    this.categories =
      this.categories.filter(
        item => item.id !== category.id
      );

    alert(
      `${category.name} has been deleted.`
    );

  }

}