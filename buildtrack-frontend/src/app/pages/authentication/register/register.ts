import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';


import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  hidePassword = true;
  hideConfirmPassword = true;
  selectedFileName = '';

imagePreview: string | ArrayBuffer | null = null;

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {

this.registerForm = this.fb.group({

  fullName: [
    '',
    [
      Validators.required,
      Validators.pattern('^[A-Za-z ]+$')
    ]
  ],

  email: [
    '',
    [
      Validators.required,
      Validators.email
    ]
  ],

  mobile: [
    '',
    [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]
  ],

  employeeId: [
    '',
    Validators.required
  ],

  role: [
    '',
    Validators.required
  ],

  department: [
    '',
    Validators.required
  ],

  password: [
    '',
    [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$')
    ]
  ],

  confirmPassword: [
    '',
    Validators.required
  ],

  address: ['']

},
{
  validators: this.passwordMatchValidator
});

}
passwordMatchValidator(control: AbstractControl): ValidationErrors | null {

  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password === confirmPassword) {
    return null;
  }

  return { passwordMismatch: true };

}
onFileSelected(event: Event): void {

  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];

  this.selectedFileName = file.name;

  const reader = new FileReader();

  reader.onload = () => {
    this.imagePreview = reader.result;
  };

  reader.readAsDataURL(file);

}
onSubmit(): void {

  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  console.log(this.registerForm.value);

  alert('Registration Successful!');

}

}