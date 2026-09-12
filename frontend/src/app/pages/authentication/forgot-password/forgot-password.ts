import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPasswordComponent {

  forgotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.forgotForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });

  }

  sendOTP() {

    if (this.forgotForm.valid) {

      console.log(this.forgotForm.value);

      // Backend API here

      this.router.navigate(['/verify-otp']);

    }

  }

}