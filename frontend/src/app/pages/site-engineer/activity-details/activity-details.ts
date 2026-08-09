import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activity-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './activity-details.html',
  styleUrl: './activity-details.css',
})
export class ActivityDetails {
    activity = {

    projectName: 'City Mall Construction',

    activityType: 'Material Delivery',

    date: '10 Aug 2026',

    time: '09:30 AM',

    responsiblePerson: 'Rahul Singh',

    status: 'Completed',

    description:
      '500 cement bags were delivered and stored safely at Site A warehouse.',

    remarks:
      'Material verified and entered into inventory register.',

    createdBy: 'Saurabh Pandey'

  };
}
