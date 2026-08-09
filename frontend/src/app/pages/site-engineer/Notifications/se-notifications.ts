import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterLink,  } from '@angular/router';
import { CommonModule } from '@angular/common';

//RouterLinkActive
interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-se-notifications',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './se-notifications.html',
  styleUrl: './se-notifications.css'
})
export class SeNotifications {

  //sidebarOpen = false;

  searchText = '';
  selectedFilter = 'All';

  notifications: Notification[] = [

    {
      id: 1,
      title: 'New Task Assigned',
      message: 'Project Manager assigned a new foundation inspection task.',
      type: 'Task',
      time: '10 min ago',
      read: false
    },

    {
      id: 2,
      title: 'Daily Progress Approved',
      message: 'Your daily progress report has been approved.',
      type: 'Report',
      time: '1 hour ago',
      read: true
    },

    {
      id: 3,
      title: 'Equipment Maintenance',
      message: 'Concrete Mixer maintenance is scheduled for tomorrow.',
      type: 'Equipment',
      time: '3 hours ago',
      read: false
    },

    {
      id: 4,
      title: 'Material Request Approved',
      message: 'Requested cement bags have been approved.',
      type: 'Resources',
      time: 'Yesterday',
      read: true
    },

    {
      id: 5,
      title: 'Safety Inspection',
      message: 'Safety inspection has been scheduled for today at 4 PM.',
      type: 'Safety',
      time: '2 days ago',
      read: false
    }

  ];

  // toggleSidebar(): void {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  // closeSidebar(): void {
  //   this.sidebarOpen = false;
  // }
    get filteredNotifications() {

    return this.notifications.filter((notification) => {

      const matchesSearch =
        notification.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        notification.message.toLowerCase().includes(this.searchText.toLowerCase()) ||
        notification.type.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesFilter =
        this.selectedFilter === 'All' ||
        (this.selectedFilter === 'Read' && notification.read) ||
        (this.selectedFilter === 'Unread' && !notification.read);

      return matchesSearch && matchesFilter;

    });

  }

  get unreadCount(): number {
    return this.notifications.filter(notification => !notification.read).length;
  }

  get readCount(): number {
    return this.notifications.filter(notification => notification.read).length;
  }

  markAsRead(notification: Notification): void {
    notification.read = true;
  }

  markAsUnread(notification: Notification): void {
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