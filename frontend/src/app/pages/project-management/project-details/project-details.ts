import { Component } from '@angular/core';
import { DashboardLayout } from '../../../layouts/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-project-details',
  imports: [
     DashboardLayout
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  project = {
  id: 'BT001',
  name: 'Metro Station Phase 1',
  description: 'Construction of Lucknow Metro Station Phase 1.',
  client: 'ABC Infra',
  manager: 'Rahul Sharma',
  location: 'Lucknow',
  budget: '₹2.5 Cr',
  status: 'Active',
  priority: 'High',
  progress: 70,
  startDate: '10 Jan 2026',
  endDate: '10 Jan 2027',
  duration: '12 Months'
};

}
