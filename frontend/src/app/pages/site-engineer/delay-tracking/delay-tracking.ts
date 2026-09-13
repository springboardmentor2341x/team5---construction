import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  DelayRecordService,
  DelayRecord,
  CreateDelayRecord
} from '../../../services/delay-record.service';

interface Delay {
  id: number;
  reportId: number;
  reasonForDelay: string;
  durationHours: string;
  impactOnProjectTimeline: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
}

@Component({
  selector: 'app-delay-tracking',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './delay-tracking.html',
  styleUrl: './delay-tracking.css'
})
export class DelayTracking implements OnInit {

  private delayRecordService = inject(DelayRecordService);
constructor(private cdr:ChangeDetectorRef){}
  // =========================
  // Form Data
  // =========================

  delay: CreateDelayRecord = {
    report_id: 0,
    reason_for_delay: '',
    duration_hours: 0,
    impact_on_project_timeline: '',
    description: ''
  };

  // =========================
  // Delay Records
  // =========================

  delays: Delay[] = [];

  // =========================
  // Modal
  // =========================

  showAddDelay = false;

  // =========================
  // Loading / Error
  // =========================

  isLoading = false;
  isSaving = false;
  deletingId: number | null = null;

  // =========================
  // Lifecycle
  // =========================

  ngOnInit(): void {
    this.loadDelayRecords();
  }

  // =========================
  // GET API
  // =========================

  loadDelayRecords(): void {
    this.isLoading = true;

    this.delayRecordService.getAllDelayRecords().subscribe({
      next: (data: DelayRecord[]) => {

        this.delays = data.map((item: DelayRecord) => ({
          id: item.delay_id,
          reportId: item.report_id,
          reasonForDelay: item.reason_for_delay,
          durationHours: String(item.duration_hours),
          impactOnProjectTimeline: item.impact_on_project_timeline,
          description: item.description,
          createdAt: item.created_at,
          updatedAt: item.updated_at
        }));

        this.isLoading = false;
        this.cdr.detectChanges()
      },

      error: (error) => {
        console.error('Error loading delay records:', error);
        alert('Failed to load delay records.');
        this.isLoading = false;
      }
    });
  }

  // =========================
  // Open Modal
  // =========================

  openAddDelay(): void {
    this.resetDelayForm();
    this.showAddDelay = true;
  }

  // =========================
  // Close Modal
  // =========================

  closeAddDelay(): void {
    this.showAddDelay = false;
    this.resetDelayForm();
  }

  // =========================
  // POST API
  // =========================

  saveDelayinfo(): void {

    if (
      !this.delay.report_id ||
      !this.delay.reason_for_delay ||
      this.delay.duration_hours === null ||
      this.delay.duration_hours === undefined ||
      !this.delay.impact_on_project_timeline ||
      !this.delay.description
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const payload: CreateDelayRecord = {
      report_id: Number(this.delay.report_id),
      reason_for_delay: this.delay.reason_for_delay,
      duration_hours: Number(this.delay.duration_hours),
      impact_on_project_timeline: this.delay.impact_on_project_timeline,
      description: this.delay.description
    };

    this.isSaving = true;

    this.delayRecordService.createDelayRecord(payload).subscribe({
      next: (data: DelayRecord) => {

        const newDelay: Delay = {
          id: data.delay_id,
          reportId: data.report_id,
          reasonForDelay: data.reason_for_delay,
          durationHours: String(data.duration_hours),
          impactOnProjectTimeline: data.impact_on_project_timeline,
          description: data.description,
          createdAt: data.created_at,
          updatedAt: data.updated_at
        };

        // New record ko top par show karenge
        this.delays.unshift(newDelay);

        this.isSaving = false;
        this.showAddDelay = false;
        this.resetDelayForm();

        alert('Delay record added successfully.');
        this.cdr.detectChanges()
      },

      error: (error) => {
        console.error('Error creating delay record:', error);

        if (error.status === 422) {
          alert('Invalid data. Please check the entered values.');
        } else {
          alert('Failed to create delay record.');
        }

        this.isSaving = false;
      }
    });
  }

  // =========================
  // DELETE API
  // =========================

  deleteDelay(delayId: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this delay record?'
    );

    if (!confirmed) {
      return;
    }

    this.deletingId = delayId;

    this.delayRecordService.deleteDelayRecord(delayId).subscribe({
      next: () => {

        this.delays = this.delays.filter(
          delay => delay.id !== delayId
        );

        this.deletingId = null;

        alert('Delay record deleted successfully.');
        this.cdr.detectChanges()
      },

      error: (error) => {
        console.error('Error deleting delay record:', error);

        this.deletingId = null;

        alert('Failed to delete delay record.');
      }
    });
  }

  // =========================
  // Reset Form
  // =========================

  resetDelayForm(): void {
    this.delay = {
      report_id: 0,
      reason_for_delay: '',
      duration_hours: 0,
      impact_on_project_timeline: '',
      description: ''
    };
  }

  // =========================
  // Helper
  // =========================

  formatReason(reason: string): string {
    return reason
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase());
  }

  formatDate(date: string): string {
    if (!date) {
      return '';
    }

    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
}