import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {

  displayedColumns = [
    'id',
    'name',
    'role',
    'email',
    'status',
    'actions'
  ];

  users = [
    {
      id:'EMP001',
      name:'Rahul Sharma',
      role:'Project Manager',
      email:'rahul@buildtrack.com',
      status:'Active'
    },
    {
      id:'EMP002',
      name:'Priya Singh',
      role:'Site Engineer',
      email:'priya@buildtrack.com',
      status:'Active'
    },
    {
      id:'EMP003',
      name:'Amit Verma',
      role:'Contractor',
      email:'amit@buildtrack.com',
      status:'Inactive'
    },
    {
      id:'EMP004',
      name:'Neha Gupta',
      role:'Client',
      email:'neha@buildtrack.com',
      status:'Active'
    }
  ];

}