import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-se-notifications',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './se-notifications.html',
  styleUrl: './se-notifications.css'
})
export class SeNotifications {

  sidebarOpen = false;

  searchText = '';
  selectedFilter = 'All';

  notifications = [
    {
      id: 1,
      title: 'Daily Progress Update Required',
      message: 'Please submit today’s construction progress report.',
      type: 'Project',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      title: 'Equipment Maintenance Alert',
      message: 'Concrete Mixer CM-102 requires scheduled maintenance.',
      type: 'Equipment',
      time: '35 minutes ago',
      read: false
    },
    {
      id: 3,
      title: 'Material Stock Running Low',
      message: 'Cement stock has reached the minimum inventory level.',
      type: 'Resource',
      time: '1 hour ago',
      read: false
    },
    {
      id: 4,
      title: 'New Project Manager Message',
      message: 'Please verify the progress of the City Mall project.',
      type: 'Message',
      time: '2 hours ago',
      read: true
    },
    {
      id: 5,
      title: 'Worker Attendance Updated',
      message: 'Today’s worker attendance has been successfully updated.',
      type: 'Worker',
      time: '3 hours ago',
      read: true
    },
    {
      id: 6,
      title: 'Weekly Report Approved',
      message: 'Your weekly report has been approved by the Project Manager.',
      type: 'Report',
      time: 'Yesterday',
      read: true
    }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  get filteredNotifications() {
    return this.notifications.filter(notification => {

      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        notification.title.toLowerCase().includes(search) ||
        notification.message.toLowerCase().includes(search) ||
        notification.type.toLowerCase().includes(search);

      const matchesFilter =
        this.selectedFilter === 'All' ||
        (this.selectedFilter === 'Unread' && !notification.read) ||
        (this.selectedFilter === 'Read' && notification.read);

      return matchesSearch && matchesFilter;
    });
  }

  get unreadCount(): number {
    return this.notifications.filter(
      notification => !notification.read
    ).length;
  }

  get readCount(): number {
    return this.notifications.filter(
      notification => notification.read
    ).length;
  }

  markAsRead(notification: any): void {
    notification.read = true;
  }

  markAsUnread(notification: any): void {
    notification.read = false;
  }

  markAllAsRead(): void {
    this.notifications.forEach(notification => {
      notification.read = true;
    });
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(
      notification => notification.id !== id
    );
  }
}