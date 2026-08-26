import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-material-inventory',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './material-inventory.html',
  styleUrl: './material-inventory.css',
})
export class MaterialInventory {

  materialStats = [
    {
      title: 'Total Materials',
      value: '48',
      description: 'Materials currently registered',
      icon: '📦'
    },
    {
      title: 'Available Stock',
      value: '12,450',
      description: 'Units currently available',
      icon: '📊'
    },
    {
      title: 'Allocated Stock',
      value: '4,280',
      description: 'Units allocated to projects',
      icon: '🏗️'
    },
    {
      title: 'Consumed Stock',
      value: '2,860',
      description: 'Units consumed by projects',
      icon: '📉'
    },
    {
      title: 'Low Stock Items',
      value: '6',
      description: 'Materials need attention',
      icon: '⚠️'
    },
    {
      title: 'Pending Requests',
      value: '12',
      description: 'Requests awaiting approval',
      icon: '📋'
    }
  ];


  inventoryItems = [
    {
      name: 'Cement',
      category: 'Cement',
      available: '700 bags',
      allocated: '200 bags',
      consumed: '100 bags',
      status: 'Available'
    },
    {
      name: 'Steel',
      category: 'Steel',
      available: '120 tons',
      allocated: '40 tons',
      consumed: '20 tons',
      status: 'Available'
    },
    {
      name: 'Bricks',
      category: 'Bricks',
      available: '8,000',
      allocated: '3,000',
      consumed: '1,500',
      status: 'Available'
    },
    {
      name: 'Sand',
      category: 'Sand',
      available: '250 tons',
      allocated: '180 tons',
      consumed: '60 tons',
      status: 'Low Stock'
    },
    {
      name: 'Electrical Cable',
      category: 'Electrical',
      available: '1,200 m',
      allocated: '450 m',
      consumed: '300 m',
      status: 'Available'
    }
  ];


  materialRequests = [
    {
      id: 'MR-001',
      material: 'Cement',
      project: 'Hyderabad Commercial Complex',
      quantity: '500 bags',
      status: 'Pending'
    },
    {
      id: 'MR-002',
      material: 'Steel',
      project: 'Government Hospital',
      quantity: '20 tons',
      status: 'Approved'
    },
    {
      id: 'MR-003',
      material: 'Bricks',
      project: 'Residential Apartments',
      quantity: '2,000',
      status: 'Fulfilled'
    },
    {
      id: 'MR-004',
      material: 'Plumbing Pipes',
      project: 'Office Building',
      quantity: '300 units',
      status: 'Pending'
    }
  ];


  lowStockItems = [
    {
      material: 'Sand',
      available: '250 tons',
      minimum: '500 tons'
    },
    {
      material: 'Cement',
      available: '350 bags',
      minimum: '500 bags'
    },
    {
      material: 'Plumbing Pipes',
      available: '80 units',
      minimum: '200 units'
    }
  ];


  materialAllocations = [
    {
      material: 'Cement',
      project: 'Hyderabad Commercial Complex',
      activity: 'Foundation Work',
      quantity: '200 bags',
      date: '19 Aug 2026'
    },
    {
      material: 'Steel',
      project: 'Government Hospital',
      activity: 'Structural Work',
      quantity: '40 tons',
      date: '18 Aug 2026'
    },
    {
      material: 'Bricks',
      project: 'Residential Apartments',
      activity: 'Wall Construction',
      quantity: '3,000',
      date: '17 Aug 2026'
    },
    {
      material: 'Electrical Cable',
      project: 'Office Building',
      activity: 'Electrical Installation',
      quantity: '450 m',
      date: '16 Aug 2026'
    }
  ];


  stockMovements = [
    {
      date: '19 Aug 2026',
      material: 'Cement',
      type: 'Received',
      quantity: '+500 bags',
      location: 'Central Warehouse'
    },
    {
      date: '18 Aug 2026',
      material: 'Steel',
      type: 'Allocated',
      quantity: '-40 tons',
      location: 'Government Hospital'
    },
    {
      date: '18 Aug 2026',
      material: 'Bricks',
      type: 'Consumed',
      quantity: '-500',
      location: 'Residential Apartments'
    },
    {
      date: '17 Aug 2026',
      material: 'Sand',
      type: 'Allocated',
      quantity: '-100 tons',
      location: 'Hyderabad Commercial Complex'
    },
    {
      date: '16 Aug 2026',
      material: 'Electrical Cable',
      type: 'Received',
      quantity: '+800 m',
      location: 'Central Warehouse'
    }
  ];

}