import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {Milestone,MilestoneCreate, MilestoneService } from '../../../services/milestone.service';
import { FormsModule } from '@angular/forms';


@Component({

  selector: 'app-milestones',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],

  templateUrl: './pm-milestones.html',

  styleUrls: ['./pm-milestones.css']

})


export class MilestonesComponent {


  milestones = [

    {
      name:'Foundation Complete',
      plannedDate:'15 Aug 2026',
      actualDate:'14 Aug 2026',
      status:'Completed',
      delay:'No Delay',
      remarks:'Foundation work completed'
    },


    {
      name:'Structure Complete',
      plannedDate:'30 Sep 2026',
      actualDate:'-',
      status:'In Progress',
      delay:'5 Days',
      remarks:'Work in progress'
    },


    {
      name:'Electrical Complete',
      plannedDate:'20 Oct 2026',
      actualDate:'-',
      status:'Pending',
      delay:'No Delay',
      remarks:'Not started'
    },


    {
      name:'Plumbing Complete',
      plannedDate:'10 Nov 2026',
      actualDate:'-',
      status:'Pending',
      delay:'No Delay',
      remarks:'Waiting for approval'
    },


    {
      name:'Final Inspection',
      plannedDate:'20 Dec 2026',
      actualDate:'-',
      status:'Pending',
      delay:'No Delay',
      remarks:'Inspection pending'
    }


  ];


  milestoneForm = {
  milestone_name: '',
  description: '',
  status: 'Not Started',
  progress_percentage: 0,
  planned_start_date: '',
  planned_end_date: '',
  actual_start_date: '',
  actual_end_date: '',
  project_id: 1
};


  completeMilestone(index:number){

    this.milestones[index].status='Completed';

    this.milestones[index].remarks='Completed successfully';

  }

milestone: Milestone[] = [];
  

        constructor(private milestoneService: MilestoneService) {}


ngOnInit(): void{
  this.getMilestones();
}

getMilestones(): void{
  this.milestoneService.getAllMilestones().subscribe({
    next: (data) =>{
      console.log(data)
      this.milestone = data;
    },
    error:(error) =>{
      console.log('error fetching milestones get()', error)
    }

  })
}






            submitMilestone(): void {

            const milestoneData = {
              milestone_name: this.milestoneForm.milestone_name,
              description: this.milestoneForm.description,
              status: this.milestoneForm.status  as MilestoneCreate['status'],
              progress_percentage: this.milestoneForm.progress_percentage,
              planned_start_date: this.milestoneForm.planned_start_date,
              planned_end_date: this.milestoneForm.planned_end_date,
              actual_start_date: this.milestoneForm.actual_start_date || null,
              actual_end_date: this.milestoneForm.actual_end_date || null,
              project_id: this.milestoneForm.project_id
            };

            console.log('Sending milestone:', milestoneData);

            this.milestoneService.createMilestone(milestoneData).subscribe({

              next: (data) => {
                console.log('Milestone created successfully:', data);

                // optional: form reset
                this.milestoneForm = {
                  milestone_name: '',
                  description: '',
                  status: 'Not Started',
                  progress_percentage: 0,
                  planned_start_date: '',
                  planned_end_date: '',
                  actual_start_date: '',
                  actual_end_date: '',
                  project_id: 1
                };
              },

              error: (error) => {
                console.error('Error creating milestone:', error);
              }

            });
          }

}
