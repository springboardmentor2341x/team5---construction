import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recent-activities',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './recent-activities.html',
  styleUrl: './recent-activities.css'
})
export class RecentActivities {

  activities = [

    {
      icon:'construction',
      text:'Foundation work completed',
      time:'10 mins ago'
    },

    {
      icon:'engineering',
      text:'Site Engineer uploaded daily report',
      time:'30 mins ago'
    },

    {
      icon:'groups',
      text:'25 new workers assigned',
      time:'1 hour ago'
    },

    {
      icon:'shopping_cart',
      text:'Material request approved',
      time:'Today'
    }

  ];

}