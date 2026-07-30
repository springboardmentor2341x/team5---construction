import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-se-activity-logs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './se-activity-logs.html',
  styleUrl: './se-activity-logs.css'
})
export class SeActivityLogs {

  sidebarOpen = false;

  searchText = '';
  selectedStatus = 'All';
  selectedDate = '';

  activities = [
    {
      id: 'ACT-001',
      title: 'Daily Progress Updated',
      description: 'Updated construction progress for the current site work.',
      project: 'City Mall Construction',
      performedBy: 'Site Engineer',
      date: '29 Jul 2026',
      time: '10:30 AM',
      status: 'Completed'
    },
    {
      id: 'ACT-002',
      title: 'Material Stock Checked',
      description: 'Verified cement and steel inventory at the construction site.',
      project: 'City Mall Construction',
      performedBy: 'Site Engineer',
      date: '29 Jul 2026',
      time: '09:45 AM',
      status: 'Completed'
    },
    {
      id: 'ACT-003',
      title: 'Equipment Inspection',
      description: 'Concrete mixer inspection is currently in progress.',
      project: 'Green Valley Residential Project',
      performedBy: 'Site Engineer',
      date: '28 Jul 2026',
      time: '03:20 PM',
      status: 'In Progress'
    },
    {
      id: 'ACT-004',
      title: 'Safety Inspection',
      description: 'Site safety inspection is waiting for completion.',
      project: 'Highway Expansion Project',
      performedBy: 'Site Engineer',
      date: '28 Jul 2026',
      time: '11:15 AM',
      status: 'Pending'
    },
    {
      id: 'ACT-005',
      title: 'Worker Attendance Updated',
      description: 'Updated daily attendance records for workers.',
      project: 'Green Valley Residential Project',
      performedBy: 'Site Engineer',
      date: '27 Jul 2026',
      time: '05:10 PM',
      status: 'Completed'
    },
    {
      id: 'ACT-006',
      title: 'Progress Report Submitted',
      description: 'Weekly construction progress report submitted to the Project Manager.',
      project: 'Highway Expansion Project',
      performedBy: 'Site Engineer',
      date: '27 Jul 2026',
      time: '04:00 PM',
      status: 'In Progress'
    }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  get filteredActivities() {
    return this.activities.filter((activity) => {

      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        activity.title.toLowerCase().includes(search) ||
        activity.description.toLowerCase().includes(search) ||
        activity.project.toLowerCase().includes(search) ||
        activity.id.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        activity.status === this.selectedStatus;

      const matchesDate =
        !this.selectedDate ||
        activity.date === this.selectedDate;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }

  get totalActivities(): number {
    return this.activities.length;
  }

  get completedActivities(): number {
    return this.activities.filter(
      activity => activity.status === 'Completed'
    ).length;
  }

  get inProgressActivities(): number {
    return this.activities.filter(
      activity => activity.status === 'In Progress'
    ).length;
  }

  get pendingActivities(): number {
    return this.activities.filter(
      activity => activity.status === 'Pending'
    ).length;
  }
}