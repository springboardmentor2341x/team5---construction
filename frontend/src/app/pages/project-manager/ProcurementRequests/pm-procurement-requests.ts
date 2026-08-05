import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({

  selector: 'app-procurement-request',

  standalone: true,

  imports: [

    CommonModule,
    FormsModule,
    RouterLink

  ],

  templateUrl: './pm-procurement-requests.html',

  styleUrls: ['./pm-procurement-requests.css']

})


export class ProcurementRequestsComponent {


  totalRequests = 156;

  approvedRequests = 112;

  pendingRequests = 28;

  totalSuppliers = 24;



  searchText = '';



  requests = [


    {

      id:'PR001',

      requestName:'Cement Requirement',

      material:'Cement Bags',

      category:'Construction Material',

      supplier:'ABC Suppliers',

      quantity:'1000 Bags',

      requiredDate:'05-08-2026',

      status:'Approved'

    },


    {

      id:'PR002',

      requestName:'Steel Requirement',

      material:'Steel Rods',

      category:'Construction Material',

      supplier:'XYZ Metals',

      quantity:'500 Units',

      requiredDate:'10-08-2026',

      status:'Pending'

    },


    {

      id:'PR003',

      requestName:'Safety Equipment Request',

      material:'Safety Helmets',

      category:'Safety Equipment',

      supplier:'SafeTech Suppliers',

      quantity:'200 Pieces',

      requiredDate:'15-08-2026',

      status:'Approved'

    },


    {

      id:'PR004',

      requestName:'Electrical Material Request',

      material:'Electrical Cables',

      category:'Electrical',

      supplier:'Power Solutions',

      quantity:'300 Meter',

      requiredDate:'20-08-2026',

      status:'Pending'

    },


    {

      id:'PR005',

      requestName:'Equipment Request',

      material:'Concrete Mixer',

      category:'Equipment',

      supplier:'Build Equipment Ltd',

      quantity:'2 Units',

      requiredDate:'25-08-2026',

      status:'Rejected'

    }


  ];





  filteredRequests(){


    return this.requests.filter(request =>


      request.requestName

      .toLowerCase()

      .includes(this.searchText.toLowerCase())


      ||

      request.material

      .toLowerCase()

      .includes(this.searchText.toLowerCase())


      ||

      request.supplier

      .toLowerCase()

      .includes(this.searchText.toLowerCase())


    );


  }





  submitRequest(){

    alert('Procurement Request Submitted Successfully');

  }





  viewRequest(requestName:string){

    alert('Viewing Request: ' + requestName);

  }





  editRequest(requestName:string){

    alert('Editing Request: ' + requestName);

  }



}