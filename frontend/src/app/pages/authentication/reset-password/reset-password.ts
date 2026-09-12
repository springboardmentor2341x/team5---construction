import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})
export class ResetPasswordComponent {

  hidePassword = true;
  hideConfirmPassword = true;

  resetForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.resetForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
            )
          ]
        ],

        confirmPassword: [
          '',
          Validators.required
        ]
      },
      {
        validators: this.passwordMatchValidator
      }
    );

  }

  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {

    if (this.resetForm.valid) {

      console.log(this.resetForm.value);

      // Backend API call later

      alert('Password reset successfully!');

    }

  }

}