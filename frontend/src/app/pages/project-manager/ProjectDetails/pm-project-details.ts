// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-project-details',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterLink
//   ],
//   templateUrl: './pm-project-details.html',
//   styleUrls: ['./pm-project-details.css']
// })

// export class ProjectDetailsComponent implements OnInit {


//   project: any = {

//     name: '',
//     code: '',
//     client: '',
//     location: '',
//     budget: '',
//     startDate: '',
//     endDate: '',
//     priority: '',
//     status: '',
//     completion: 0,

//     milestones: [],

//     engineers: [],

//     contractors: [],

//     resources: [],

//     materials: []

//   };



//   ngOnInit(): void {


//     // Receive selected project from My Projects page

//     this.project = history.state.project;



//     // Default data if page opened directly

//     if(!this.project){


//       this.project = {


//         name:'Metro Rail Project',

//         code:'PRJ001',

//         client:'ABC Construction',

//         location:'Chennai',

//         budget:'₹10 Cr',

//         startDate:'01-Jan-2026',

//         endDate:'31-Dec-2026',

//         priority:'High',

//         status:'Ongoing',

//         completion:65,



//         milestones:[

//           {
//             name:'Foundation Complete',
//             planned:'15-Feb-2026',
//             actual:'18-Feb-2026',
//             status:'Completed',
//             delay:'3 Days',
//             remarks:'Completed'
//           },


//           {
//             name:'Structure Work',
//             planned:'20-Mar-2026',
//             actual:'-',
//             status:'Ongoing',
//             delay:'0',
//             remarks:'Work in progress'
//           }


//         ],




//         engineers:[

//           {
//             name:'Arun Kumar',
//             id:'SE101',
//             contact:'9876543210',
//             area:'Foundation Area'
//           }


//         ],





//         contractors:[

//           {
//             name:'Raj Builders',
//             company:'Raj Civil Works',
//             specialization:'Civil',
//             contact:'9876500000'
//           }


//         ],





//         resources:[

//           {
//             name:'Excavator',
//             quantity:5,
//             available:2,
//             allocated:3
//           }


//         ],




//         materials:[

//           {
//             name:'Cement',
//             quantity:'500 Bags',
//             status:'Available'
//           },


//           {
//             name:'Steel',
//             quantity:'200 Tons',
//             status:'Approved'
//           }


//         ]

//       };


//     }


//   }


// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({

  selector:'app-project-details',

  standalone:true,

  imports:[
    CommonModule,
    RouterLink
  ],

  templateUrl:'./pm-project-details.html',

  styleUrls:['./pm-project-details.css']

})


export class ProjectDetailsComponent implements OnInit {


project:any = {

name:'',
code:'',
client:'',
location:'',
budget:'',
startDate:'',
endDate:'',
priority:'',
status:'',
completion:0,

milestones:[],
engineers:[],
contractors:[],
resources:[],
materials:[]

};





ngOnInit():void{


const selectedProject = history.state.project;



if(selectedProject){


this.project = selectedProject;


}

else{


// Default project data

this.project = {


name:'Metro Tower Construction',

code:'BT-001',

client:'ABC Developers',

location:'Chennai',

budget:'₹2,50,000',

startDate:'12-06-2026',

endDate:'20-12-2026',

priority:'High',

status:'Ongoing',

completion:65,



milestones:[

{
name:'Foundation Complete',
planned:'20-06-2026',
actual:'25-06-2026',
status:'Completed',
delay:'5 Days',
remarks:'Completed successfully'
},


{
name:'Structure Work',
planned:'01-08-2026',
actual:'-',
status:'Ongoing',
delay:'0',
remarks:'Work in progress'
}

],





engineers:[

{
name:'Arun Kumar',
id:'SE101',
contact:'9876543210',
area:'Foundation Area'
},


{
name:'Priya Sharma',
id:'SE102',
contact:'9876543211',
area:'Structure Area'
}

],





contractors:[

{
name:'Raj Builders',
company:'Raj Construction Pvt Ltd',
specialization:'Civil',
contact:'9876500000'
}

],





resources:[

{
name:'Excavator',
quantity:5,
available:2,
allocated:3
},


{
name:'Crane',
quantity:3,
available:1,
allocated:2
}

],





materials:[

{
name:'Cement',
quantity:'500 Bags',
status:'Available'
},


{
name:'Steel',
quantity:'200 Tons',
status:'Approved'
}

]


};


}


}



}