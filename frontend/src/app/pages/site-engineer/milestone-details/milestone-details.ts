import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {  signal,computed } from '@angular/core';
import {Milestone,ProjectSiteEngineerService } from '../../../services/project-site-engineer.service';


@Component({
  selector: 'app-milestone-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './milestone-details.html',
  styleUrl: './milestone-details.css',
})
export class MilestoneDetails {
    milestonedumy = {

  //   milestoneName: 'Foundation Completed',

  //   projectName: 'City Mall Construction',

     siteEngineer: 'Saurabh Pandey',

     projectManager: 'Asma',

  //   plannedDate: '15 Aug 2026',

  //   actualDate: '14 Aug 2026',

  //   progress: '100%',

  //   status: 'Completed',

     verifiedBy: 'Project Manager',

     activities: [

      'Excavation Completed',

       'Steel Reinforcement Installed',

       'Concrete Pouring Completed',

       'Foundation Inspection Passed'

     ],

     qualityStatus: 'Approved',

     safetyStatus: 'No Safety Issues',

     remarks:
       'Foundation work completed successfully before the planned schedule.'

   };



  milestones =signal<Milestone[]>([]);

  constructor(private ProjectSiteEngineerService:ProjectSiteEngineerService,
    private route:ActivatedRoute
  ){}
    
  
      ngOnInit(): any {
        const id = Number(this.route.snapshot.paramMap.get('id'))  

        console.log('selected milestone id ', id)
        this.getmilestonedetail(id);
      }
  
      getmilestonedetail(id:number): void {
        this.ProjectSiteEngineerService.getmilestonedetailbyId(id).subscribe({
          next:(data)=>{
            this.milestones.set([data]);
             console.log('Milestones signal:', this.milestones());
          },
          error: (error)=>{
            console.error('somthing is wrong', error)
          }
          
        })
         
      }
  


}
