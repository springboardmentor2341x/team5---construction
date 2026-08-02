import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './project-management.html',
  styleUrl: './project-management.css'
})
export class ProjectManagement {

  displayedColumns = [
    'name',
    'manager',
    'budget',
    'progress',
    'status',
    'actions'
  ];

  projects = [

    {
      name:'Skyline Residency',
      manager:'Rahul Sharma',
      budget:'₹12 Cr',
      progress:72,
      status:'Active'
    },

    {
      name:'Metro Mall',
      manager:'Priya Singh',
      budget:'₹18 Cr',
      progress:22,
      status:'Planning'
    },

    {
      name:'Smart City Phase II',
      manager:'Amit Verma',
      budget:'₹35 Cr',
      progress:100,
      status:'Completed'
    },

    {
      name:'Green Valley Villas',
      manager:'Neha Gupta',
      budget:'₹8 Cr',
      progress:48,
      status:'Delayed'
    }

  ];

}