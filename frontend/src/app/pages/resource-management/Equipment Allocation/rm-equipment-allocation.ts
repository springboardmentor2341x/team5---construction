import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rm-equipment-allocation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rm-equipment-allocation.html',
  styleUrl: './rm-equipment-allocation.css'
})
export class RmEquipmentAllocationComponent {

  allocation = {
    projectName: '',
    equipmentName: '',
    equipmentId: '',
    equipmentCategory: '',
    quantity: 1,
    allocationDate: '',
    expectedReturnDate: '',
    responsiblePerson: ''
  };

  projects = [
    'Residential Apartment',
    'Commercial Office Building',
    'Government Hospital'
  ];

  equipment = [
    {
      id: 'EXC-001',
      name: 'Excavator-01',
      category: 'Excavator',
      status: 'Available'
    },
    {
      id: 'EXC-002',
      name: 'Excavator-02',
      category: 'Excavator',
      status: 'Allocated'
    },
    {
      id: 'CRN-001',
      name: 'Crane-01',
      category: 'Crane',
      status: 'Available'
    },
    {
      id: 'CRM-001',
      name: 'Concrete Mixer-01',
      category: 'Concrete Mixer',
      status: 'Available'
    },
    {
      id: 'DMP-002',
      name: 'Dump Truck-02',
      category: 'Dump Truck',
      status: 'Allocated'
    }
  ];

  allocations = [
    {
      equipment: 'Crane-01',
      id: 'CRN-001',
      project: 'Government Hospital',
      category: 'Crane',
      allocationDate: '05 Aug 2026',
      returnDate: '30 Aug 2026',
      responsible: 'Site Engineer',
      status: 'Allocated'
    },
    {
      equipment: 'Excavator-03',
      id: 'EXC-003',
      project: 'Residential Apartment',
      category: 'Excavator',
      allocationDate: '02 Aug 2026',
      returnDate: '18 Aug 2026',
      responsible: 'Arun Kumar',
      status: 'Allocated'
    }
  ];

  selectEquipment(): void {
    const selected = this.equipment.find(
      item => item.name === this.allocation.equipmentName
    );

    if (selected) {
      this.allocation.equipmentId = selected.id;
      this.allocation.equipmentCategory = selected.category;
    }
  }

  allocateEquipment(): void {

    if (
      !this.allocation.projectName ||
      !this.allocation.equipmentName ||
      !this.allocation.allocationDate ||
      !this.allocation.expectedReturnDate ||
      !this.allocation.responsiblePerson
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const selected = this.equipment.find(
      item => item.name === this.allocation.equipmentName
    );

    if (selected?.status === 'Allocated') {
      alert('This equipment is already allocated.');
      return;
    }

    alert('Equipment allocated successfully.');

    this.allocation = {
      projectName: '',
      equipmentName: '',
      equipmentId: '',
      equipmentCategory: '',
      quantity: 1,
      allocationDate: '',
      expectedReturnDate: '',
      responsiblePerson: ''
    };
  }

  resetForm(): void {
    this.allocation = {
      projectName: '',
      equipmentName: '',
      equipmentId: '',
      equipmentCategory: '',
      quantity: 1,
      allocationDate: '',
      expectedReturnDate: '',
      responsiblePerson: ''
    };
  }
}