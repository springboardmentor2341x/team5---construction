import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  standalone: true,
  imports: [],
  templateUrl: './welcome-banner.html',
  styleUrl: './welcome-banner.css',
})
export class WelcomeBanner {

  currentDate = new Date();

  day = this.currentDate.toLocaleDateString('en-US', {
    weekday: 'long'
  });

  date = this.currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  time = this.currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

}