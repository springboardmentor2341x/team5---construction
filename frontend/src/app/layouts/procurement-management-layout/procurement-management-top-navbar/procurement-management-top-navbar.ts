import { Component } from '@angular/core';

@Component({
  selector: 'app-procurement-management-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './procurement-management-top-navbar.html',
  styleUrl: './procurement-management-top-navbar.css'
})
export class ProcurementManagementTopNavbarComponent {

  userName = 'Procurement Manager';
  userRole = 'Procurement Management';

  notificationCount = 3;

}