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

  weather: string;

  safetyObservation: string;
  qualityRemarks: string;

  photodescription: string;
   
  delay: string;
  delayReason: string;

  comments: string;
}

@Component({
  selector: 'app-se-daily-progress',
  standalone: true,
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

 

}