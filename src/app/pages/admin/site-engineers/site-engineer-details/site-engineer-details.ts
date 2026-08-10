import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-site-engineer-details',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule
  ],
  templateUrl: './site-engineer-details.html',
  styleUrl: './site-engineer-details.css'
})
export class SiteEngineerDetails {

  showDeletePopup = false;
  showSuccessPopup = false;

  openDeletePopup() {

    this.showDeletePopup = true;

  }

  cancelDelete() {

    this.showDeletePopup = false;

  }

  deleteEngineer() {

    this.showDeletePopup = false;
    this.showSuccessPopup = true;

  }

  closeSuccessPopup() {

    this.showSuccessPopup = false;

  }

}