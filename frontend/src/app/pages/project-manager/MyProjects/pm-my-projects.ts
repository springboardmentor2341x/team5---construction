import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-my-projects',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './pm-my-projects.html',
  styleUrls: ['./pm-my-projects.css']
})


export class MyProjectsComponent {


  constructor(
    private router: Router
  ){}



projects:any[] = [


{
name:'Metro Tower Construction',
code:'BT-001',
client:'ABC Developers',
location:'Chennai',
status:'Ongoing',
priority:'High',
budget:'₹2,50,000',
completion:65,
startDate:'12-06-2026',
endDate:'20-12-2026',

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

},




{
name:'Villa Construction',
code:'BT-002',
client:'XYZ Builders',
location:'Bangalore',
status:'Completed',
priority:'Medium',
budget:'₹1,80,000',
completion:100,
startDate:'10-01-2026',
endDate:'25-06-2026',

milestones:[

{
name:'Foundation Complete',
planned:'20-02-2026',
actual:'20-02-2026',
status:'Completed',
delay:'0',
remarks:'Completed on time'
},

{
name:'Final Inspection',
planned:'20-06-2026',
actual:'25-06-2026',
status:'Completed',
delay:'5 Days',
remarks:'Approved'
}

],

engineers:[

{
name:'Ravi Kumar',
id:'SE102',
contact:'9876543212',
area:'Villa Site'
}

],

contractors:[

{
name:'Green Builders',
company:'Green Homes Pvt Ltd',
specialization:'Interior',
contact:'9876500002'
}

],

resources:[

{
name:'Concrete Mixer',
quantity:4,
available:2,
allocated:2
}

],

materials:[

{
name:'Tiles',
quantity:'1000 Sq Ft',
status:'Available'
}

]

},




{
name:'Hospital Building Project',
code:'BT-003',
client:'Health Group',
location:'Coimbatore',
status:'Delayed',
priority:'High',
budget:'₹3,20,000',
completion:40,
startDate:'05-03-2026',
endDate:'30-11-2026',

milestones:[

{
name:'Foundation Work',
planned:'20-03-2026',
actual:'30-03-2026',
status:'Completed',
delay:'10 Days',
remarks:'Rain delay'
},

{
name:'Structure Work',
planned:'15-07-2026',
actual:'-',
status:'Delayed',
delay:'15 Days',
remarks:'Material issue'
}

],

engineers:[

{
name:'Karthik Raj',
id:'SE103',
contact:'9876543213',
area:'Hospital Block'
}

],

contractors:[

{
name:'Build Masters',
company:'Build Masters Pvt Ltd',
specialization:'Civil',
contact:'9876500003'
}

],

resources:[

{
name:'JCB Machine',
quantity:6,
available:3,
allocated:3
}

],

materials:[

{
name:'Bricks',
quantity:'5000 Units',
status:'Pending'
}

]

},
{
name:'Smart City Road Project',
code:'BT-004',
client:'Urban Development',
location:'Chennai',
status:'Ongoing',
priority:'High',
budget:'₹5,00,000',
completion:55,
startDate:'15-02-2026',
endDate:'15-01-2027',

milestones:[

{
name:'Road Foundation',
planned:'20-03-2026',
actual:'25-03-2026',
status:'Completed',
delay:'5 Days',
remarks:'Completed'
},

{
name:'Road Construction',
planned:'01-06-2026',
actual:'-',
status:'Ongoing',
delay:'0',
remarks:'Work in progress'
}

],

engineers:[

{
name:'Sanjay Kumar',
id:'SE104',
contact:'9876543214',
area:'Road Section A'
}

],

contractors:[

{
name:'Urban Infra',
company:'Urban Developers',
specialization:'Civil',
contact:'9876500004'
}

],

resources:[

{
name:'Road Roller',
quantity:4,
available:2,
allocated:2
}

],

materials:[

{
name:'Bitumen',
quantity:'300 Kg',
status:'Available'
}

]

},




{
name:'IT Park Development',
code:'BT-005',
client:'Tech Solutions',
location:'Hyderabad',
status:'Pending',
priority:'Low',
budget:'₹8,00,000',
completion:20,
startDate:'01-07-2026',
endDate:'30-05-2027',

milestones:[

{
name:'Planning Approval',
planned:'15-07-2026',
actual:'-',
status:'Pending',
delay:'0',
remarks:'Waiting for approval'
}

],

engineers:[

{
name:'Vikram',
id:'SE105',
contact:'9876543215',
area:'IT Block'
}

],

contractors:[

{
name:'Tech Infra',
company:'Tech Construction',
specialization:'Electrical',
contact:'9876500005'
}

],

resources:[

{
name:'Tower Crane',
quantity:2,
available:2,
allocated:0
}

],

materials:[

{
name:'Electrical Cable',
quantity:'500 Meter',
status:'Pending'
}

]

},




{
name:'Shopping Mall Construction',
code:'BT-006',
client:'Retail India',
location:'Pune',
status:'Ongoing',
priority:'Medium',
budget:'₹6,50,000',
completion:70,
startDate:'20-04-2026',
endDate:'20-02-2027',

milestones:[

{
name:'Structure Completion',
planned:'20-09-2026',
actual:'-',
status:'Ongoing',
delay:'0',
remarks:'Under construction'
}

],

engineers:[

{
name:'Rahul Kumar',
id:'SE106',
contact:'9876543216',
area:'Mall Structure'
}

],

contractors:[

{
name:'Retail Builders',
company:'Retail Infra',
specialization:'Interior',
contact:'9876500006'
}

],

resources:[

{
name:'Lift Equipment',
quantity:5,
available:2,
allocated:3
}

],

materials:[

{
name:'Glass Panels',
quantity:'300 Units',
status:'Available'
}

]

},
{

name:'Airport Expansion Project',
code:'BT-007',
client:'Airport Authority',
location:'Mumbai',
status:'Delayed',
priority:'High',
budget:'₹12,00,000',
completion:35,
startDate:'12-05-2026',
endDate:'15-08-2027',

milestones:[

{
name:'Terminal Foundation',
planned:'20-07-2026',
actual:'-',
status:'Delayed',
delay:'15 Days',
remarks:'Material delay'
}

],

engineers:[

{
name:'Mohammed Ali',
id:'SE107',
contact:'9876543217',
area:'Terminal Area'
}

],

contractors:[

{
name:'Airport Infra',
company:'Airport Builders',
specialization:'Civil',
contact:'9876500007'
}

],

resources:[

{
name:'Heavy Crane',
quantity:8,
available:3,
allocated:5
}

],

materials:[

{
name:'Steel Frames',
quantity:'500 Tons',
status:'Approved'
}

]

},





{

name:'Residential Apartment Project',
code:'BT-008',
client:'Green Homes',
location:'Chennai',
status:'Ongoing',
priority:'Medium',
budget:'₹4,50,000',
completion:60,
startDate:'18-06-2026',
endDate:'10-03-2027',

milestones:[

{
name:'Apartment Structure',
planned:'20-10-2026',
actual:'-',
status:'Ongoing',
delay:'0',
remarks:'Construction running'
}

],

engineers:[

{
name:'Deepak Kumar',
id:'SE108',
contact:'9876543218',
area:'Apartment Block A'
}

],

contractors:[

{
name:'Green Homes',
company:'Green Homes Pvt Ltd',
specialization:'Civil',
contact:'9876500008'
}

],

resources:[

{
name:'Mixer Machine',
quantity:6,
available:3,
allocated:3
}

],

materials:[

{
name:'Bricks',
quantity:'10000 Units',
status:'Available'
}

]

}


];

filteredProjects:any[] = [...this.projects];
searchText = '';

selectedStatus = 'All Status';

selectedPriority = 'All Priority';
applyFilters(){
this.filteredProjects = this.projects.filter(project => {
const search =
project.name
.toLowerCase()
.includes(this.searchText.toLowerCase())
||
project.client
.toLowerCase()
.includes(this.searchText.toLowerCase());

const status =

this.selectedStatus === 'All Status'

||

project.status === this.selectedStatus;

const priority =

this.selectedPriority === 'All Priority'

||

project.priority === this.selectedPriority;
return search && status && priority;

});
}
getActiveProjects(){
return this.projects.filter(
project => project.status === 'Ongoing'
).length;
}
getCompletedProjects(){
return this.projects.filter(
project => project.status === 'Completed'
).length;
}
getDelayedProjects(){
return this.projects.filter(
project => project.status === 'Delayed'
).length;
}
openProject(project:any){
this.router.navigate(

[
'/project-manager/project-details'
],

{

state:{

project:project

}

}

);
}
}