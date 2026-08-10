

import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Activity{

  id:number;

  projectName:string;

  date:string;

  time:string;

  activityType:string;

  description:string;

  responsiblePerson:string;

  status:string;

  remarks:string;

}

@Component({
  selector:'app-se-activity-logs',
  standalone:true,
  imports:[CommonModule,RouterLink,FormsModule ],
  templateUrl:'./se-activity-logs.html',
  styleUrl:'./se-activity-logs.css'
})

export class SeActivityLogs{

  activities:Activity[]=[

    {

      id:1,
      projectName:'City Mall Construction',
      date:'04 Aug 2026',

      time:'10:30 AM',

      activityType:'Material Arrival',

      description:'500 Cement Bags Delivered',

      responsiblePerson:'Rahul Singh',

      status:'Completed',
      remarks:'Material verified successfully'
    },

    {

      id:2,
        projectName:'City Mall Construction',
      date:'04 Aug 2026',

      time:'01:15 PM',

      activityType:'Machinery Maintenance',

      description:'Excavator servicing completed',

      responsiblePerson:'Amit Kumar',

      status:'Completed',
       remarks:'Material verified successfully'

    },

    {

      id:3,

      date:'05 Aug 2026',
        projectName:'City Mall Construction',
      time:'09:00 AM',

      activityType:'Safety Training',

      description:'PPE safety awareness session',

      responsiblePerson:'Safety Officer',

      status:'Completed',
        remarks:'Material verified successfully'

    },

    {

      id:4,

      date:'05 Aug 2026',
      projectName:'City Mall Construction',
      time:'03:45 PM',

      activityType:'Client Visit',

      description:'Client inspected foundation work',

      responsiblePerson:'Project Manager',

      status:'Completed',
        remarks:'Material verified successfully'

    }

   ];



      searchText = '';

    selectedProject = 'All';

    selectedType = 'All';

    selectedStatus = 'All';



    // Add Activity Modal
    showAddActivityModal = false;

    activity = {
      date: '',
      projectName: '',
      time: '',
      activityType: 'Activity Type',
      description: '',
      responsiblePerson: '',
      status: 'Completed',
      remarks: ''
    };


      get totalActivities(){

        return this.activities.length;

      }

      get completedActivities(){

        return this.activities.filter(a=>a.status==='Completed').length;

      }




            get filteredActivities() {

            return this.activities.filter(activity => {

              const matchesSearch =
                activity.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
                activity.responsiblePerson.toLowerCase().includes(this.searchText.toLowerCase()) ||
                activity.activityType.toLowerCase().includes(this.searchText.toLowerCase());

              const matchesProject =
                this.selectedProject === 'All' ||
                activity.projectName === this.selectedProject;

              const matchesType =
                this.selectedType === 'All' ||
                activity.activityType === this.selectedType;

              const matchesStatus =
                this.selectedStatus === 'All' ||
                activity.status === this.selectedStatus;

              return matchesSearch &&
                    matchesProject &&
                    matchesType &&
                    matchesStatus;

            });

          }





      get pendingActivities(){

        return this.activities.filter(

          a=>a.status==='Pending'

        ).length;

      }

    get inProgressActivities(){

      return this.activities.filter(

        a=>a.status==='In Progress'

      ).length;

    }




  openAddActivity(){
    this.showAddActivityModal = true;
  }
  closeAddActivity(){
    this.showAddActivityModal = false;
  }
  saveActivity(){
    const newActivity: Activity = {
      id: this.activities.length +1,
      projectName: this.activity.projectName,
      date: this.activity.date,
      time: this.activity.time,
      activityType: this.activity.activityType,
      description: this.activity.description,
      responsiblePerson: this.activity.responsiblePerson,
      status: this.activity.status,
      //remarks: this.activity.remarks
      remarks: ''
    };

    this.activities.unshift(newActivity);

    //reset form
    this.activity={
      projectName: '',
      date: '',
      time: '',
      activityType: '',
      description: '',
      responsiblePerson: '',
      status: 'completed',
      remarks: ''
    };
    this.showAddActivityModal = false;
  }     
  



  photoPreview: string | null = null;
selectedPhoto: File | null = null;

onPhotoSelected(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    this.selectedPhoto = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.photoPreview = reader.result as string;
    };

    reader.readAsDataURL(this.selectedPhoto);
  }
}
}