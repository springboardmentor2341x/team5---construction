import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  ProjectService,
  ProjectCreate
} from '../../../../services/project';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {

  showSuccessPopup = false;

  projectData: ProjectCreate = {
    project_code: '',
    name: '',
    description: '',
    category: '',
    location: '',
    estimated_budget: 0,
    priority: '',
    status: 'Planning',
    planned_start_date: '',
    expected_completion_date: '',
    project_manager_id: 0,
    client_id: 0
  };

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private cdr:ChangeDetectorRef
  ) {}

  createProject() {

    console.log('Sending project:', this.projectData);

    this.projectService.createProject(this.projectData).subscribe({

      next: (response) => {

        console.log('Project created successfully:', response);

        this.showSuccessPopup = true;
        this.cdr.detectChanges()
      },

      error: (error) => {

        console.error('Create project error:', error);

      }

    });
  }

  closePopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/admin/projects']);

  }

}