import { Component } from '@angular/core';

import { KpiCard } from '../../../shared/components/kpi-card/kpi-card';
import { DashboardChart } from '../../../shared/components/dashboard-chart/dashboard-chart';
import { MatCardModule } from '@angular/material/card';
import { RecentActivities } from '../../../shared/components/recent-activities/recent-activities';
import { NotificationPanel } from '../../../shared/components/notification-panel/notification-panel';
import { ProjectTable } from '../../../shared/components/project-table/project-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    KpiCard,
    DashboardChart, 
    MatCardModule,RecentActivities,
    NotificationPanel,
    ProjectTable
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  projectChart = {

    xAxis: {
      type: 'category',
      data: ['Planning','Foundation','Structure','Electrical','Finishing']
    },

    yAxis: {
      type: 'value'
    },

    series: [
      {
        data: [15,28,45,30,18],
        type: 'bar',
        itemStyle:{
          color:'#1E3A8A'
        }
      }
    ]
  };

  budgetChart = {

    tooltip:{
      trigger:'item'
    },

    series:[
      {
        type:'pie',

        radius:'70%',

        data:[
          {value:45,name:'Materials'},
          {value:20,name:'Labor'},
          {value:15,name:'Machinery'},
          {value:20,name:'Others'}
        ]
      }
    ]
  };

}