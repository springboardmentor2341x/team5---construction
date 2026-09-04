import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-management.html',
  styleUrl: './notifications-management.css'
})
export class NotificationsManagement {

  // ================================
  // FILTER
  // ================================

  selectedFilter = 'All';

  filters = [
    'All',
    'Unread',
    'Read'
  ];


  // ================================
  // NOTIFICATION SETTINGS
  // ================================

  notificationSettings = [

    {
      name: 'Project Updates',
      description:
        'Notifications about project status and progress updates.',
      enabled: true
    },

    {
      name: 'Task Assignments',
      description:
        'Alerts when a new task is assigned or reassigned.',
      enabled: true
    },

    {
      name: 'Procurement Alerts',
      description:
        'Notifications for purchase requests and approvals.',
      enabled: true
    },

    {
      name: 'Attendance Alerts',
      description:
        'Alerts related to workforce attendance.',
      enabled: true
    },

    {
      name: 'Deadline Notifications',
      description:
        'Reminders about upcoming and missed deadlines.',
      enabled: true
    },

    {
      name: 'System Notifications',
      description:
        'Important system and maintenance notifications.',
      enabled: true
    }

  ];


  // ================================
  // NOTIFICATION DATA
  // ================================

  notifications = [

    {
      id: 'NOT-001',
      title: 'Project Status Updated',
      type: 'Project Updates',
      recipient: 'Project Manager',
      date: '02 Sep 2026',
      time: '10:30 AM',
      status: 'Unread'
    },

    {
      id: 'NOT-002',
      title: 'New Task Assigned',
      type: 'Task Assignments',
      recipient: 'Site Engineer',
      date: '02 Sep 2026',
      time: '10:15 AM',
      status: 'Unread'
    },

    {
      id: 'NOT-003',
      title: 'Procurement Approval Required',
      type: 'Procurement Alerts',
      recipient: 'Administrator',
      date: '02 Sep 2026',
      time: '09:45 AM',
      status: 'Unread'
    },

    {
      id: 'NOT-004',
      title: 'Attendance Alert',
      type: 'Attendance Alerts',
      recipient: 'Site Engineer',
      date: '02 Sep 2026',
      time: '09:00 AM',
      status: 'Read'
    },

    {
      id: 'NOT-005',
      title: 'Deadline Approaching',
      type: 'Deadline Notifications',
      recipient: 'Project Manager',
      date: '02 Sep 2026',
      time: '08:30 AM',
      status: 'Unread'
    },

    {
      id: 'NOT-006',
      title: 'System Notification',
      type: 'System Notifications',
      recipient: 'All Users',
      date: '01 Sep 2026',
      time: '06:00 PM',
      status: 'Read'
    }

  ];


  // ================================
  // SUMMARY COUNTS
  // ================================

  get totalNotifications(): number {
    return this.notifications.length;
  }


  get unreadNotifications(): number {
    return this.notifications.filter(
      notification => notification.status === 'Unread'
    ).length;
  }


  get readNotifications(): number {
    return this.notifications.filter(
      notification => notification.status === 'Read'
    ).length;
  }


  // ================================
  // FILTERED NOTIFICATIONS
  // ================================

  get filteredNotifications() {

    if (this.selectedFilter === 'All') {
      return this.notifications;
    }

    return this.notifications.filter(
      notification =>
        notification.status === this.selectedFilter
    );
  }


  // ================================
  // SELECT FILTER
  // ================================

  selectFilter(filter: string): void {

    this.selectedFilter = filter;

  }


  // ================================
  // TOGGLE SETTING
  // ================================

  toggleSetting(index: number): void {

    this.notificationSettings[index].enabled =
      !this.notificationSettings[index].enabled;

  }


  // ================================
  // ENABLE ALL
  // ================================

  enableAll(): void {

    this.notificationSettings.forEach(setting => {

      setting.enabled = true;

    });

  }


  // ================================
  // DISABLE ALL
  // ================================

  disableAll(): void {

    this.notificationSettings.forEach(setting => {

      setting.enabled = false;

    });

  }


  // ================================
  // TYPE CLASS
  // ================================

  getTypeClass(type: string): string {

    switch (type) {

      case 'Project Updates':
        return 'project';

      case 'Task Assignments':
        return 'task';

      case 'Procurement Alerts':
        return 'procurement';

      case 'Attendance Alerts':
        return 'attendance';

      case 'Deadline Notifications':
        return 'deadline';

      case 'System Notifications':
        return 'system';

      default:
        return '';

    }

  }


  // ================================
  // STATUS CLASS
  // ================================

  getStatusClass(status: string): string {

    return status.toLowerCase();

  }


  // ================================
  // VIEW NOTIFICATION
  // ================================

  viewNotification(id: string): void {

    console.log('Viewing notification:', id);

  }

}