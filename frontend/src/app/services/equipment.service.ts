import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private equipments = [

    {
      id: 'EQ-001',
      name: 'Excavator',
      category: 'Heavy Machinery',
      project: 'City Mall',
      quantity: 2,
      condition: 'Good',
      status: 'Available',
      purchaseDate: '2026-07-01'
    },

    {
      id: 'EQ-002',
      name: 'Concrete Mixer',
      category: 'Tools',
      project: 'Green Valley',
      quantity: 1,
      condition: 'Good',
      status: 'In Use',
      purchaseDate: '2026-07-10'
    }

  ];

  getEquipments() {
    return this.equipments;
  }

  addEquipment(equipment: any) {
    this.equipments.push(equipment);
  }

}