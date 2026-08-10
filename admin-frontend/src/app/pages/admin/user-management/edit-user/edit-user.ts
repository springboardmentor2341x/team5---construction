import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css'
})
export class EditUser {

  showSuccessPopup = false;

  constructor(private router: Router) {}

  updateUser() {

    this.showSuccessPopup = true;

  }

  closePopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/admin/user-details']);

  }

}