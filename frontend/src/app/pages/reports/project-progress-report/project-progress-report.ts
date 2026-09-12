import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-progress-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-progress-report.html',
  styleUrl: './project-progress-report.css'
})
export class ProjectProgressReportComponent {

  selectedProject = 'Chennai Commercial Complex';
  selectedPeriod = 'Current Month';
  selectedStatus = 'All Status';

  project = {
    name: 'Chennai Commercial Complex',
    code: 'PRJ-001',
    location: 'Chennai, Tamil Nadu',
    manager: 'Project Manager',
    status: 'On Track',
    progress: 68,
    plannedCompletion: '30 Sep 2026',
    daysRemaining: 26
  };

  workCompleted = 68;
  completedMilestones = 3;
  delayedActivities = 2;
  daysBehind = 4;

  milestones = [
    {
      name: 'Site Preparation',
      description: 'Site clearing and preparation',
      plannedDate: '15 Jun 2026',
      actualDate: '14 Jun 2026',
      progress: 100,
      status: 'Completed'
    },
    {
      name: 'Foundation Work',
      description: 'Foundation and structural base',
      plannedDate: '10 Jul 2026',
      actualDate: '12 Jul 2026',
      progress: 100,
      status: 'Completed'
    },
    {
      name: 'Structural Framework',
      description: 'Main structural construction',
      plannedDate: '20 Aug 2026',
      actualDate: '',
      progress: 82,
      status: 'In Progress'
    },
    {
      name: 'Electrical & Plumbing',
      description: 'Electrical and plumbing installation',
      plannedDate: '05 Sep 2026',
      actualDate: '',
      progress: 55,
      status: 'In Progress'
    },
    {
      name: 'Final Finishing',
      description: 'Interior and exterior finishing',
      plannedDate: '25 Sep 2026',
      actualDate: '',
      progress: 25,
      status: 'Delayed'
    }
  ];

  workItems = [
    {
      name: 'Excavation & Earthwork',
      planned: 100,
      actual: 100,
      variance: 0,
      status: 'Completed'
    },
    {
      name: 'Foundation Construction',
      planned: 100,
      actual: 100,
      variance: 0,
      status: 'Completed'
    },
    {
      name: 'Structural Construction',
      planned: 85,
      actual: 82,
      variance: -3,
      status: 'On Track'
    },
    {
      name: 'Electrical Work',
      planned: 65,
      actual: 55,
      variance: -10,
      status: 'Delayed'
    },
    {
      name: 'Plumbing Work',
      planned: 60,
      actual: 54,
      variance: -6,
      status: 'Delayed'
    },
    {
      name: 'Finishing Work',
      planned: 40,
      actual: 25,
      variance: -15,
      status: 'Delayed'
    }
  ];

  delays = [
    {
      activity: 'Electrical Installation',
      days: 3,
      reason: 'Material delivery was delayed due to supplier availability.',
      impact: 'Electrical work schedule',
      status: 'Under Review'
    },
    {
      activity: 'Finishing Work',
      days: 1,
      reason: 'Finishing activities started later than planned.',
      impact: 'Final project completion',
      status: 'Monitoring'
    }
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reports/dashboard']);
  }

  applyFilters(): void {
    alert('✓ Project progress filters applied successfully!');
  }

  downloadPdf(): void {
    alert('✓ Project Progress Report PDF downloaded successfully!');
  }

  exportExcel(): void {
    alert('✓ Project Progress Report Excel file exported successfully!');
  }

  viewReport(): void {
    this.router.navigate(['/reports/preview']);
  }
}