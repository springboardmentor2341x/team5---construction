import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {

  showSuccessPopup = false;

  constructor(private router: Router) {}

  createUser() {
    this.showSuccessPopup = true;
  }

  closePopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/admin/dashboard']);

  }

}