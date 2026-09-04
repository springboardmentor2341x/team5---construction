import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-equipment-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './equipment-details.html',
  styleUrl: './equipment-details.css',
})
export class EquipmentDetails {

  equipment = {
    id: 'EQ-001',
    name: 'Excavator',
    category: 'Heavy Machinery',
    status: 'Available',

    project: 'City Mall Construction',

    quantity: '2 Units',

    condition: 'Good',

    purchaseDate: '12 Jul 2026',

    lastMaintenance: '28 Jul 2026',

    location: 'Site A',

    operator: 'Rahul Singh',

    description:
      'Heavy-duty excavator used for excavation, foundation digging and earth moving work.'
  };
}
