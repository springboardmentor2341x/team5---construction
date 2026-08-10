import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {

  showDeletePopup = false;

  showSuccessPopup = false;

  constructor(private router: Router){}

  openDeletePopup(){

    this.showDeletePopup = true;

  }

  cancelDelete(){

    this.showDeletePopup = false;

  }

  deleteProject(){

    this.showDeletePopup = false;

    this.showSuccessPopup = true;

  }

  closeSuccessPopup(){

    this.showSuccessPopup = false;

    this.router.navigate(['/admin/projects']);

  }

}