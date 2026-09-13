import { ChangeDetectorRef, Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WorkCompletionStatusService,
  WorkCategoryProgress
} from '../../../services/work-completion-status.service';

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
export class SeWorkCompletionStatus implements OnInit {


   private workCompletionService = inject(
    WorkCompletionStatusService
  );
  constructor(private cdr:ChangeDetectorRef){}

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

   workCategories: WorkCategoryProgress[] = [];

 isLoading = false;
    ngOnInit(): void {
    this.loadWorkCompletionStatus();
  }

    loadWorkCompletionStatus(): void {
    this.isLoading = true;

    this.workCompletionService
      .getWorkCategoryProgress()
      .subscribe({
        next: (data) => {
          console.log('Work Category Progress:', data);

          this.workCategories = data;

          this.isLoading = false;
          this.cdr.detectChanges()
        },

        error: (error) => {
          console.error(
            'Work Category Progress Error:',
            error
          );

          this.isLoading = false;

          alert(
            error?.error?.detail ||
            'Failed to load work completion status.'
          );
        }
      });
  }
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