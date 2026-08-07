import { Component } from '@angular/core';

import { WelcomeBanner } from '../../../shared/components/welcome-banner/welcome-banner';
import { KpiCard } from '../../../shared/components/kpi-card/kpi-card';
import { ProjectProgress } from '../../../shared/components/project-progress/project-progress';
import { FocusCard } from '../../../shared/components/focus-card/focus-card';
import { LiveProjectTable } from '../../../shared/components/live-project-table/live-project-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WelcomeBanner,
    KpiCard,
    ProjectProgress,
    FocusCard,
    LiveProjectTable
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}