import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './notifications-dropdown.html',
  styleUrl: './notifications-dropdown.css'
})
export class NotificationsDropdown {
}