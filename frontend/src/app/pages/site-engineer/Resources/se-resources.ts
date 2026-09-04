import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-se-resources',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './se-resources.html',
  styleUrl: './se-resources.css'
})
export class SeResources {

  searchText = '';
  selectedCategory = 'All';
  selectedStatus = 'All';

  // Modal
  showAddResourceModal = false;

  // Add Resource Form
  resource = {
    project: '',
    name: '',
    category: '',
    quantity: 0,
    unit: '',
    supplier: '',
    location: '',
    status: 'Available',
    remarks: ''
  };

  // Existing Resources
  resources = [
    {
      id: 'RES-001',
      name: 'Cement',
      category: 'Material',
      project: 'City Mall Construction',
      quantity: 250,
      unit: 'Bags',
      status: 'Available',
      lastUpdated: '29 Jul 2026'
    },
    {
      id: 'RES-002',
      name: 'Steel Rods',
      category: 'Material',
      project: 'City Mall Construction',
      quantity: 8,
      unit: 'Tons',
      status: 'Low Stock',
      lastUpdated: '29 Jul 2026'
    },
    {
      id: 'RES-003',
      name: 'Bricks',
      category: 'Material',
      project: 'Green Valley Residential Project',
      quantity: 5000,
      unit: 'Pieces',
      status: 'Available',
      lastUpdated: '28 Jul 2026'
    },
    {
      id: 'RES-004',
      name: 'Concrete Mixer',
      category: 'Tool',
      project: 'Green Valley Residential Project',
      quantity: 2,
      unit: 'Units',
      status: 'Available',
      lastUpdated: '28 Jul 2026'
    },
    {
      id: 'RES-005',
      name: 'Safety Helmets',
      category: 'Safety',
      project: 'Highway Expansion Project',
      quantity: 5,
      unit: 'Pieces',
      status: 'Low Stock',
      lastUpdated: '27 Jul 2026'
    },
    {
      id: 'RES-006',
      name: 'Sand',
      category: 'Material',
      project: 'Highway Expansion Project',
      quantity: 0,
      unit: 'Tons',
      status: 'Out of Stock',
      lastUpdated: '27 Jul 2026'
    }
  ];

  // ==========================
  // Modal Functions
  // ==========================

  openAddResource() {
    this.showAddResourceModal = true;
  }

  closeAddResource() {
    this.showAddResourceModal = false;
  }

  saveResource() {

    const newResource = {

      id: 'RES-' + (this.resources.length + 1).toString().padStart(3, '0'),

      name: this.resource.name,

      category: this.resource.category,

      project: this.resource.project,

      quantity: this.resource.quantity,

      unit: this.resource.unit,

      status: this.resource.status,

      lastUpdated: new Date().toLocaleDateString('en-GB')

    };

    this.resources.unshift(newResource);

    // Reset Form
    this.resource = {
      project: '',
      name: '',
      category: '',
      quantity: 0,
      unit: '',
      supplier: '',
      location: '',
      status: 'Available',
      remarks: ''
    };

    this.showAddResourceModal = false;
  }

  // ==========================
  // Filter Resources
  // ==========================

  get filteredResources() {

    return this.resources.filter(resource => {

      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        resource.name.toLowerCase().includes(search) ||
        resource.id.toLowerCase().includes(search) ||
        resource.project.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        resource.category === this.selectedCategory;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        resource.status === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;

    });

  }

  // ==========================
  // Summary Cards
  // ==========================

  get totalResources(): number {
    return this.resources.length;
  }

  get availableResources(): number {
    return this.resources.filter(
      resource => resource.status === 'Available'
    ).length;
  }

  get lowStockResources(): number {
    return this.resources.filter(
      resource => resource.status === 'Low Stock'
    ).length;
  }

  get outOfStockResources(): number {
    return this.resources.filter(
      resource => resource.status === 'Out of Stock'
    ).length;
  }

}