import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface Delay {

  id:number;

  date:string;

  workCategory:string;

  reason:string;

  duration:string;

  impact:string;

  status:string;

}

@Component({
  selector: 'app-delay-tracking',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './delay-tracking.html',
  styleUrl: './delay-tracking.css',
})
export class DelayTracking {


  delay: Delay = {

      id: 0,

      date:'',

      workCategory:'',

      reason:'',

      duration:'',

      impact:'',

      status:''
  }


   delays:Delay[]=[

    {

      id:1,

      date:'05 Aug 2026',

      workCategory:'Foundation',

      reason:'Heavy Rainfall',

      duration:'2 Hours',

      impact:'Minor',

      status:'Resolved'

    },

    {

      id:2,

      date:'07 Aug 2026',

      workCategory:'Concrete Work',

      reason:'Material Delivery Delay',

      duration:'1 Day',

      impact:'Medium',

      status:'Pending'

    }

  ];

showAddDelay:boolean = false;


 openAddDelay(): void{
  this.showAddDelay = true
 }

 closeAddDelay(): void{
  this.showAddDelay = false;
  this.resetDelayForm();
 }

 saveDelayinfo(): void{
      if(
        !this.delay.date ||
        !this.delay.workCategory ||
        !this.delay.reason ||
        !this.delay.duration ||
        !this.delay.impact ||
        !this.delay.status 
      
      ){
        alert('Please fill all required fields.');
        return
      }


        const newdelay: Delay ={
           id: this.delays.length > 0
              ? Math.max(...this.delays.map(m => m.id)) + 1
              : 1,
            date: this.delay.date,

            workCategory: this.delay.workCategory ,

            reason: this.delay.reason,

            duration: this.delay.duration,

            impact: this.delay.impact,

            status:this.delay.status

        };


        this.delays.unshift(newdelay);

        this.resetDelayForm();

        this.showAddDelay = false;
 }

  resetDelayForm(): void{

    this.delay ={
      
      id: 0,

      date:'',

      workCategory:'',

      reason:'',

      duration:'',

      impact:'',

      status:''
    };
  }

}
