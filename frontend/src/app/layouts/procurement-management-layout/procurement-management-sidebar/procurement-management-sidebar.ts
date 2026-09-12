import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-procurement-management-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './procurement-management-sidebar.html',
  styleUrl: './procurement-management-sidebar.css'
})
export class ProcurementManagementSidebarComponent {

  menuItems = [

    {
      name: 'Dashboard',
      icon: '📊',
      route: '/procurement-management/dashboard'
    },

    {
      name: 'Vendor Management',
      icon: '🏢',
      route: '/procurement-management/vendor-management'
    },

    {
      name: 'Procurement Requests',
      icon: '📋',
      route: '/procurement-management/procurement-requests'
    },

    {
      name: 'Purchase Orders',
      icon: '🛒',
      route: '/procurement-management/purchase-orders'
    },

    {
      name: 'Supplier Management',
      icon: '🚚',
      route: '/procurement-management/supplier-management'
    },

    {
      name: 'Invoice Tracking',
      icon: '🧾',
      route: '/procurement-management/invoice-tracking'
    },

    {
      name: 'Procurement Categories',
      icon: '📦',
      route: '/procurement-management/procurement-categories'
    },

    {
      name: 'Procurement Reports',
      icon: '📈',
      route: '/procurement-management/procurement-reports'
    }

  ];

}