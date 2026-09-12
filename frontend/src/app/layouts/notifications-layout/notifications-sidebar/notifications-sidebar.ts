import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notifications-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './notifications-sidebar.html',
  styleUrl: './notifications-sidebar.css'
})
export class NotificationsSidebar {
}