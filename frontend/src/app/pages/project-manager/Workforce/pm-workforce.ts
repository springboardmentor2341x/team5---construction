import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({

  selector: 'app-workforce',

  standalone:true,

  imports:[

    CommonModule,
    FormsModule,
    RouterLink

  ],

  templateUrl:'./pm-workforce.html',

  styleUrls:['./pm-workforce.css']

})


export class WorkforceComponent {


  totalWorkers = 185;

  presentWorkers = 171;

  leaveWorkers = 9;

  nightShiftWorkers = 42;



  searchText = '';



  workers = [

    {

      id:'WR001',

      name:'Ramesh Kumar',

      department:'Civil',

      project:'Metro Rail Project',

      supervisor:'Rahul Kumar',

      attendance:'Present',

      status:'Active'

    },


    {

      id:'WR002',

      name:'Suresh Kumar',

      department:'Electrical',

      project:'Commercial Complex',

      supervisor:'Priya Sharma',

      attendance:'Present',

      status:'Active'

    },


    {

      id:'WR003',

      name:'Arun Raj',

      department:'Plumbing',

      project:'Residential Tower',

      supervisor:'Arun Kumar',

      attendance:'Leave',

      status:'On Leave'

    },


    {

      id:'WR004',

      name:'Vijay Singh',

      department:'Finishing',

      project:'Hospital Project',

      supervisor:'Suresh Patel',

      attendance:'Present',

      status:'Active'

    },


    {

      id:'WR005',

      name:'Karthik Raj',

      department:'Civil',

      project:'Shopping Mall',

      supervisor:'Vijay Kumar',

      attendance:'Absent',

      status:'Absent'

    },


    {

      id:'WR006',

      name:'Manoj Kumar',

      department:'Electrical',

      project:'Corporate Office',

      supervisor:'Karthik Raj',

      attendance:'Present',

      status:'Active'

    }


  ];




  filteredWorkers(){


    return this.workers.filter(worker =>


      worker.name

      .toLowerCase()

      .includes(this.searchText.toLowerCase())


      ||

      worker.project

      .toLowerCase()

      .includes(this.searchText.toLowerCase())


      ||

      worker.department

      .toLowerCase()

      .includes(this.searchText.toLowerCase())


    );


  }





  addWorker(){


    alert('Worker added successfully');


  }





  viewWorker(name:string){


    alert('Viewing worker details: ' + name);


  }





  editWorker(name:string){


    alert('Editing worker details: ' + name);


  }



}

