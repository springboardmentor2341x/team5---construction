import { Component, Input } from '@angular/core';

import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './dashboard-chart.html',
  styleUrl: './dashboard-chart.css'
})
export class DashboardChart {

  @Input() option: any;

}