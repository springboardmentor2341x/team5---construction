<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DailyReportDetails } from '../daily-report-details/daily-report-details';

interface DailyReport {
  projectName: string;
  reportDate: string;
  workCategory: string;
  activity: string;
  completion: number;

  contractor: string;
  workersPresent: number;
  workersAbsent: number;

  equipment: string;
  materials: string;

=======
import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {
  DailyProgressService,
  DailyProgressResponse
} from '../../../services/daily-progress.service';

import {
  MilestoneService,
  Milestone
} from '../../../services/milestone.service';

interface Project {
  project_id: number;
  project_code?: string;
  name: string;
  description?: string;
  category?: string;
  location?: string;
  status?: string;
}

interface DailyReportForm {
  projectId: number | null;
  milestoneId: number | null;

  siteEngineerId: number | null;
  projectContractorId: number | null;

  reportDate: string;
  activity: string;
  completion: number;

>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
  weather: string;

  safetyObservation: string;
  qualityRemarks: string;
<<<<<<< HEAD

  photodescription: string;
   
  delay: string;
  delayReason: string;

=======
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
  comments: string;
}

@Component({
  selector: 'app-se-daily-progress',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './se-daily-progress.html',

  styleUrl: './se-daily-progress.css'
})
export class SeDailyProgress {

  progress: DailyReport = {
    projectName: '',
    reportDate: '',
    workCategory: '',
    activity: '',
    completion: 0,

    contractor: '',
    workersPresent: 0,
    workersAbsent: 0,

    equipment: '',
    materials: '',

    weather: '',

    safetyObservation: '',
    qualityRemarks: '',
    photodescription:'',
    delay: 'No',
    delayReason: '',

    comments: ''
  };

  dailyReports: DailyReport[] = [];

  saveReport(): void {

    if (
      !this.progress.projectName ||
      !this.progress.reportDate ||
      !this.progress.activity
    ) {
      alert('Please fill all required fields.');
      return;
    }

    this.dailyReports.unshift({
      ...this.progress
    });

    alert('Daily Progress Report Saved Successfully.');

    this.resetForm();
  }

  resetForm(): void {

    this.progress = {
      projectName: '',
      reportDate: '',
      workCategory: '',
      activity: '',
      completion: 0,

      contractor: '',
      workersPresent: 0,
      workersAbsent: 0,

      equipment: '',
      materials: '',

      weather: '',

      safetyObservation: '',
      qualityRemarks: '',
      photodescription: '',
      delay: 'No',
      delayReason: '',

      comments: ''
    };

  }


  viewReport(report: DailyReport): void {

  alert(
    `Viewing report of ${report.projectName}`
  );

 }

 isEditing = false;
editingIndex = -1;

editReport(report: DailyReport): void {

  this.progress = { ...report };

  this.editingIndex = this.dailyReports.indexOf(report);

  this.isEditing = true;

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

 deleteReport(report: DailyReport): void {

  this.dailyReports =
    this.dailyReports.filter(
      r => r !== report
    );

 }



updateReport(): void {

  if (this.editingIndex !== -1) {

    this.dailyReports[this.editingIndex] = {
      ...this.progress
    };

    this.isEditing = false;

    this.editingIndex = -1;

    this.resetForm();

    alert('Report Updated Successfully.');

  }

}

 

=======
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './se-daily-progress.html',
  styleUrl: './se-daily-progress.css'
})
export class SeDailyProgress implements OnInit {

  // -----------------------------
  // API DATA
  // -----------------------------

  projects: Project[] = [];

  milestones: Milestone[] = [];

  dailyReports: DailyProgressResponse[] = [];


  // -----------------------------
  // FORM
  // -----------------------------

  progress: DailyReportForm = {
    projectId: null,
    milestoneId: null,

    siteEngineerId: null,
    projectContractorId: null,

    reportDate: this.getTodayDate(),

    activity: '',
    completion: 0,

    weather: 'SUNNY',

    safetyObservation: '',
    qualityRemarks: '',
    comments: ''
  };


  // -----------------------------
  // STATES
  // -----------------------------

  isLoadingProjects = false;
  isLoadingMilestones = false;
  isLoadingReports = false;
  isSaving = false;

  errorMessage = '';
  successMessage = '';


  constructor(
    private http: HttpClient,
    private milestoneService: MilestoneService,
    private dailyProgressService: DailyProgressService,
    private cdr: ChangeDetectorRef
  ) {}


  // -----------------------------
  // INITIAL LOAD
  // -----------------------------

  ngOnInit(): void {

    this.loadProjects();

    this.loadDailyReports();
    this.saveReport();

  }


  // -----------------------------
  // GET PROJECTS
  // -----------------------------

  loadProjects(): void {

    this.isLoadingProjects = true;
    // this.errorMessage = '';

    this.http
      .get<Project[]>('http://127.0.0.1:8000/projects/')
      .subscribe({

        next: (data) => {

          this.projects = data;

          // this.isLoadingProjects = false;
          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error('Project API Error:', error);

          // this.isLoadingProjects = false;

          // this.errorMessage =
          //   'Unable to load projects. Please check backend.';
           this.cdr.detectChanges();

        }

      });

  }


  // -----------------------------
  // PROJECT CHANGE
  // -----------------------------

  onProjectChange(): void {

    this.progress.milestoneId = null;

    this.milestones = [];

    if (!this.progress.projectId) {
      return;
    }

    this.loadMilestones(this.progress.projectId);

  }


  // -----------------------------
  // GET MILESTONES
  // -----------------------------

  loadMilestones(projectId: number): void {

    // this.isLoadingMilestones = true;

    this.milestoneService
      .getMilestonesByProject(projectId)
      .subscribe({

        next: (data) => {

          this.milestones = data;

          // this.isLoadingMilestones = false;
           this.cdr.detectChanges();
        },

        error: (error) => {

          console.error('Milestone API Error:', error);

          // this.isLoadingMilestones = false;

          // this.errorMessage =
          //   'Unable to load milestones.';
           this.cdr.detectChanges();
        }

      });

  }


  // -----------------------------
  // GET DAILY REPORTS
  // -----------------------------

  loadDailyReports(): void {

    // this.isLoadingReports = true;

    this.dailyProgressService
      .getReports()
      .subscribe({

        next: (data) => {

          this.dailyReports = data;

          // this.isLoadingReports = false;
           this.cdr.detectChanges();
        },

        error: (error) => {

          console.error('Daily Progress GET Error:', error);

          // this.isLoadingReports = false;

          // this.errorMessage =
          //   'Unable to load daily progress reports.';
           this.cdr.detectChanges();
        }

      });

  }


  // -----------------------------
  // SAVE REPORT
  // -----------------------------

  saveReport(): void {

    this.errorMessage = '';
    this.successMessage = '';

// this.saveReport()
    // Validation

    if (!this.progress.projectId) {

      this.errorMessage = 'Please select a project.';
      return;

    }


    if (!this.progress.milestoneId) {

      this.errorMessage = 'Please select a milestone.';
      return;

    }


    if (!this.progress.siteEngineerId) {

      this.errorMessage = 'Please enter Site Engineer ID.';
      return;

    }


    if (!this.progress.projectContractorId) {

      this.errorMessage = 'Please enter Project Contractor ID.';
      return;

    }


    if (!this.progress.reportDate) {

      this.errorMessage = 'Please select report date.';
      return;

    }


    if (!this.progress.activity.trim()) {

      this.errorMessage = 'Please enter activity performed.';
      return;

    }


    if (
      this.progress.completion < 0 ||
      this.progress.completion > 100
    ) {

      this.errorMessage =
        'Progress percentage must be between 0 and 100.';

      return;

    }


    // API payload

    const payload = {

      milestone_id: this.progress.milestoneId,

      site_engineer_id: this.progress.siteEngineerId,

      project_contractor_id:
        this.progress.projectContractorId,

      report_date: this.progress.reportDate,

      activity_performed:
        this.progress.activity,

      progress_percentage:
        this.progress.completion,

      weather_condition:
        this.progress.weather,

      safety_observations:
        this.progress.safetyObservation,

      quality_remarks:
        this.progress.qualityRemarks,

      additional_comments:
        this.progress.comments

    };


    console.log('POST Daily Progress:', payload);


    this.isSaving = true;


    this.dailyProgressService
      .createReport(payload)
      .subscribe({

        next: (response) => {

          console.log(
            'Daily Progress Saved:',
            response
          );

          this.isSaving = false;

          this.successMessage =
            'Daily Progress Report saved successfully.';


          // Reload table from DB

          this.loadDailyReports();


          // Reset form

          this.resetForm();
           this.cdr.detectChanges();
        },

        error: (error) => {

          console.error(
            'Daily Progress POST Error:',
            error
          );

          this.isSaving = false;


          if (error.error?.detail) {

            this.errorMessage =
              error.error.detail;

          } else {

            this.errorMessage =
              'Unable to save daily progress report.';

          }
           this.cdr.detectChanges();
        }

      });

  }


  // -----------------------------
  // DELETE REPORT
  // -----------------------------

  deleteReport(
    report: DailyProgressResponse
  ): void {

    const confirmDelete =
      confirm(
        'Are you sure you want to delete this report?'
      );

    if (!confirmDelete) {
      return;
    }


    this.errorMessage = '';
    this.successMessage = '';


    this.dailyProgressService
      .deleteReport(report.report_id)
      .subscribe({

        next: () => {

          this.successMessage =
            'Daily Progress Report deleted successfully.';


          // Remove from UI

          this.dailyReports =
            this.dailyReports.filter(
              r =>
                r.report_id !== report.report_id
            );
             this.cdr.detectChanges();
        },

        error: (error) => {

          console.error(
            'Delete API Error:',
            error
          );

          this.errorMessage =
            'Unable to delete report.';

        }

      });

  }


  // -----------------------------
  // RESET FORM
  // -----------------------------

  resetForm(): void {

    this.progress = {

      projectId: null,

      milestoneId: null,

      siteEngineerId: null,

      projectContractorId: null,

      reportDate: this.getTodayDate(),

      activity: '',

      completion: 0,

      weather: 'SUNNY',

      safetyObservation: '',

      qualityRemarks: '',

      comments: ''

    };


    this.milestones = [];

  }


  // -----------------------------
  // TODAY DATE
  // -----------------------------

  private getTodayDate(): string {

    const today = new Date();

    const year =
      today.getFullYear();

    const month =
      String(today.getMonth() + 1)
        .padStart(2, '0');

    const day =
      String(today.getDate())
        .padStart(2, '0');

    return `${year}-${month}-${day}`;

  }

>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
}