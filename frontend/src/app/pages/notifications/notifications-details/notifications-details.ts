import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notifications-details.html',
  styleUrl: './notifications-details.css'
})
export class NotificationsDetails {

  notificationId = 1;

  notifications = [
    {
      id: 1,
      title: 'Project Status Updated',
      type: 'Project Updates',
      icon: '📊',
      message: 'Project ABC has been moved to In Progress.',
      description:
        'The project status has been updated from Planning to In Progress. This change indicates that the project activities have officially started.',
      date: '02 Sep 2026',
      time: '10:30 AM',
      related: 'Project ABC',
      relatedId: 'PRJ-001',
      priority: 'Medium',
      sender: 'Project Manager',
      recipient: 'Administrator',
      read: false
    },

    {
      id: 2,
      title: 'New Task Assigned',
      type: 'Task Assignments',
      icon: '✓',
      message: 'You have been assigned the Foundation Inspection task.',
      description:
        'A new task has been assigned to you. Please review the task requirements and complete the Foundation Inspection within the scheduled timeline.',
      date: '02 Sep 2026',
      time: '10:15 AM',
      related: 'Foundation Inspection',
      relatedId: 'TASK-002',
      priority: 'High',
      sender: 'Project Manager',
      recipient: 'Site Engineer',
      read: false
    },

    {
      id: 3,
      title: 'Procurement Approval Required',
      type: 'Procurement Alerts',
      icon: '🛒',
      message: 'Purchase request PR-104 requires your approval.',
      description:
        'A procurement request has been submitted and is waiting for your approval. Please review the purchase request and take the required action.',
      date: '02 Sep 2026',
      time: '09:45 AM',
      related: 'Purchase Request',
      relatedId: 'PR-104',
      priority: 'High',
      sender: 'Procurement Team',
      recipient: 'Project Manager',
      read: false
    },

    {
      id: 4,
      title: 'Attendance Alert',
      type: 'Attendance Alerts',
      icon: '👷',
      message: 'Attendance has not been marked for 5 workers.',
      description:
        'The attendance record for five workers is currently incomplete. Please review the workforce attendance information and update the missing records.',
      date: '02 Sep 2026',
      time: '09:00 AM',
      related: 'Site Workforce',
      relatedId: 'ATT-005',
      priority: 'Medium',
      sender: 'Attendance System',
      recipient: 'Site Engineer',
      read: false
    },

    {
      id: 5,
      title: 'Deadline Approaching',
      type: 'Deadline Notifications',
      icon: '⏰',
      message: 'Foundation inspection deadline is tomorrow.',
      description:
        'The Foundation Inspection task is approaching its deadline. Please ensure that the required inspection activities are completed before the due date.',
      date: '02 Sep 2026',
      time: '08:30 AM',
      related: 'Foundation Inspection',
      relatedId: 'TASK-002',
      priority: 'High',
      sender: 'Notification System',
      recipient: 'Site Engineer',
      read: false
    },

    {
      id: 6,
      title: 'System Notification',
      type: 'System Notifications',
      icon: '⚙',
      message: 'Scheduled system maintenance is planned for tonight.',
      description:
        'The BuildTrack system will undergo scheduled maintenance tonight. Some services may be temporarily unavailable during the maintenance period.',
      date: '01 Sep 2026',
      time: '06:00 PM',
      related: 'System',
      relatedId: 'SYS-001',
      priority: 'Low',
      sender: 'System Administrator',
      recipient: 'All Authorized Users',
      read: true
    }
  ];

  notification = this.notifications[0];

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.notificationId = Number(id);
    }

    const selectedNotification = this.notifications.find(
      item => item.id === this.notificationId
    );

    if (selectedNotification) {
      this.notification = selectedNotification;
    }
  }

  markAsRead(): void {
    this.notification.read = true;
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