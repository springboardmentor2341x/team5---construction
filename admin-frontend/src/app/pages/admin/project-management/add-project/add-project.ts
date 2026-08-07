import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {

  showSuccessPopup = false;

  constructor(private router: Router) {}

  createProject() {

    this.showSuccessPopup = true;

  }

  closePopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/project-details']);

  }

}