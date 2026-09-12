import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
  RouterLink,
  DecimalPipe,
  FormsModule
],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory {

  searchTerm = '';
  selectedCategory = 'All';
selectedStatus = 'All';
showFilters = false;
toggleFilters() {
  this.showFilters = !this.showFilters;
}
  selectedItem: any = null;

showViewPopup = false;
showEditPopup = false;
showDeletePopup = false;
showSuccessPopup = false;

  inventoryItems = [
    {
      id: 'MAT-001',
      name: 'Cement',
      category: 'Cement',
      unit: 'Bags',
      available: 700,
      allocated: 200,
      consumed: 100,
      minimum: 500,
      status: 'Available'
    },
    {
      id: 'MAT-002',
      name: 'Steel',
      category: 'Steel',
      unit: 'Tons',
      available: 120,
      allocated: 40,
      consumed: 20,
      minimum: 50,
      status: 'Available'
    },
    {
      id: 'MAT-003',
      name: 'Bricks',
      category: 'Masonry',
      unit: 'Units',
      available: 8000,
      allocated: 3000,
      consumed: 1500,
      minimum: 3000,
      status: 'Available'
    },
    {
      id: 'MAT-004',
      name: 'Sand',
      category: 'Aggregate',
      unit: 'Tons',
      available: 250,
      allocated: 180,
      consumed: 60,
      minimum: 500,
      status: 'Low Stock'
    },
    {
      id: 'MAT-005',
      name: 'Electrical Cable',
      category: 'Electrical',
      unit: 'Meters',
      available: 1200,
      allocated: 450,
      consumed: 300,
      minimum: 500,
      status: 'Available'
    },
    {
      id: 'MAT-006',
      name: 'Plumbing Pipes',
      category: 'Plumbing',
      unit: 'Units',
      available: 80,
      allocated: 120,
      consumed: 50,
      minimum: 200,
      status: 'Low Stock'
    }
  ];

  get totalMaterials(): number {
    return this.inventoryItems.length;
  }

  get availableStock(): number {
    return this.inventoryItems.reduce(
      (total, item) => total + item.available,
      0
    );
  }

  get lowStockCount(): number {
    return this.inventoryItems.filter(
      item => item.status === 'Low Stock'
    ).length;
  }

  get filteredItems() {

  return this.inventoryItems.filter(item => {

    const search = this.searchTerm.toLowerCase().trim();

    const matchesSearch =
      !search ||
      item.id.toLowerCase().includes(search) ||
      item.name.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search);

    const matchesCategory =
      this.selectedCategory === 'All' ||
      item.category === this.selectedCategory;

    const matchesStatus =
      this.selectedStatus === 'All' ||
      item.status === this.selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;

  });

}


// VIEW
viewItem(item: any) {
  this.selectedItem = item;
  this.showViewPopup = true;
}

closeViewPopup() {
  this.showViewPopup = false;
  this.selectedItem = null;
}


// EDIT
editItem(item: any) {
  this.selectedItem = { ...item };
  this.showEditPopup = true;
}

closeEditPopup() {
  this.showEditPopup = false;
  this.selectedItem = null;
}

saveEdit() {
  const index = this.inventoryItems.findIndex(
    item => item.id === this.selectedItem.id
  );

  if (index !== -1) {
    this.inventoryItems[index] = {
      ...this.selectedItem
    };
  }

  this.showEditPopup = false;
  this.showSuccessPopup = true;
}


// DELETE
deleteItem(item: any) {
  this.selectedItem = item;
  this.showDeletePopup = true;
}

closeDeletePopup() {
  this.showDeletePopup = false;
  this.selectedItem = null;
}

confirmDelete() {
  this.inventoryItems = this.inventoryItems.filter(
    item => item.id !== this.selectedItem.id
  );

  this.showDeletePopup = false;
  this.showSuccessPopup = true;
}


// SUCCESS
closeSuccessPopup() {
  this.showSuccessPopup = false;
  this.selectedItem = null;
}
}