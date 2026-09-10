import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

import {
  DailyProgressService,
  DailyProgressResponse
} from '../../../services/daily-progress.service';

@Component({
  selector: 'app-daily-report-details',
  standalone: true,
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
}