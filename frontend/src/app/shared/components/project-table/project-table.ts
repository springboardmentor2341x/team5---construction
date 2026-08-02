import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './project-table.html',
  styleUrl: './project-table.css'
})
export class ProjectTable {

  displayedColumns = [
    'project',
    'manager',
    'status',
    'progress',
    'action'
  ];

  dataSource = [

    {
      project:'Skyline Residency',
      manager:'Rahul Sharma',
      status:'Active',
      progress:'72%'
    },

    {
      project:'Metro Mall',
      manager:'Priya Singh',
      status:'Planning',
      progress:'18%'
    },

    {
      project:'Smart City Phase II',
      manager:'Amit Verma',
      status:'Completed',
      progress:'100%'
    },

    {
      project:'Green Valley Villas',
      manager:'Neha Gupta',
      status:'Delayed',
      progress:'48%'
    }

  ];

}