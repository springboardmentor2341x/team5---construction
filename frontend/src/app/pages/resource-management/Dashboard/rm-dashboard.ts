import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rm-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rm-dashboard.html',
  styleUrl: './rm-dashboard.css'
})
export class RmDashboardComponent {

  resourceStats = [
    {
      title: 'Total Resources',
      value: 48,
      description: 'Registered equipment'
    },
    {
      title: 'Available',
      value: 18,
      description: 'Ready for allocation'
    },
    {
      title: 'Allocated',
      value: 25,
      description: 'Currently assigned'
    },
    {
      title: 'Under Maintenance',
      value: 5,
      description: 'Service required'
    }
  ];


  equipmentStatus = [
    {
      name: 'Excavators',
      total: 5,
      available: 2,
      allocated: 2,
      maintenance: 1
    },
    {
      name: 'Concrete Mixers',
      total: 4,
      available: 2,
      allocated: 2,
      maintenance: 0
    },
    {
      name: 'Cranes',
      total: 3,
      available: 1,
      allocated: 2,
      maintenance: 0
    },
    {
      name: 'Dump Trucks',
      total: 6,
      available: 2,
      allocated: 4,
      maintenance: 0
    },
    {
      name: 'Generators',
      total: 10,
      available: 4,
      allocated: 3,
      maintenance: 3
    },
    {
      name: 'Safety Equipment',
      total: 20,
      available: 12,
      allocated: 8,
      maintenance: 0
    }
  ];


  activeAllocations = [
    {
      equipment: 'Crane-01',
      project: 'Government Hospital',
      location: 'Hyderabad',
      status: 'Operating'
    },
    {
      equipment: 'Excavator-03',
      project: 'Residential Apartment',
      location: 'Chennai',
      status: 'Operating'
    },
    {
      equipment: 'Dump Truck-02',
      project: 'Commercial Office',
      location: 'Bangalore',
      status: 'Idle'
    },
    {
      equipment: 'Generator-05',
      project: 'Government Hospital',
      location: 'Hyderabad',
      status: 'Operating'
    }
  ];


  maintenanceSchedule = [
    {
      equipment: 'Crane-02',
      date: '15 Aug 2026',
      type: 'Periodic Inspection',
      priority: 'High'
    },
    {
      equipment: 'Excavator-04',
      date: '20 Aug 2026',
      type: 'Scheduled Service',
      priority: 'Medium'
    },
    {
      equipment: 'Generator-03',
      date: '24 Aug 2026',
      type: 'Engine Service',
      priority: 'Medium'
    }
  ];
}