import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProcurementCategory {
  id: string;
  categoryName: string;
  description: string;
  itemCount: number;
  activeRequests: number;
  totalPurchased: number;
  status: 'Active' | 'Inactive';
  lastUpdated: string;
}

@Component({
  selector: 'app-pr-procurement-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pr-procurement-categories.html',
  styleUrls: ['./pr-procurement-categories.css']
})
export class PrProcurementCategoriesComponent {

  searchText = '';
  selectedStatus = 'All';

  showAddModal = false;
  showViewModal = false;
  showEditModal = false;

  selectedCategory: ProcurementCategory | null = null;

  newCategory: ProcurementCategory = this.createEmptyCategory();

  categories: ProcurementCategory[] = [

    {
      id: 'CAT-001',
      categoryName: 'Raw Materials',
      description:
        'Construction materials such as cement, steel, sand, bricks and aggregates.',
      itemCount: 42,
      activeRequests: 8,
      totalPurchased: 2850000,
      status: 'Active',
      lastUpdated: '2026-08-25'
    },

    {
      id: 'CAT-002',
      categoryName: 'Equipment',
      description:
        'Construction equipment and tools required for project activities.',
      itemCount: 24,
      activeRequests: 5,
      totalPurchased: 1250000,
      status: 'Active',
      lastUpdated: '2026-08-24'
    },

    {
      id: 'CAT-003',
      categoryName: 'Machinery',
      description:
        'Heavy machinery and mechanical equipment used at construction sites.',
      itemCount: 18,
      activeRequests: 4,
      totalPurchased: 3850000,
      status: 'Active',
      lastUpdated: '2026-08-22'
    },

    {
      id: 'CAT-004',
      categoryName: 'Safety Equipment',
      description:
        'Personal protective equipment and safety items for workers.',
      itemCount: 31,
      activeRequests: 6,
      totalPurchased: 685000,
      status: 'Active',
      lastUpdated: '2026-08-20'
    },

    {
      id: 'CAT-005',
      categoryName: 'Office Supplies',
      description:
        'Stationery, printing materials and other office requirements.',
      itemCount: 15,
      activeRequests: 2,
      totalPurchased: 185000,
      status: 'Active',
      lastUpdated: '2026-08-18'
    }

  ];


  // =====================================================
  // FILTERED CATEGORIES
  // =====================================================

  get filteredCategories(): ProcurementCategory[] {

    const search = this.searchText.trim().toLowerCase();

    return this.categories.filter(category => {

      const matchesSearch =
        !search ||
        category.id.toLowerCase().includes(search) ||
        category.categoryName.toLowerCase().includes(search) ||
        category.description.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        category.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }


  // =====================================================
  // SUMMARY
  // =====================================================

  get totalCategories(): number {
    return this.categories.length;
  }

  get activeCategories(): number {
    return this.categories.filter(
      category => category.status === 'Active'
    ).length;
  }

  get inactiveCategories(): number {
    return this.categories.filter(
      category => category.status === 'Inactive'
    ).length;
  }

  get totalItems(): number {
    return this.categories.reduce(
      (total, category) => total + category.itemCount,
      0
    );
  }

  get totalActiveRequests(): number {
    return this.categories.reduce(
      (total, category) => total + category.activeRequests,
      0
    );
  }

  get totalPurchasedAmount(): number {
    return this.categories.reduce(
      (total, category) => total + category.totalPurchased,
      0
    );
  }


  // =====================================================
  // ADD CATEGORY
  // =====================================================

  openAddModal(): void {
    this.newCategory = this.createEmptyCategory();
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addCategory(): void {

    if (
      !this.newCategory.categoryName.trim() ||
      !this.newCategory.description.trim()
    ) {
      return;
    }

    const newId =
      `CAT-${String(this.categories.length + 1).padStart(3, '0')}`;

    const category: ProcurementCategory = {
      ...this.newCategory,
      id: newId,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    this.categories = [
      category,
      ...this.categories
    ];

    this.closeAddModal();
  }


  // =====================================================
  // VIEW CATEGORY
  // =====================================================

  viewCategory(category: ProcurementCategory): void {

    this.selectedCategory = category;

    this.showViewModal = true;
  }

  closeViewModal(): void {

    this.showViewModal = false;

    this.selectedCategory = null;
  }


  // =====================================================
  // EDIT CATEGORY
  // =====================================================

  editCategory(category: ProcurementCategory): void {

    this.selectedCategory = {
      ...category
    };

    this.showEditModal = true;
  }

  closeEditModal(): void {

    this.showEditModal = false;

    this.selectedCategory = null;
  }

  updateCategory(): void {

    if (!this.selectedCategory) {
      return;
    }

    if (
      !this.selectedCategory.categoryName.trim() ||
      !this.selectedCategory.description.trim()
    ) {
      return;
    }

    const index = this.categories.findIndex(
      category =>
        category.id === this.selectedCategory!.id
    );

    if (index === -1) {
      return;
    }

    const updatedCategories = [
      ...this.categories
    ];

    updatedCategories[index] = {
      ...this.selectedCategory,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    this.categories = updatedCategories;

    this.closeEditModal();
  }


  // =====================================================
  // DELETE CATEGORY
  // =====================================================

  deleteCategory(category: ProcurementCategory): void {

    if (category.activeRequests > 0) {

      window.alert(
        `Cannot delete ${category.categoryName} because it has ${category.activeRequests} active procurement request(s).`
      );

      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete ${category.categoryName}?`
    );

    if (!confirmed) {
      return;
    }

    this.categories = this.categories.filter(
      item => item.id !== category.id
    );

    if (
      this.selectedCategory &&
      this.selectedCategory.id === category.id
    ) {
      this.selectedCategory = null;
      this.showViewModal = false;
      this.showEditModal = false;
    }
  }


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(status: string): string {

    switch (status) {

      case 'Active':
        return 'status-active';

      case 'Inactive':
        return 'status-inactive';

      default:
        return '';
    }
  }


  // =====================================================
  // AMOUNT FORMAT
  // =====================================================

  formatAmount(amount: number): string {

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }


  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  clearFilters(): void {

    this.searchText = '';
    this.selectedStatus = 'All';
  }


  // =====================================================
  // EMPTY CATEGORY
  // =====================================================

  private createEmptyCategory(): ProcurementCategory {

    return {
      id: '',
      categoryName: '',
      description: '',
      itemCount: 0,
      activeRequests: 0,
      totalPurchased: 0,
      status: 'Active',
      lastUpdated: ''
    };
  }

}