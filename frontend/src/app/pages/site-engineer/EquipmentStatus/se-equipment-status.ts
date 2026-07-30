import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-se-equipment-status',
  standalone: true,
  imports: [ CommonModule, RouterLink,  FormsModule],
  templateUrl: './se-equipment-status.html',
  styleUrl: './se-equipment-status.css'
})
export class SeEquipmentStatus {

  // sidebarOpen = false;

  searchText = '';
  selectedStatus = 'All';

  equipmentList = [
    {
      id: 'EQ-001',
      name: 'Tower Crane',
      project: 'City Mall Construction',
      operator: 'Rahul Singh',
      status: 'In Use',
      condition: 'Good',
      lastMaintenance: '15 Jul 2026'
    },
    {
      id: 'EQ-002',
      name: 'Excavator',
      project: 'City Mall Construction',
      operator: 'Amit Kumar',
      status: 'In Use',
      condition: 'Good',
      lastMaintenance: '20 Jul 2026'
    },
    {
      id: 'EQ-003',
      name: 'Concrete Mixer',
      project: 'Green Valley Residential Project',
      operator: 'Vikas Yadav',
      status: 'Available',
      condition: 'Excellent',
      lastMaintenance: '24 Jul 2026'
    },
    {
      id: 'EQ-004',
      name: 'JCB Loader',
      project: 'Highway Expansion Project',
      operator: 'Sanjay Verma',
      status: 'Maintenance',
      condition: 'Needs Service',
      lastMaintenance: '10 Jul 2026'
    },
    {
      id: 'EQ-005',
      name: 'Road Roller',
      project: 'Highway Expansion Project',
      operator: 'Manish Gupta',
      status: 'Available',
      condition: 'Good',
      lastMaintenance: '22 Jul 2026'
    }
  ];

  // toggleSidebar(): void {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  // closeSidebar(): void {
  //   this.sidebarOpen = false;
  // }

  get filteredEquipment() {
    return this.equipmentList.filter((equipment) => {

      const matchesSearch =
        equipment.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        equipment.id.toLowerCase().includes(this.searchText.toLowerCase()) ||
        equipment.project.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' ||
        equipment.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get totalEquipment(): number {
    return this.equipmentList.length;
  }

  get inUseCount(): number {
    return this.equipmentList.filter(
      equipment => equipment.status === 'In Use'
    ).length;
  }

  get availableCount(): number {
    return this.equipmentList.filter(
      equipment => equipment.status === 'Available'
    ).length;
  }

  get maintenanceCount(): number {
    return this.equipmentList.filter(
      equipment => equipment.status === 'Maintenance'
    ).length;
  }
}