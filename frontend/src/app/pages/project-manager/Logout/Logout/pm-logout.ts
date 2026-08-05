import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './pm-logout.html',
  styleUrls: ['./pm-logout.css']
})
export class LogoutComponent {

  constructor(private router: Router) {}

  logout(): void {

    // Clear login data
    localStorage.removeItem('isLoggedIn');

    // Navigate to Login Page
    this.router.navigate(['/login']);

  }

  cancel(): void {

    // Return to Dashboard
    this.router.navigate(['/project-manager/dashboard']);

  }

}