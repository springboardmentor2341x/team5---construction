import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LiveProjectTable } from '../../../../shared/components/live-project-table/live-project-table';
import {  ChangeDetectorRef } from '@angular/core';
import { Project, ProjectService } from '../../../../services/project';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
   CommonModule,
    FormsModule,
    LiveProjectTable
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
    project: Project[] = [];
  constructor(private ProjectService:ProjectService, private cdr:ChangeDetectorRef ){}

  ngOnInit():void{
this.getAllProjects()
  }

  getAllProjects(): void{
    this.ProjectService.getAllProjects().subscribe({
      next: (data)=>{
        console.log('My Projects:', data);
         this.project = data;
        this.cdr.detectChanges()
      },
      error: (error)=>{
          console.log('live-project-table error:', error)
      }
    })
  }

  getActiveProjects() {
    return this.project.filter(
      project => project.status === 'Ongoing'
    ).length;
  }
  getCompletedProjects() {
    return this.project.filter(
      project => project.status === 'Completed'
    ).length;
  }
  getDelayedProjects() {
    return this.project.filter(
      project => project.status === 'Delayed'
    ).length;
  }
   getOnHoldProjects() {
    return this.project.filter(
      project => project.status === 'Delayed'
    ).length;
  }

}