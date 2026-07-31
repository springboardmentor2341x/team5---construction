import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pm-notifications.html',
  styleUrls: ['./pm-notifications.css']
})
export class NotificationsComponent {

  searchText: string = '';

  selectedType: string = 'All Notifications';

  notifications = [

    {
      id: 'NOT001',
      type: 'Deadline Alert',
      message: 'Foundation work deadline is tomorrow.',
      date: '30-07-2026',
      status: 'Pending'
    },

    {
      id: 'NOT002',
      type: 'Budget Alert',
      message: 'Project budget utilization reached 80%.',
      date: '29-07-2026',
      status: 'Viewed'
    },

    {
      id: 'NOT003',
      type: 'Delay',
      message: 'Electrical work delayed due to heavy rainfall.',
      date: '28-07-2026',
      status: 'Pending'
    },

    {
      id: 'NOT004',
      type: 'Material Update',
      message: 'Steel materials delivered successfully.',
      date: '27-07-2026',
      status: 'Viewed'
    },

    {
      id: 'NOT005',
      type: 'Engineer Update',
      message: 'Site Engineer submitted today\'s progress report.',
      date: '26-07-2026',
      status: 'Pending'
    }

  ];

  searchNotification(): void {

    alert('Searching Notifications...');

  }

  viewNotification(notificationId: string): void {

    alert('Viewing Notification : ' + notificationId);

  }

}