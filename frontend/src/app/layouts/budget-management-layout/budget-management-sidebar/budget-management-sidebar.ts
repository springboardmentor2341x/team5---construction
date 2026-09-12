import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-budget-management-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './budget-management-sidebar.html',
  styleUrl: './budget-management-sidebar.css'
})
export class BudgetManagementSidebarComponent {}