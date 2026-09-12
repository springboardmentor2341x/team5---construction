<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
=======
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

import {
  DailyProgressService,
  DailyProgressResponse
} from '../../../services/daily-progress.service';
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

@Component({
  selector: 'app-daily-report-details',
  standalone: true,
<<<<<<< HEAD
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

=======
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './daily-report-details.html',
  styleUrl: './daily-report-details.css'
})
export class DailyReportDetails implements OnInit {

  report: DailyProgressResponse | null = null;

  reportId!: number;

  isLoading = true;

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private dailyProgressService: DailyProgressService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    console.log('Route ID:', id);

    if (!id) {

      this.errorMessage = 'Invalid report ID.';
      this.isLoading = false;

      return;
    }

    this.reportId = Number(id);

    console.log('Report ID:', this.reportId);

    this.loadReport();
  }

  loadReport(): void {

    this.isLoading = true;
    this.errorMessage = '';

    console.log('Loading report:', this.reportId);

    this.dailyProgressService
      .getReportById(this.reportId)
      .subscribe({

        next: (data: DailyProgressResponse) => {

          console.log('API SUCCESS:', data);

          this.report = data;

          this.isLoading = false;
          this.cdr.detectChanges()
        },

        error: (error) => {

          console.error(
            'Error loading daily report:',
            error
          );

          this.errorMessage =
            'Unable to load daily report details.';

          this.isLoading = false;
        },

        complete: () => {

          console.log(
            'API request completed'
          );

        }

      });
  }

  printReport(): void {

    window.print();

  }
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
}