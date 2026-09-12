import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
<<<<<<< HEAD


interface Milestone {

  id: number;

  name: string;

  plannedDate: string;

  actualDate: string;

  progress: number;

  status: string;

  remarks: string;

}


=======
import {  signal,computed } from '@angular/core';
import {Milestone,ProjectSiteEngineerService } from '../../../services/project-site-engineer.service';

// interface Milestone {

//   id: number;

//   name: string;

//   plannedDate: string;

//   actualDate: string;

//   progress: number;

//   status: string;

//   remarks: string;

// }
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c



@Component({
  selector: 'app-se-milestones',
  imports: [CommonModule,RouterLink],
  templateUrl: './se-milestones.html',
  styleUrl: './se-milestones.css',
})
export class SeMilestones {
<<<<<<< HEAD
   milestones: Milestone[] = [

    {
      id: 1,
      name: 'Foundation Completed',
      plannedDate: '10 Aug 2026',
      actualDate: '09 Aug 2026',
      progress: 100,
      status: 'Completed',
      remarks: 'Foundation work completed successfully.'
    },

    {
      id: 2,
      name: 'Structural Work',
      plannedDate: '25 Aug 2026',
      actualDate: '-',
      progress: 60,
      status: 'In Progress',
      remarks: 'Column casting is currently in progress.'
    },

    {
      id: 3,
      name: 'Electrical Work',
      plannedDate: '10 Sep 2026',
      actualDate: '-',
      progress: 0,
      status: 'Pending',
      remarks: 'Not started yet.'
    },

    {
      id: 4,
      name: 'Plumbing',
      plannedDate: '20 Sep 2026',
      actualDate: '-',
      progress: 0,
      status: 'Pending',
      remarks: 'Waiting for structural completion.'
    },

    {
      id: 5,
      name: 'Finishing Work',
      plannedDate: '05 Oct 2026',
      actualDate: '-',
      progress: 0,
      status: 'Pending',
      remarks: 'Not started.'
    },

    {
      id: 6,
      name: 'Inspection',
      plannedDate: '15 Oct 2026',
      actualDate: '-',
      progress: 0,
      status: 'Pending',
      remarks: 'Inspection will begin after finishing work.'
    },

    {
      id: 7,
      name: 'Project Handover',
      plannedDate: '25 Oct 2026',
      actualDate: '-',
      progress: 0,
      status: 'Pending',
      remarks: 'Final handover to the client.'
    }

  ];

  get totalMilestones(): number {
    return this.milestones.length;
  }

  get completedMilestones(): number {
    return this.milestones.filter(m => m.status === 'Completed').length;
  }

  get inProgressMilestones(): number {
    return this.milestones.filter(m => m.status === 'In Progress').length;
  }

  get pendingMilestones(): number {
    return this.milestones.filter(m => m.status === 'Pending').length;
  }

=======
  //  milestones: Milestone[] = [

  //   {
  //     id: 1,
  //     name: 'Foundation Completed',
  //     plannedDate: '10 Aug 2026',
  //     actualDate: '09 Aug 2026',
  //     progress: 100,
  //     status: 'Completed',
  //     remarks: 'Foundation work completed successfully.'
  //   },

  //   {
  //     id: 2,
  //     name: 'Structural Work',
  //     plannedDate: '25 Aug 2026',
  //     actualDate: '-',
  //     progress: 60,
  //     status: 'In Progress',
  //     remarks: 'Column casting is currently in progress.'
  //   },

  //   {
  //     id: 3,
  //     name: 'Electrical Work',
  //     plannedDate: '10 Sep 2026',
  //     actualDate: '-',
  //     progress: 0,
  //     status: 'Pending',
  //     remarks: 'Not started yet.'
  //   },

  //   {
  //     id: 4,
  //     name: 'Plumbing',
  //     plannedDate: '20 Sep 2026',
  //     actualDate: '-',
  //     progress: 0,
  //     status: 'Pending',
  //     remarks: 'Waiting for structural completion.'
  //   },

  //   {
  //     id: 5,
  //     name: 'Finishing Work',
  //     plannedDate: '05 Oct 2026',
  //     actualDate: '-',
  //     progress: 0,
  //     status: 'Pending',
  //     remarks: 'Not started.'
  //   },

  //   {
  //     id: 6,
  //     name: 'Inspection',
  //     plannedDate: '15 Oct 2026',
  //     actualDate: '-',
  //     progress: 0,
  //     status: 'Pending',
  //     remarks: 'Inspection will begin after finishing work.'
  //   },

  //   {
  //     id: 7,
  //     name: 'Project Handover',
  //     plannedDate: '25 Oct 2026',
  //     actualDate: '-',
  //     progress: 0,
  //     status: 'Pending',
  //     remarks: 'Final handover to the client.'
  //   }

  // ];

   milestones = computed(() =>
   this.milestonedata().map((item: Milestone) => ({
    milestone_name: item.milestone_name,
    status: item.status,
    milestone_id: item.milestone_id,
    description:item.description,
    progress_percentage: item.progress_percentage,
    planned_start_date:item.planned_start_date,
    planned_end_date: item.planned_end_date,
    actual_start_date: item.actual_start_date,
    actual_end_date: item.actual_end_date,
    project_id: item.project_id,
    created_at: item.created_at,
    updated_at: item.updated_at

    }))
  );

  get totalMilestones(): number {
    return this.milestones().length;
  }

  get completedMilestones(): number {
    return this.milestones().filter(m => m.status === 'Completed').length;
  }

  get inProgressMilestones(): number {
    return this.milestones().filter(m => m.status === 'In Progress').length;
  }

  get pendingMilestones(): number {
    return this.milestones().filter(m => m.status === 'Planning').length;
  }







   constructor(private ProjectSiteEngineerService:ProjectSiteEngineerService){}
  
    ngOnInit(): any {
      this.getmilestonedetail();
    }
  // milestonedata= signal<Milestone[]>([])| undefined>(undefined)
  // milestonedata= signal<Milestone[]|any |null>(null)
  milestonedata=  signal<Milestone[]>([]);

    getmilestonedetail(): any {
      this.ProjectSiteEngineerService.getmilestonedetail().subscribe({
        next:(data)=>{
          
          this.milestonedata.set(data)
         
                console.log(this.milestonedata()[0].milestone_name ?? '');
                console.log(this.milestonedata()[0].description ?? '');
             
        },
        error: (error)=>{
          console.error('somthing is wrong', error)
        }
        
      })
       
    }


>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
}
