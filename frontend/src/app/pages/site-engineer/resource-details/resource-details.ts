import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-details',
  imports: [CommonModule],
  templateUrl: './resource-details.html',
  styleUrl: './resource-details.css',
})
export class ResourceDetails {
    resource = {

    projectName: 'City Mall Construction',

    resourceName: 'Cement',

    resourceType: 'Construction Material',

    assignedBy: 'Project Manager',

    quantity: '500 Bags',

    availableQuantity: '180 Bags',

    usedQuantity: '320 Bags',

    unit: 'Bags',

    status: 'In Use',

    location: 'Site A Warehouse',

    lastUpdated: '06 Aug 2026',

    supplier: 'UltraTech Cement',

    remarks:
      'Material is being used for foundation and column casting.'

  };
}
