import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BudgetManagementSidebarComponent } from './budget-management-sidebar/budget-management-sidebar';

import { BudgetManagementTopNavbarComponent } from './budget-management-top-navbar/budget-management-top-navbar';

@Component({
  selector: 'app-budget-and-cost-management-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    BudgetManagementSidebarComponent,
    BudgetManagementTopNavbarComponent
  ],
  templateUrl: './budget-management-layout.html',
  styleUrl: './budget-management-layout.css'
})
export class BudgetManagementLayoutComponent {}