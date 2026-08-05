import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-schedule',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './pm-project-schedule.html',
  styleUrls: ['./pm-project-schedule.css']
})

export class ProjectScheduleComponent {


  schedules = [

    {
      taskName: 'Foundation',
      startDate: '01-08-2026',
      endDate: '15-08-2026',
      duration: '15 Days',
      engineer: 'Arun Kumar',
      status: 'Completed'
    },


    {
      taskName: 'Structure',
      startDate: '16-08-2026',
      endDate: '30-09-2026',
      duration: '45 Days',
      engineer: 'Rahul Sharma',
      status: 'In Progress'
    },


    {
      taskName: 'Electrical',
      startDate: '01-10-2026',
      endDate: '20-10-2026',
      duration: '20 Days',
      engineer: 'Priya',
      status: 'Pending'
    },


    {
      taskName: 'Plumbing',
      startDate: '21-10-2026',
      endDate: '10-11-2026',
      duration: '20 Days',
      engineer: 'Vijay',
      status: 'Pending'
    },


    {
      taskName: 'Painting',
      startDate: '11-11-2026',
      endDate: '25-11-2026',
      duration: '15 Days',
      engineer: 'Karthik',
      status: 'Pending'
    }


  ];



  deleteSchedule(index:number){

    this.schedules.splice(index,1);

  }


}
