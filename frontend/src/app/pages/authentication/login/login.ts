import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { Footer } from '../../../shared/components/footer/footer';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  RouterLink,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  Footer
],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';
  hidePassword = true;
  rememberMe = false;

  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    this.errorMessage = '';
    this.isLoading = true;

    const loginData = {
      email: this.email,
      password: this.password,
      remember_me: this.rememberMe
    };

    this.authService.login(loginData).subscribe({

      next: (response) => {

        console.log('Login successful:', response);

        // Store JWT
        localStorage.setItem(
          'access_token',
          response.access_token
        );

        // Store user information
        localStorage.setItem(
          'role',
          response.role
        );

        localStorage.setItem(
          'full_name',
          response.full_name
        );

        localStorage.setItem(
          'expires_at',
          response.expires_at
        );

        this.isLoading = false;

        // Redirect based on role
        if (response.role === 'Administrator') {
          this.router.navigate(['/admin/dashboard']);
        }
        else if (response.role === 'Project Manager') {
          this.router.navigate(['/project-manager/dashboard']);
        }
        else if (response.role === 'Site Engineer') {
          this.router.navigate(['/site-engineer/dashboard']);
        }
        else {
          this.router.navigate(['/']);
        }
      },

      error: (error) => {

        console.error('Login error:', error);

        this.isLoading = false;

        if (error.error?.detail) {
          this.errorMessage = error.error.detail;
        } else {
          this.errorMessage =
            'Unable to connect to the server.';
        }
      }

    });
  }
}