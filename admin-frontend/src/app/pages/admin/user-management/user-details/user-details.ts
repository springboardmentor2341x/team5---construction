import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule
  ],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {

  showDeletePopup = false;

  showSuccessPopup = false;

  openDeletePopup() {

    this.showDeletePopup = true;

  }

  cancelDelete() {

    this.showDeletePopup = false;

  }

  deleteUser() {

    this.showDeletePopup = false;

    this.showSuccessPopup = true;

  }

  constructor(private router: Router){}

closeSuccessPopup() {

  this.showSuccessPopup = false;

  this.router.navigate(['/admin/user-details']);

}

}