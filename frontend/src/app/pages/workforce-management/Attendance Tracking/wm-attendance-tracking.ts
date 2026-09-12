import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wm-attendance-tracking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wm-attendance-tracking.html',
  styleUrl: './wm-attendance-tracking.css'
})
export class WmAttendanceTrackingComponent {

  // =====================================================
  // SELECTED DATE
  // =====================================================

  selectedDate = '2026-08-24';


  // =====================================================
  // ATTENDANCE RECORDS
  // =====================================================

  attendanceRecords = [

    {
      id: 'AT-001',
      worker: 'Rajesh Kumar',
      category: 'Skilled Worker',
      project: 'Chennai Metro Construction',
      date: '2026-08-24',
      shift: 'Morning',
      checkIn: '08:05 AM',
      checkOut: '05:10 PM',
      status: 'Present'
    },

    {
      id: 'AT-002',
      worker: 'Arun Prakash',
      category: 'Engineer',
      project: 'Green Valley Apartments',
      date: '2026-08-24',
      shift: 'General',
      checkIn: '08:45 AM',
      checkOut: '05:30 PM',
      status: 'Late'
    },

    {
      id: 'AT-003',
      worker: 'Suresh Babu',
      category: 'Unskilled Worker',
      project: 'Airport Expansion',
      date: '2026-08-24',
      shift: 'Evening',
      checkIn: '02:00 PM',
      checkOut: '10:00 PM',
      status: 'Present'
    },

    {
      id: 'AT-004',
      worker: 'Vijay Kumar',
      category: 'Supervisor',
      project: 'Highway Development',
      date: '2026-08-24',
      shift: 'Morning',
      checkIn: '--',
      checkOut: '--',
      status: 'Absent'
    },

    {
      id: 'AT-005',
      worker: 'Karthik Raj',
      category: 'Skilled Worker',
      project: 'Chennai Metro Construction',
      date: '2026-08-24',
      shift: 'General',
      checkIn: '08:15 AM',
      checkOut: '05:00 PM',
      status: 'Present'
    },

    {
      id: 'AT-006',
      worker: 'Mohammed Irfan',
      category: 'Electrician',
      project: 'Green Valley Apartments',
      date: '2026-08-24',
      shift: 'Morning',
      checkIn: '08:20 AM',
      checkOut: '05:15 PM',
      status: 'Present'
    },

    {
      id: 'AT-007',
      worker: 'Prakash Raj',
      category: 'Plumber',
      project: 'Airport Expansion',
      date: '2026-08-24',
      shift: 'General',
      checkIn: '08:10 AM',
      checkOut: '05:00 PM',
      status: 'Present'
    },

    {
      id: 'AT-008',
      worker: 'Manoj Kumar',
      category: 'Helper',
      project: 'Highway Development',
      date: '2026-08-24',
      shift: 'Morning',
      checkIn: '09:00 AM',
      checkOut: '05:30 PM',
      status: 'Late'
    }

  ];


  // =====================================================
  // TOTAL WORKERS
  // =====================================================

  get totalWorkers(): number {

    return this.attendanceRecords.length;

  }


  // =====================================================
  // PRESENT COUNT
  // =====================================================

  get presentCount(): number {

    return this.attendanceRecords.filter(
      record => record.status === 'Present'
    ).length;

  }


  // =====================================================
  // ABSENT COUNT
  // =====================================================

  get absentCount(): number {

    return this.attendanceRecords.filter(
      record => record.status === 'Absent'
    ).length;

  }


  // =====================================================
  // LATE COUNT
  // =====================================================

  get lateCount(): number {

    return this.attendanceRecords.filter(
      record => record.status === 'Late'
    ).length;

  }


  // =====================================================
  // STATUS CLASS
  // =====================================================

  getStatusClass(status: string): string {

    switch (status.toLowerCase()) {

      case 'present':
        return 'status-present';

      case 'absent':
        return 'status-absent';

      case 'late':
        return 'status-late';

      case 'leave':
        return 'status-leave';

      default:
        return '';

    }

  }


  // =====================================================
  // MARK ATTENDANCE
  // =====================================================

  markAttendance(): void {

    alert(
      'Attendance marking screen is ready.'
    );

  }


  // =====================================================
  // FILTER ATTENDANCE
  // =====================================================

  filterAttendance(): void {

    alert(
      `Attendance filtered for ${this.selectedDate}.`
    );

  }


  // =====================================================
  // VIEW ATTENDANCE
  // =====================================================

  viewAttendance(record: any): void {

    alert(
      `Attendance Details\n\n` +

      `Attendance ID: ${record.id}\n` +

      `Worker: ${record.worker}\n` +

      `Category: ${record.category}\n` +

      `Project: ${record.project}\n` +

      `Date: ${record.date}\n` +

      `Shift: ${record.shift}\n` +

      `Check In: ${record.checkIn}\n` +

      `Check Out: ${record.checkOut}\n` +

      `Status: ${record.status}`
    );

  }


  // =====================================================
  // EDIT ATTENDANCE
  // =====================================================

  editAttendance(record: any): void {

    alert(
      `Edit attendance for ${record.worker}.`
    );

  }

}
