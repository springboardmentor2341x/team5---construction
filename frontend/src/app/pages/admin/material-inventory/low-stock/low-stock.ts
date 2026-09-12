import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-low-stock',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './low-stock.html',
  styleUrl: './low-stock.css'
})
export class LowStock {

  lowStockItems = [
    {
      id: 'MAT-004',
      material: 'Sand',
      category: 'Aggregate',
      available: 250,
      minimum: 500,
      unit: 'Tons',
      shortage: 250,
      status: 'Critical'
    },
    {
      id: 'MAT-001',
      material: 'Cement',
      category: 'Cement',
      available: 350,
      minimum: 500,
      unit: 'Bags',
      shortage: 150,
      status: 'Low'
    },
    {
      id: 'MAT-006',
      material: 'Plumbing Pipes',
      category: 'Plumbing',
      available: 80,
      minimum: 200,
      unit: 'Units',
      shortage: 120,
      status: 'Critical'
    }
  ];

  get totalLowStock() {
    return this.lowStockItems.length;
  }

  get criticalItems() {
    return this.lowStockItems.filter(
      item => item.status === 'Critical'
    ).length;
  }

  get totalShortage() {
    return this.lowStockItems.reduce(
      (total, item) => total + item.shortage,
      0
    );
  }
}