import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Projectty, ProjectSiteEngineerService,ProjectSiteEngineer } from '../../../services/project-site-engineer.service';
import { Project, ProjectService } from '../../../services/project.service';
export interface Projectt {
  id: string;
  name: string;
  location: string;
  manager: string;
  startDate: string;
  deadline: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'Delayed';
  priority: 'High' | 'Medium' | 'Low';
}



@Component({
  selector: 'app-se-assigned-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './se-assigned-projects.html',
  styleUrl: './se-assigned-projects.css'
})
export class SeAssignedProjects {

  // Search
  searchTerm = '';

  // Filters
  selectedStatus = 'All';
  selectedPriority = 'All';

  // Project Data
  // projects: Project[] = [
  //   {
  //     id: 'PRJ-001',
  //     name: 'City Mall Construction',
  //     location: 'Lucknow',
  //     manager: 'Asma Khan',
  //     startDate: '10 Jun 2026',
  //     deadline: '30 Sep 2026',
  //     progress: 72,
  //     status: 'In Progress',
  //     priority: 'High'
  //   },
  //   {
  //     id: 'PRJ-002',
  //     name: 'Residential Tower',
  //     location: 'Ayodhya',
  //     manager: 'Rahul Sharma',
  //     startDate: '15 May 2026',
  //     deadline: '15 Aug 2026',
  //     progress: 86,
  //     status: 'In Progress',
  //     priority: 'High'
  //   },
  //   {
  //     id: 'PRJ-003',
  //     name: 'Highway Development',
  //     location: 'Sultanpur',
  //     manager: 'Amit Verma',
  //     startDate: '01 Apr 2026',
  //     deadline: '30 Jul 2026',
  //     progress: 95,
  //     status: 'Completed',
  //     priority: 'Medium'
  //   },
  //   {
  //     id: 'PRJ-004',
  //     name: 'Office Complex',
  //     location: 'Prayagraj',
  //     manager: 'Neha Singh',
  //     startDate: '20 Jun 2026',
  //     deadline: '20 Nov 2026',
  //     progress: 42,
  //     status: 'Delayed',
  //     priority: 'High'
  //   },
  //   {
  //     id: 'PRJ-005',
  //     name: 'Community Center',
  //     location: 'Varanasi',
  //     manager: 'Vikas Yadav',
  //     startDate: '05 Jul 2026',
  //     deadline: '10 Dec 2026',
  //     progress: 28,
  //     status: 'In Progress',
  //     priority: 'Low'
  //   }
  // ];


  getDummyProgress(projectId: number): number {

  const dummyProgress: { [key: number]: number } = {
    1: 72,
    2: 86,
    3: 95,
    4: 42,
    5: 28
  };

  return dummyProgress[projectId] ?? 0;
}


  // Filtered Projects
  get filteredProjects(): Project[] {

    return this.assignedProjectDetails.filter(project => {

      const search = this.searchTerm.toLowerCase().trim();

      const matchesSearch =
        project.name?.toLowerCase().includes(search) ||
        project.project_code.toLowerCase().includes(search) ||
        (project.location?.toLowerCase().includes(search) ?? false);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        project.status === this.selectedStatus;

      const matchesPriority =
        this.selectedPriority === 'All' ||
        project.priority === this.selectedPriority;

      return matchesSearch && matchesStatus && matchesPriority;

    });

  }

  // Dashboard Summary
  get totalProjects(): number {
    return this.assignedProjectDetails.length;
  }

  get inProgressProjects(): number {
    return this.assignedProjectDetails.filter(
      p => p.status === 'In Progress'
    ).length;
  }

  get completedProjects(): number {
    return this.assignedProjectDetails.filter(
      p => p.status === 'Completed'
    ).length;
  }

  get delayedProjects(): number {
    return this.assignedProjectDetails.filter(
      p => p.status === 'Delayed'
    ).length;
  }

   // Assignment data
    assinprojects: ProjectSiteEngineer[] = [];

  // Projects which are actually assigned to this Site Engineer
  assignedProjectDetails: Project[] = [];

constructor(private ProjectSiteEngineerService:ProjectSiteEngineerService,
  private projectService:ProjectService
){}

  ngOnInit(): any {
    this.getAssignedProjects();
  }

  getAssignedProjects(): any {
    this.ProjectSiteEngineerService.getAllAssignments().subscribe({
      next:(assignments)=>{
     console.log('Assignments:', assignments);
        this.assinprojects = assignments;
        console.log(this.assinprojects)

        // Get project IDs from assignments
        const projectIds = assignments.map(assignment => assignment.project_id);
         console.log('Assigned Project IDs:', projectIds);

        //  second API call
        this.projectService.getAllProjects().subscribe({
          next: (projects) =>{
            
            console.log('All Projects:', projects);

            // Only matching project_id

            this.assignedProjectDetails = projects.filter(
              project  => projectIds.includes(project.project_id)
            );

               console.log('Assigned Project Details:',this.assignedProjectDetails );
               console.log('Assigned Project idddd:',this.assignedProjectDetails );

          },
           error: (error) => {
            console.error(
              'Error while getting projects:',
              error
            );
          }
        })

      },
      error: (error)=>{
        console.error('somthing is wrong', error)
      }
      
    })
     
  }
  

}