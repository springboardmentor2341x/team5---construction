import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({

  selector: 'app-milestones',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink
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



  completeMilestone(index:number){

    this.milestones[index].status='Completed';

    this.milestones[index].remarks='Completed successfully';

  }



}
