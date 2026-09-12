import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectService, Project, ProjectCreate } from '../../../../services/project';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-project.html',
  styleUrl: './edit-project.css'
})
export class EditProject implements OnInit {

  projectId!: number;
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
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.projectId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadProject();
  }

  loadProject() {
    this.projectService.getProjectById(this.projectId).subscribe({
      next: (project: Project) => {

      this.projectData = {
  project_code: project.project_code ?? '',
  name: project.name ?? '',
  description: project.description ?? '',
  category: project.category ?? '',
  location: project.location ?? '',
  estimated_budget: Number(project.estimated_budget ?? 0),
  priority: project.priority ?? '',
  status: project.status ?? 'Planning',
  planned_start_date: project.planned_start_date ?? '',
  expected_completion_date: project.expected_completion_date ?? '',
  project_manager_id: project.project_manager_id ?? 0,
  client_id: project.client_id ?? 0
};

this.cdr.detectChanges()
      },
      error: (error) => {
        console.error('Get project error:', error);
      }
    });
  }

  updateProject() {

    console.log('Updating project:', this.projectData);

    this.projectService
      .updateProject(this.projectId, this.projectData)
      .subscribe({
        next: (response) => {

          console.log(
            'Project updated successfully:',
            response
          );

          this.showSuccessPopup = true;
        },

        error: (error) => {
          console.error(
            'Update project error:',
            error
          );
        }
      });
  }

  closePopup() {
    this.showSuccessPopup = false;

    this.router.navigate(['/project-details']);
  }
}