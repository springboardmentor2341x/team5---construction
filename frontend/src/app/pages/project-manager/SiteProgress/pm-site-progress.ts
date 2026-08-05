import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-site-progress',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],

  templateUrl: './pm-site-progress.html',

  styleUrls: ['./pm-site-progress.css']

})

export class SiteProgressComponent {

  totalUpdates = 245;

  todayUpdates = 18;

  pendingIssues = 7;

  completedTasks = 164;

  searchText = '';

  progressReports = [

    {

      date: '29-07-2026',

      project: 'Metro Rail Project',

      engineer: 'Rahul Kumar',

      summary: 'Foundation excavation completed',

      tasks: 'Excavation, Soil Testing',

      status: 'Completed'

    },

    {

      date: '29-07-2026',

      project: 'Commercial Complex',

      engineer: 'Priya Sharma',

      summary: 'Electrical conduit installation',

      tasks: 'Ground Floor Wiring',

      status: 'In Progress'

    },

    {

      date: '28-07-2026',

      project: 'Residential Tower',

      engineer: 'Arun Kumar',

      summary: 'Concrete slab completed',

      tasks: 'Level 2 Slab',

      status: 'Completed'

    },

    {

      date: '28-07-2026',

      project: 'Hospital Project',

      engineer: 'Suresh Patel',

      summary: 'Material delivery delayed',

      tasks: 'Steel Reinforcement',

      status: 'Delayed'

    }

  ];



  filteredReports() {

    return this.progressReports.filter(report =>

      report.project
        .toLowerCase()
        .includes(this.searchText.toLowerCase())

    );

  }



  uploadProgress() {

    alert('Progress uploaded successfully.');

  }



  viewReport(project: string) {

    alert('Viewing report for ' + project);

  }

}
