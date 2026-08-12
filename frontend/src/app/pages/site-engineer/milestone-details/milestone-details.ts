import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-milestone-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './milestone-details.html',
  styleUrl: './milestone-details.css',
})
export class MilestoneDetails {
   milestone = {

    milestoneName: 'Foundation Completed',

    projectName: 'City Mall Construction',

    siteEngineer: 'Saurabh Pandey',

    projectManager: 'Asma',

    plannedDate: '15 Aug 2026',

    actualDate: '14 Aug 2026',

    progress: '100%',

    status: 'Completed',

    verifiedBy: 'Project Manager',

    activities: [

      'Excavation Completed',

      'Steel Reinforcement Installed',

      'Concrete Pouring Completed',

      'Foundation Inspection Passed'

    ],

    qualityStatus: 'Approved',

    safetyStatus: 'No Safety Issues',

    remarks:
      'Foundation work completed successfully before the planned schedule.'

  };
}
