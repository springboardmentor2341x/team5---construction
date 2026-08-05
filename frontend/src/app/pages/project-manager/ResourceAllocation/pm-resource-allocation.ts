import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({

  selector: 'app-resource-allocation',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './pm-resource-allocation.html',

  styleUrls: ['./pm-resource-allocation.css']

})

export class ResourceAllocationComponent {


  totalResources = 320;

  allocatedResources = 245;

  availableResources = 75;

  utilizationRate = '77%';



  searchText = '';



  resources = [

    {

      id:'RES001',

      name:'Excavator',

      type:'Machinery',

      project:'Metro Rail Project',

      assignedTo:'Rahul Kumar',

      quantity:2,

      status:'Allocated'

    },

    {

      id:'RES002',

      name:'Concrete Mixer',

      type:'Machinery',

      project:'Commercial Complex',

      assignedTo:'Priya Sharma',

      quantity:3,

      status:'Allocated'

    },

    {

      id:'RES003',

      name:'Steel Rods',

      type:'Material',

      project:'Residential Tower',

      assignedTo:'Arun Kumar',

      quantity:500,

      status:'Available'

    },

    {

      id:'RES004',

      name:'Safety Helmets',

      type:'Safety Equipment',

      project:'Hospital Project',

      assignedTo:'Suresh Patel',

      quantity:120,

      status:'Allocated'

    },

    {

      id:'RES005',

      name:'Dump Truck',

      type:'Vehicle',

      project:'Shopping Mall',

      assignedTo:'Vijay Kumar',

      quantity:4,

      status:'Maintenance'

    },

    {

      id:'RES006',

      name:'Cement Bags',

      type:'Material',

      project:'Corporate Office',

      assignedTo:'Karthik Raj',

      quantity:1000,

      status:'Available'

    }

  ];




  filteredResources(){

    return this.resources.filter(resource =>

      resource.name.toLowerCase().includes(this.searchText.toLowerCase()) ||

      resource.project.toLowerCase().includes(this.searchText.toLowerCase()) ||

      resource.assignedTo.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }




  allocateResource(){

    alert('Resource Allocated Successfully');

  }




  viewResource(name:string){

    alert('Viewing ' + name);

  }




  editResource(name:string){

    alert('Editing ' + name);

  }



}