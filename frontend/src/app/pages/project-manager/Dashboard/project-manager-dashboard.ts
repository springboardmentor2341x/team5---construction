import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-manager-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './project-manager-dashboard.html',
  styleUrls: ['./project-manager-dashboard.css']
})

export class ProjectManagerDashboardComponent {
  dashboardCards = [

    {
      title: 'Assigned Projects',
      value: 12
    },

    {
      title: 'Completed Milestones',
      value: 18
    },

    {
      title: 'Delayed Activities',
      value: 5
    },

    {
      title: 'Budget Utilization',
      value: '72%'
    }

  ];

    projects = [

    {
      name: 'Metro Rail Extension',
      client: 'ABC Builders',
      status: 'In Progress',
      progress: '72%'
    },

    {
      name: 'Commercial Complex',
      client: 'Skyline Infra',
      status: 'Planning',
      progress: '25%'
    },

    {
      name: 'Residential Tower',
      client: 'Green Homes',
      status: 'Completed',
      progress: '100%'
    },

    {
      name: 'Hospital Building',
      client: 'City Developers',
      status: 'In Progress',
      progress: '60%'
    }

  ];

  milestones = [

    {
      task: 'Foundation Work',
      percentage: '100%',
      deadline: '05 Aug 2026',
      status: 'Completed'
    },

    {
      task: 'Structural Framework',
      percentage: '75%',
      deadline: '18 Aug 2026',
      status: 'In Progress'
    },

    {
      task: 'Roof Installation',
      percentage: '40%',
      deadline: '02 Sep 2026',
      status: 'In Progress'
    },

    {
      task: 'Interior Finishing',
      percentage: '15%',
      deadline: '15 Sep 2026',
      status: 'Pending'
    }

  ];

   siteProgress = [

    {
      site: 'Site A',
      engineer: 'John',
      progress: '80%',
      status: 'On Schedule'
    },

    {
      site: 'Site B',
      engineer: 'David',
      progress: '60%',
      status: 'In Progress'
    },

    {
      site: 'Site C',
      engineer: 'Smith',
      progress: '45%',
      status: 'Delayed'
    }

  ];
    // Resource Allocation

  resources = [

    {
      name: 'Excavator',
      project: 'Metro Rail Extension',
      status: 'Allocated'
    },

    {
      name: 'Tower Crane',
      project: 'Commercial Complex',
      status: 'Allocated'
    },

    {
      name: 'Concrete Mixer',
      project: 'Hospital Building',
      status: 'Available'
    },

    {
      name: 'Bulldozer',
      project: 'Residential Tower',
      status: 'Allocated'
    }

  ];

   workforce = [

    {
      team: 'Civil Team',
      count: 42,
      supervisor: 'Supervisor A'
    },

    {
      team: 'Electrical Team',
      count: 18,
      supervisor: 'Supervisor B'
    },

    {
      team: 'Plumbing Team',
      count: 14,
      supervisor: 'Supervisor C'
    },

    {
      team: 'Finishing Team',
      count: 20,
      supervisor: 'Supervisor D'
    }

  ];

   procurement = [

    {
      material: 'Cement',
      supplier: 'Ultra Cement',
      status: 'Approved'
    },

    {
      material: 'Steel',
      supplier: 'Steel India',
      status: 'Pending'
    },

    {
      material: 'Bricks',
      supplier: 'ABC Suppliers',
      status: 'Delivered'
    },

    {
      material: 'Sand',
      supplier: 'Quality Materials',
      status: 'Processing'
    }

  ];

    budgets = [

    {
      project: 'Metro Rail Extension',
      total: '$1,200,000',
      spent: '$850,000',
      remaining: '$350,000'
    },

    {
      project: 'Commercial Complex',
      total: '$950,000',
      spent: '$420,000',
      remaining: '$530,000'
    },

    {
      project: 'Hospital Building',
      total: '$780,000',
      spent: '$500,000',
      remaining: '$280,000'
    }

  ];

  delayedActivities = [

    {
      activity: 'Roof Installation',
      reason: 'Heavy Rain',
      days: '3 Days'
    },

    {
      activity: 'Material Delivery',
      reason: 'Transport Delay',
      days: '2 Days'
    },

    {
      activity: 'Electrical Work',
      reason: 'Labour Shortage',
      days: '5 Days'
    }

  ];
    

  recentUpdates = [

    'Foundation work completed successfully.',
    'Steel materials delivered to Site B.',
    'Weekly progress report submitted.',
    'Budget updated successfully.',
    'Site inspection scheduled for tomorrow.'

  ];

  notifications = [

    'Concrete supply approved.',
    'Project milestone achieved.',
    'Equipment maintenance due tomorrow.',
    'Budget report generated.',
    'Weekly meeting scheduled at 10:00 AM.'

  ];

}
