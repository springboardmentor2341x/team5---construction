import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component } from '@angular/core';
//import { RouterLink} from '@angular/router';
=======
import { Component, signal,computed } from '@angular/core';
//import { RouterLink} from '@angular/router';
import {Milestone,ProjectSiteEngineerService } from '../../../services/project-site-engineer.service';

>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

interface WorkProgress {
  category: string;
  progress: number;
}

interface ActivityLog {
  time: string;
  activity: string;
}

interface Delay {
  reason: string;
  duration: string;
}

interface Notification {
  message: string;
}


@Component({
  selector: 'app-site-engineer-dashboard',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './site-engineer-dashboard.html',
  styleUrl: './site-engineer-dashboard.css'
})
export class SiteEngineerDashboard {

  // =========================
  // SUMMARY CARDS
  // =========================

  overallProgress = 62;

  todayProgress = 4;

  completedMilestones = 5;

  activeDelays = 2;

  workersPresent = 120;

  workersAbsent = 15;

  materialUsed = '300 Cement Bags';

  equipmentInUse = 3;

  // =========================
  // WORK PROGRESS
  // =========================

  workProgress: WorkProgress[] = [

    {
      category: 'Foundation',
      progress: 100
    },

    {
      category: 'Structural',
      progress: 80
    },

    {
      category: 'Electrical',
      progress: 60
    },

    {
      category: 'Plumbing',
      progress: 40
    },

    {
      category: 'Finishing',
      progress: 20
    }

  ];

  // =========================
  // TODAY'S WORK
  // =========================

  todaysWork = [

    'Excavation Completed',

    'Column Casting Completed',

    '300 Cement Bags Used',

    '2 Excavators Working',

    'Heavy Rain During Evening'

  ];

  // =========================
  // MILESTONES
  // =========================

<<<<<<< HEAD
  milestones = [

    {
      name: 'Foundation',
      status: 'Completed'
    },

    {
      name: 'Structural',
      status: 'In Progress'
    },

    {
      name: 'Electrical',
      status: 'Pending'
    },

    {
      name: 'Plumbing',
      status: 'Pending'
    },

    {
      name: 'Finishing',
      status: 'Pending'
    }

  ];
=======
  // milestones = [

  //   {
  //     name: 'Foundation',
     
  //     status: 'Completed'
  //   },

  //   {
  //     name: 'Structural',
  //     status: 'In Progress'
  //   },

  //   {
  //     name: 'Electrical',
  //     status: 'Pending'
  //   },

  //   {
  //     name: 'Plumbing',
  //     status: 'Pending'
  //   },

  //   {
  //     name: 'Finishing',
  //     status: 'Pending'
  //   }

  // ];
  milestones = computed(() =>
  this.milestonedata().map((item: Milestone) => ({
    name: item.milestone_name,
    status: item.status
  }))
);
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

  // =========================
  // ACTIVITY LOGS
  // =========================

  activityLogs: ActivityLog[] = [

    {
      time: '09:00 AM',
      activity: 'Material Arrival'
    },

    {
      time: '10:30 AM',
      activity: 'Safety Training'
    },

    {
      time: '01:15 PM',
      activity: 'Client Visit'
    },

    {
      time: '03:40 PM',
      activity: 'Machinery Maintenance'
    }

  ];

  // =========================
  // DELAYS
  // =========================

  delays: Delay[] = [

    {
      reason: 'Heavy Rain',
      duration: '2 Hours'
    },

    {
      reason: 'Material Delivery Delay',
      duration: '1 Day'
    }

  ];

  // =========================
  // NOTIFICATIONS
  // =========================

  notifications: Notification[] = [

    {
      message: 'Weekly Report Submitted'
    },

    {
      message: 'Foundation Milestone Completed'
    },

    {
      message: 'Project Manager Approved Daily Report'
    }

  ];

<<<<<<< HEAD
=======
  constructor(private ProjectSiteEngineerService:ProjectSiteEngineerService){}
  
    ngOnInit(): any {
      this.getmilestonedetail();
    }
  // milestonedata= signal<Milestone[]>([])| undefined>(undefined)
  milestonedata= signal<Milestone[]|any |null>(null)
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