import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkCategory {
  name: string;
  progress: number;
}

interface Milestone {
  name: string;
  status: string;
}

interface ProgressUpdate {
  id: number;
  date: string;
  category: string;
  activity: string;
  progress: number;
}

@Component({
  selector: 'app-se-work-completion-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './se-work-completion-status.html',
  styleUrl: './se-work-completion-status.css'
})
export class SeWorkCompletionStatus {

  // =========================
  // SUMMARY
  // =========================

  overallProgress = 62;

  todayProgress = 4;

  completedMilestones = 5;

  totalMilestones = 8;

  remainingWork = 38;

  // =========================
  // WORK CATEGORY PROGRESS
  // =========================

  workCategories: WorkCategory[] = [

    {
      name: 'Foundation Work',
      progress: 100
    },

    {
      name: 'Structural Work',
      progress: 80
    },

    {
      name: 'Electrical Work',
      progress: 60
    },

    {
      name: 'Plumbing Work',
      progress: 40
    },

    {
      name: 'Finishing Work',
      progress: 20
    }

  ];

  // =========================
  // MILESTONES
  // =========================

  milestones: Milestone[] = [

    {
      name: 'Foundation Completed',
      status: 'Completed'
    },

    {
      name: 'Structural Work Completed',
      status: 'Completed'
    },

    {
      name: 'Electrical Work',
      status: 'In Progress'
    },

    {
      name: 'Plumbing Work',
      status: 'Pending'
    },

    {
      name: 'Finishing Work',
      status: 'Pending'
    },

    {
      name: 'Final Inspection',
      status: 'Pending'
    }

  ];

  // =========================
  // RECENT PROGRESS UPDATES
  // =========================

  recentUpdates: ProgressUpdate[] = [

    {
      id: 1,
      date: '05 Aug 2026',
      category: 'Foundation',
      activity: 'Excavation Completed',
      progress: 20
    },

    {
      id: 2,
      date: '06 Aug 2026',
      category: 'Foundation',
      activity: 'PCC Work Completed',
      progress: 10
    },

    {
      id: 3,
      date: '07 Aug 2026',
      category: 'Structure',
      activity: 'Column Casting',
      progress: 8
    },

    {
      id: 4,
      date: '08 Aug 2026',
      category: 'Electrical',
      activity: 'Electrical Conduit Installation',
      progress: 12
    },

    {
      id: 5,
      date: '09 Aug 2026',
      category: 'Plumbing',
      activity: 'Water Pipeline Installation',
      progress: 10
    }

  ];

  // =========================
  // GETTERS
  // =========================

  get completedCount(): number {
    return this.milestones.filter(
      milestone => milestone.status === 'Completed'
    ).length;
  }

  get inProgressCount(): number {
    return this.milestones.filter(
      milestone => milestone.status === 'In Progress'
    ).length;
  }

  get pendingCount(): number {
    return this.milestones.filter(
      milestone => milestone.status === 'Pending'
    ).length;
  }

}