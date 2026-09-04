import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './notifications-page.html',
  styleUrl: './notifications-page.css'
})
export class NotificationsPage {

  selectedFilter = 'All';

  totalNotifications = 24;
  unreadNotifications = 5;
  readNotifications = 19;

  filters = [
    'All',
    'Unread',
    'Project Updates',
    'Task Assignments',
    'Procurement Alerts',
    'Attendance Alerts',
    'Deadline Notifications',
    'System Notifications'
  ];

  notifications = [
    {
      id: 1,
      title: 'Project Status Updated',
      type: 'Project Updates',
      icon: '📊',
      message: 'Project ABC has been moved to In Progress.',
      date: '02 Sep 2026',
      time: '10:30 AM',
      related: 'Project ABC',
      priority: 'Medium',
      read: false
    },
    {
      id: 2,
      title: 'New Task Assigned',
      type: 'Task Assignments',
      icon: '✓',
      message: 'You have been assigned the Foundation Inspection task.',
      date: '02 Sep 2026',
      time: '10:15 AM',
      related: 'Foundation Inspection',
      priority: 'High',
      read: false
    },
    {
      id: 3,
      title: 'Procurement Approval Required',
      type: 'Procurement Alerts',
      icon: '🛒',
      message: 'Purchase request PR-104 requires your approval.',
      date: '02 Sep 2026',
      time: '09:45 AM',
      related: 'PR-104',
      priority: 'High',
      read: false
    },
    {
      id: 4,
      title: 'Attendance Alert',
      type: 'Attendance Alerts',
      icon: '👷',
      message: 'Attendance has not been marked for 5 workers.',
      date: '02 Sep 2026',
      time: '09:00 AM',
      related: 'Site Workforce',
      priority: 'Medium',
      read: false
    },
    {
      id: 5,
      title: 'Deadline Approaching',
      type: 'Deadline Notifications',
      icon: '⏰',
      message: 'Foundation inspection deadline is tomorrow.',
      date: '02 Sep 2026',
      time: '08:30 AM',
      related: 'Foundation Inspection',
      priority: 'High',
      read: false
    },
    {
      id: 6,
      title: 'System Notification',
      type: 'System Notifications',
      icon: '⚙',
      message: 'Scheduled system maintenance is planned for tonight.',
      date: '01 Sep 2026',
      time: '06:00 PM',
      related: 'System',
      priority: 'Low',
      read: true
    }
  ];

  get filteredNotifications() {
    if (this.selectedFilter === 'All') {
      return this.notifications;
    }

    if (this.selectedFilter === 'Unread') {
      return this.notifications.filter(
        notification => !notification.read
      );
    }

    return this.notifications.filter(
      notification => notification.type === this.selectedFilter
    );
  }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  markAllAsRead(): void {
    this.notifications.forEach(notification => {
      notification.read = true;
    });

    this.unreadNotifications = 0;
    this.readNotifications = this.totalNotifications;
  }

  markAsRead(id: number): void {
    const notification = this.notifications.find(
      item => item.id === id
    );

    if (notification && !notification.read) {
      notification.read = true;

      if (this.unreadNotifications > 0) {
        this.unreadNotifications--;
      }

      this.readNotifications++;
    }
  }

  getPriorityClass(priority: string): string {
    return priority.toLowerCase();
  }

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
}