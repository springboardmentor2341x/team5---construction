import { Component,  ChangeDetectorRef } from '@angular/core';
import { Project, ProjectService } from '../../../services/project';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-live-project-table',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './live-project-table.html',
  styleUrl: './live-project-table.css',
})
export class LiveProjectTable {

   project: Project[] = [];
  constructor(private ProjectService:ProjectService, private cdr:ChangeDetectorRef
    
   ){}

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


}
