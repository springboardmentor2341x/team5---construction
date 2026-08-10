import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footer } from '../../../shared/footer/footer';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-login-rithvika',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule,
  RouterLink,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  Footer
],
  templateUrl: './login-rithvika.html',
  styleUrl: './login.css'
})
export class Login {


  
  loginForm: FormGroup;
hidePassword = true;
constructor(private fb: FormBuilder) {

  this.loginForm = this.fb.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
        )
      ]
    ],

    rememberMe: [false]

  });

}

 login() {

  if (this.loginForm.valid) {

    console.log(this.loginForm.value);

    // Later we'll call the backend API here

  }

}

}