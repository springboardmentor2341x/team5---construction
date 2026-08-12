import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


interface Milestone {

  id: number;

  name: string;

  plannedDate: string;

  actualDate: string;

  progress: number;

  status: string;

  remarks: string;

}





@Component({
  selector: 'app-se-milestones',
  imports: [CommonModule,RouterLink],
  templateUrl: './se-milestones.html',
  styleUrl: './se-milestones.css',
})
export class SeMilestones {
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

}
