import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector:'app-notification-panel',
  standalone:true,
  imports:[
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl:'./notification-panel.html',
  styleUrl:'./notification-panel.css'
})
export class NotificationPanel{

notifications=[

{
icon:'warning',
text:'Electrical work delayed'
},

{
icon:'inventory',
text:'Cement stock running low'
},

{
icon:'event',
text:'Project deadline in 5 days'
},

{
icon:'campaign',
text:'New contractor assigned'
}

];

}