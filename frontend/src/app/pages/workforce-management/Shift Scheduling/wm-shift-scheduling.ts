import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wm-shift-scheduling',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-shift-scheduling.html',
  styleUrl: './wm-shift-scheduling.css'
})
export class WmShiftSchedulingComponent {

  // =====================================================
  // FORM FIELDS
  // =====================================================

  selectedProject = '';
  selectedCategory = '';
  selectedContractor = '';
  selectedShift = '';
  selectedWorkArea = '';
  workerCount = 1;
  selectedDate = '2026-08-24';
  selectedSupervisor = '';
  startTime = '';
  endTime = '';
  breakDuration = '';
  selectedStatus = 'Scheduled';


  // =====================================================
  // PROJECTS
  // =====================================================

  projects = [
    'Chennai Metro Construction',
    'Green Valley Apartments',
    'Airport Expansion',
    'Highway Development'
  ];


  // =====================================================
  // WORKFORCE CATEGORIES
  // =====================================================

  categories = [
    'Engineers',
    'Supervisors',
    'Skilled Workers',
    'Unskilled Workers',
    'Electricians',
    'Plumbers',
    'Helpers'
  ];


  // =====================================================
  // CONTRACTORS
  // =====================================================

  contractors = [
    'ABC Constructions',
    'BuildPro Contractors',
    'Prime Infra',
    'National Builders'
  ];


  // =====================================================
  // SHIFT TYPES
  // =====================================================

  shifts = [
    'Morning',
    'General',
    'Evening',
    'Night'
  ];


  // =====================================================
  // SUPERVISORS
  // =====================================================

  supervisors = [
    'Ravi Kumar',
    'Suresh Babu',
    'Arun Prakash',
    'Vijay Kumar',
    'Karthik Raj'
  ];


  // =====================================================
  // SHIFT SCHEDULES
  // =====================================================

  schedules = [

    {
      id: 'SH-001',
      project: 'Chennai Metro Construction',
      category: 'Skilled Workers',
      workArea: 'Concrete Work',
      shift: 'Morning',
      date: '2026-08-24',
      workers: 25,
      supervisor: 'Ravi Kumar',
      startTime: '08:00 AM',
      endTime: '05:00 PM',
      status: 'Active'
    },

    {
      id: 'SH-002',
      project: 'Green Valley Apartments',
      category: 'Engineers',
      workArea: 'Site Supervision',
      shift: 'General',
      date: '2026-08-24',
      workers: 12,
      supervisor: 'Arun Prakash',
      startTime: '08:30 AM',
      endTime: '05:30 PM',
      status: 'Scheduled'
    },

    {
      id: 'SH-003',
      project: 'Airport Expansion',
      category: 'Unskilled Workers',
      workArea: 'Material Handling',
      shift: 'Evening',
      date: '2026-08-24',
      workers: 18,
      supervisor: 'Suresh Babu',
      startTime: '02:00 PM',
      endTime: '10:00 PM',
      status: 'Active'
    },

    {
      id: 'SH-004',
      project: 'Highway Development',
      category: 'Skilled Workers',
      workArea: 'Road Construction',
      shift: 'Morning',
      date: '2026-08-24',
      workers: 30,
      supervisor: 'Vijay Kumar',
      startTime: '07:00 AM',
      endTime: '04:00 PM',
      status: 'Active'
    },

    {
      id: 'SH-005',
      project: 'Chennai Metro Construction',
      category: 'Electricians',
      workArea: 'Electrical Work',
      shift: 'Night',
      date: '2026-08-24',
      workers: 10,
      supervisor: 'Karthik Raj',
      startTime: '10:00 PM',
      endTime: '06:00 AM',
      status: 'Scheduled'
    },

    {
      id: 'SH-006',
      project: 'Green Valley Apartments',
      category: 'Plumbers',
      workArea: 'Plumbing Work',
      shift: 'General',
      date: '2026-08-23',
      workers: 8,
      supervisor: 'Ravi Kumar',
      startTime: '08:30 AM',
      endTime: '05:30 PM',
      status: 'Completed'
    }

  ];


  // =====================================================
  // SUMMARY COUNTS
  // =====================================================

  get totalSchedules(): number {

    return this.schedules.length;

  }


  get morningShifts(): number {

    return this.schedules.filter(
      schedule => schedule.shift === 'Morning'
    ).length;

  }


  get activeShifts(): number {

    return this.schedules.filter(
      schedule => schedule.status === 'Active'
    ).length;

  }


  get nightShifts(): number {

    return this.schedules.filter(
      schedule => schedule.shift === 'Night'
    ).length;

  }


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(status: string): string {

    switch (status.toLowerCase()) {

      case 'scheduled':
        return 'status-scheduled';

      case 'active':
        return 'status-active';

      case 'completed':
        return 'status-completed';

      case 'cancelled':
        return 'status-cancelled';

      default:
        return '';

    }

  }


  // =====================================================
  // SCHEDULE SHIFT
  // =====================================================

  scheduleShift(): void {

    if (
      !this.selectedProject ||
      !this.selectedCategory ||
      !this.selectedShift ||
      !this.selectedDate ||
      !this.startTime ||
      !this.endTime
    ) {

      alert(
        'Please fill all required shift scheduling details.'
      );

      return;

    }


    const newSchedule = {

      id: `SH-${String(
        this.schedules.length + 1
      ).padStart(3, '0')}`,

      project: this.selectedProject,

      category: this.selectedCategory,

      workArea:
        this.selectedWorkArea || 'General Work Area',

      shift: this.selectedShift,

      date: this.selectedDate,

      workers:
        this.workerCount > 0
          ? this.workerCount
          : 1,

      supervisor:
        this.selectedSupervisor || 'Not Assigned',

      startTime: this.startTime,

      endTime: this.endTime,

      status: this.selectedStatus

    };


    this.schedules.push(newSchedule);


    alert(
      'Shift scheduled successfully.'
    );


    this.clearForm();

  }


  // =====================================================
  // CLEAR FORM
  // =====================================================

  clearForm(): void {

    this.selectedProject = '';

    this.selectedCategory = '';

    this.selectedContractor = '';

    this.selectedShift = '';

    this.selectedWorkArea = '';

    this.workerCount = 1;

    this.selectedDate = '2026-08-24';

    this.selectedSupervisor = '';

    this.startTime = '';

    this.endTime = '';

    this.breakDuration = '';

    this.selectedStatus = 'Scheduled';

  }


  // =====================================================
  // FILTER SCHEDULES
  // =====================================================

  filterSchedules(): void {

    alert(
      `Shift schedules filtered for ${this.selectedDate}.`
    );

  }


  // =====================================================
  // VIEW SCHEDULE
  // =====================================================

  viewSchedule(schedule: any): void {

    alert(

      `Shift Schedule Details\n\n` +

      `Schedule ID: ${schedule.id}\n` +

      `Project: ${schedule.project}\n` +

      `Category: ${schedule.category}\n` +

      `Work Area: ${schedule.workArea}\n` +

      `Shift: ${schedule.shift}\n` +

      `Date: ${schedule.date}\n` +

      `Workers: ${schedule.workers}\n` +

      `Supervisor: ${schedule.supervisor}\n` +

      `Start Time: ${schedule.startTime}\n` +

      `End Time: ${schedule.endTime}\n` +

      `Status: ${schedule.status}`

    );

  }


  // =====================================================
  // EDIT SCHEDULE
  // =====================================================

  editSchedule(schedule: any): void {

    alert(
      `Edit shift schedule for ${schedule.id}.`
    );

  }


  // =====================================================
  // DELETE SCHEDULE
  // =====================================================

  deleteSchedule(schedule: any): void {

    const confirmed = confirm(

      `Are you sure you want to delete ` +
      `shift schedule ${schedule.id}?`

    );


    if (confirmed) {

      const index =
        this.schedules.indexOf(schedule);

      if (index !== -1) {

        this.schedules.splice(index, 1);

      }

    }

  }

}