import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stock-movements',
  standalone: true,
  imports: [DecimalPipe, FormsModule, RouterLink],
  templateUrl: './stock-movements.html',
  styleUrl: './stock-movements.css'
})
export class StockMovements {

  searchTerm = '';
  selectedType = 'All';

  showFilters = false;

  stockMovements = [
    {
      id: 'MOV-001',
      date: '19 Aug 2026',
      material: 'Cement',
      type: 'Received',
      quantity: 500,
      unit: 'Bags',
      location: 'Central Warehouse'
    },
    {
      id: 'MOV-002',
      date: '18 Aug 2026',
      material: 'Steel',
      type: 'Allocated',
      quantity: 40,
      unit: 'Tons',
      location: 'Government Hospital'
    },
    {
      id: 'MOV-003',
      date: '18 Aug 2026',
      material: 'Bricks',
      type: 'Consumed',
      quantity: 500,
      unit: 'Units',
      location: 'Residential Apartments'
    },
    {
      id: 'MOV-004',
      date: '17 Aug 2026',
      material: 'Sand',
      type: 'Allocated',
      quantity: 100,
      unit: 'Tons',
      location: 'Hyderabad Commercial Complex'
    },
    {
      id: 'MOV-005',
      date: '16 Aug 2026',
      material: 'Electrical Cable',
      type: 'Received',
      quantity: 800,
      unit: 'Meters',
      location: 'Central Warehouse'
    }
  ];

  get filteredMovements() {

    return this.stockMovements.filter(movement => {

      const search = this.searchTerm.toLowerCase();

      const matchesSearch =
        movement.material.toLowerCase().includes(search) ||
        movement.type.toLowerCase().includes(search) ||
        movement.location.toLowerCase().includes(search) ||
        movement.id.toLowerCase().includes(search);

      const matchesType =
        this.selectedType === 'All' ||
        movement.type === this.selectedType;

      return matchesSearch && matchesType;

    });

  }

  get totalMovements() {
    return this.stockMovements.length;
  }

  get receivedCount() {
    return this.stockMovements.filter(
      movement => movement.type === 'Received'
    ).length;
  }

  get allocatedCount() {
    return this.stockMovements.filter(
      movement => movement.type === 'Allocated'
    ).length;
  }

  get consumedCount() {
    return this.stockMovements.filter(
      movement => movement.type === 'Consumed'
    ).length;
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedType = 'All';
  }

}