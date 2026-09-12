import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-wm-dashboard',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './wm-dashboard.html',
  styleUrl: './wm-dashboard.css'
})
export class WmDashboardComponent {

  totalWorkers = 1250;

  presentWorkers = 1085;

  absentWorkers = 95;

  leaveWorkers = 70;

  attendancePercentage = 86.8;

  activeAssignments = 48;

  activeShifts = 16;

  pendingPayroll = 32;


  workforceCategories = [

    {
      name: 'Engineers',
      count: 85,
      icon: 'engineering'
    },

    {
      name: 'Supervisors',
      count: 120,
      icon: 'supervisor_account'
    },

    {
      name: 'Contractors',
      count: 45,
      icon: 'business'
    },

    {
      name: 'Skilled Workers',
      count: 650,
      icon: 'build'
    },

    {
      name: 'Unskilled Workers',
      count: 280,
      icon: 'groups'
    },

    {
      name: 'Consultants',
      count: 70,
      icon: 'person'
    }

  ];


  projectWorkforce = [

    {
      project: 'Chennai Metro Construction',
      workers: 320,
      contractor: 'ABC Constructions'
    },

    {
      project: 'Green Valley Apartments',
      workers: 245,
      contractor: 'BuildPro Contractors'
    },

    {
      project: 'Airport Expansion',
      workers: 380,
      contractor: 'Prime Infra'
    },

    {
      project: 'Highway Development',
      workers: 305,
      contractor: 'National Builders'
    }

  ];

}