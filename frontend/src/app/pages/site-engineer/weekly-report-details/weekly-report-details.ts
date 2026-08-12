import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weekly-report-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './weekly-report-details.html',
  styleUrl: './weekly-report-details.css',
})
export class WeeklyReportDetails {

   report = {

    projectName: 'City Mall Construction',

    siteEngineer: 'Saurabh Pandey',

    weekStart: '04 Aug 2026',

    weekEnd: '10 Aug 2026',

    progress: '18%',

    workerHours: '360 Hours',

    workersPresent: 45,

    workersAbsent: 5,

    majorActivities: [

      'Foundation Excavation',

      'Concrete Casting',

      'Steel Reinforcement',

      'Quality Inspection'

    ],

    delayReason: 'Heavy Rainfall',

    delayDuration: '2 Hours',

    safety: 'No Safety Incident',

    quality: 'All inspections passed successfully.',

    status: 'On Schedule',

    remarks:
      'Project is progressing according to the weekly schedule.'

  };
}
