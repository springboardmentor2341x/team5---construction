import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectService } from '../../../../services/project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {

 project!: Project;

  projectId!: number;

  showDeletePopup = false;

  showSuccessPopup = false;

  constructor(private router: Router, private route:ActivatedRoute,
    private ProjectService:ProjectService, private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void{
    this.projectId = Number(this.route.snapshot.paramMap.get('id'))
    console.log('project Id ', this.projectId)

   this.getProjectById();
    
  }

  getProjectById(): void{
      this.ProjectService.getProjectById(this.projectId).subscribe({
      next: (data)=>{
        this.project = data
        console.log('project detail', data)
        this.cdr.detectChanges()
      },
       error: (error) => {
        console.error('Error:', error);
      }
    })
  }


}