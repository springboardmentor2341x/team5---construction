import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [],
  templateUrl: './edit-project.html',
  styleUrl: './edit-project.css'
})
export class EditProject {

  showSuccessPopup = false;

  constructor(private router: Router) {}

  updateProject() {

    this.showSuccessPopup = true;

  }

  closePopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/project-details']);

  }

}