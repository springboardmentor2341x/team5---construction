import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NotificationsSidebar } from './notifications-sidebar/notifications-sidebar';
import { NotificationsTopNavbar } from './notifications-top-navbar/notifications-top-navbar';

@Component({
  selector: 'app-notifications-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NotificationsSidebar,
    NotificationsTopNavbar
  ],
  templateUrl: './notifications-layout.html',
  styleUrl: './notifications-layout.css'
})
export class NotificationsLayout {
}