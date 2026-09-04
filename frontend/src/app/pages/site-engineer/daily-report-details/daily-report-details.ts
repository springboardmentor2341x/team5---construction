import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-daily-report-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './daily-report-details.html',
  styleUrl: './daily-report-details.css'
})
export class DailyReportDetails {



    

  report = {

    projectName: 'City Mall Construction',

    reportDate: '04 Aug 2026',

    workCategory: 'Foundation',

    activity:
      'Foundation excavation completed successfully for Block A.',

    completion: 80,

    contractor: 'ABC Construction',

    workersPresent: 42,

    workersAbsent: 3,

    equipment: 'Excavator, Concrete Mixer',

    materials: '300 Cement Bags, 5 Tons Steel',

    weather: 'Sunny',

    safetyObservation:
      'All workers were wearing PPE kits.',

    qualityRemarks:
      'Concrete quality passed inspection.',

    delay: 'No',

    delayReason: '-',

    comments:
      'Work completed according to schedule.'

  };

}