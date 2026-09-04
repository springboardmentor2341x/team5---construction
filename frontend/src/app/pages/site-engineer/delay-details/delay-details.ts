import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delay-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './delay-details.html',
  styleUrl: './delay-details.css',
})
export class DelayDetails {
   delay = {

    projectName: 'City Mall Construction',

    workCategory: 'Foundation Work',

    delayReason: 'Heavy Rainfall',

    delayDuration: '2 Hours',

    delayDate: '10 Aug 2026',

    impactLevel: 'Medium',

    affectedMilestone: 'Foundation Completed',

    resolutionStatus: 'Resolved',

    resolutionRemarks:
      'Work resumed after weather conditions improved.',

    reportedBy: 'Saurabh Pandey'

  };
}
