import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-maintenance-scheduling',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rm-maintenance-scheduling.html',
  styleUrl: './rm-maintenance-scheduling.css'
})
export class RmMaintenanceSchedulingComponent {

  searchText = '';
  selectedStatus = 'All Status';
  selectedType = 'All Types';

  statuses = [
    'All Status',
    'Scheduled',
    'Upcoming',
    'In Progress',
    'Completed',
    'Overdue'
  ];

  maintenanceTypes = [
    'All Types',
    'Preventive',
    'Routine Service',
    'Inspection',
    'Repair'
  ];

  maintenanceRecords = [
    {
      id: 'MNT-001',
      equipmentId: 'CRN-001',
      equipmentName: 'Crane-01',
      category: 'Crane',
      lastMaintenance: '15 Jul 2026',
      nextMaintenance: '15 Aug 2026',
      type: 'Inspection',
      engineer: 'Ramesh Kumar',
      cost: 18500,
      status: 'Upcoming'
    },
    {
      id: 'MNT-002',
      equipmentId: 'EXC-001',
      equipmentName: 'Excavator-01',
      category: 'Excavator',
      lastMaintenance: '20 Jun 2026',
      nextMaintenance: '20 Aug 2026',
      type: 'Preventive',
      engineer: 'Suresh B',
      cost: 12500,
      status: 'Scheduled'
    },
    {
      id: 'MNT-003',
      equipmentId: 'GEN-005',
      equipmentName: 'Generator-05',
      category: 'Generator',
      lastMaintenance: '05 Jul 2026',
      nextMaintenance: '05 Aug 2026',
      type: 'Routine Service',
      engineer: 'Arun Prakash',
      cost: 8500,
      status: 'Overdue'
    },
    {
      id: 'MNT-004',
      equipmentId: 'CRM-001',
      equipmentName: 'Concrete Mixer-01',
      category: 'Concrete Mixer',
      lastMaintenance: '28 Jul 2026',
      nextMaintenance: '28 Aug 2026',
      type: 'Preventive',
      engineer: 'Vijay Kumar',
      cost: 7200,
      status: 'Scheduled'
    },
    {
      id: 'MNT-005',
      equipmentId: 'DMP-002',
      equipmentName: 'Dump Truck-02',
      category: 'Dump Truck',
      lastMaintenance: '01 Aug 2026',
      nextMaintenance: '01 Sep 2026',
      type: 'Routine Service',
      engineer: 'Manoj Singh',
      cost: 9800,
      status: 'Upcoming'
    },
    {
      id: 'MNT-006',
      equipmentId: 'EXC-003',
      equipmentName: 'Excavator-03',
      category: 'Excavator',
      lastMaintenance: '10 Jul 2026',
      nextMaintenance: '10 Aug 2026',
      type: 'Repair',
      engineer: 'Ramesh Kumar',
      cost: 15600,
      status: 'In Progress'
    }
  ];

  get filteredRecords() {

    const search = this.searchText.toLowerCase();

    return this.maintenanceRecords.filter(record => {

      const matchesSearch =
        record.equipmentName.toLowerCase().includes(search) ||
        record.equipmentId.toLowerCase().includes(search) ||
        record.category.toLowerCase().includes(search) ||
        record.engineer.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        record.status === this.selectedStatus;

      const matchesType =
        this.selectedType === 'All Types' ||
        record.type === this.selectedType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }

  get upcomingCount(): number {
    return this.maintenanceRecords.filter(
      record =>
        record.status === 'Upcoming' ||
        record.status === 'Scheduled'
    ).length;
  }

  get inProgressCount(): number {
    return this.maintenanceRecords.filter(
      record => record.status === 'In Progress'
    ).length;
  }

  get overdueCount(): number {
    return this.maintenanceRecords.filter(
      record => record.status === 'Overdue'
    ).length;
  }

  get completedCount(): number {
    return this.maintenanceRecords.filter(
      record => record.status === 'Completed'
    ).length;
  }

  get totalMaintenanceCost(): number {
    return this.maintenanceRecords.reduce(
      (total, record) => total + record.cost,
      0
    );
  }

  getStatusClass(status: string): string {

    switch (status) {

      case 'Scheduled':
        return 'scheduled';

      case 'Upcoming':
        return 'upcoming';

      case 'In Progress':
        return 'in-progress';

      case 'Completed':
        return 'completed';

      case 'Overdue':
        return 'overdue';

      default:
        return '';
    }
  }
}
