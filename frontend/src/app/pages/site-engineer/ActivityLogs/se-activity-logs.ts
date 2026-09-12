import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  SiteActivityLogService,
  SiteActivityLog
} from '../../../services/site-activity-log.service';


interface Activity {

  id: number;

  // projectName: string;
 projectId: number;
  responsibleUserId: number;
  date: string;

  time: string;

  activityType: string;

  description: string;

  // responsiblePerson: string;
attachmentUrl: string | null;
  status: string;

  remarks: string;

}


@Component({
  selector: 'app-se-activity-logs',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],

  templateUrl: './se-activity-logs.html',

  styleUrl: './se-activity-logs.css'
})


export class SeActivityLogs implements OnInit {

  private activityLogService = inject(
    SiteActivityLogService
  );

  constructor(private cdr:ChangeDetectorRef){}

  // ================= Activity Data =================

  activities: Activity[] = [];


  // ================= Filters =================

  searchText = '';

  selectedProject = 'All';

  selectedType = 'All';

  selectedStatus = 'All';


  // ================= Add Activity Modal =================

  showAddActivityModal = false;


  activity = {

    date: '',

    projectName: '',

    projectId: 1,

    time: '',

    activityType: 'Activity Type',

    description: '',

    responsiblePerson: '',

    responsibleUserId: 4,

    status: 'Completed',

    remarks: ''

  };


  // ================= Photo =================

  photoPreview: string | null = null;

  selectedPhoto: File | null = null;


  // ================= Lifecycle =================

  ngOnInit(): void {

    this.loadActivities();

  }


  // ================= GET =================

  loadActivities(): void {

    this.activityLogService
      .getAllActivityLogs()
      .subscribe({

        next: (data) => {

          this.activities = data.map(
            (item: SiteActivityLog) => ({

              id: item.site_activity_id,
projectId: item.project_id,
  responsibleUserId: item.responsible_user_id,
              projectName:
                `Project #${item.project_id}`,

              date:
                this.formatDate(item.activity_date),

              time:
                this.formatTime(item.activity_time),

              activityType:
                this.formatActivityType(
                  item.activity_type
                ),

              description:
                item.description,

               attachmentUrl: item.attachment_url,


              status: 'Completed',

              remarks: ''

            })
          );
          this.cdr.detectChanges()

        },

        error: (error) => {

          console.error(
            'Failed to load activity logs:',
            error
          );

        }

      });

  }


  // ================= Summary =================

  get totalActivities() {

    return this.activities.length;

  }


  get completedActivities() {

    return this.activities.filter(
      a => a.status === 'Completed'
    ).length;

  }


  get pendingActivities() {

    return this.activities.filter(
      a => a.status === 'Pending'
    ).length;

  }


  get inProgressActivities() {

    return this.activities.filter(
      a => a.status === 'In Progress'
    ).length;

  }


  // ================= Filter =================

  get filteredActivities() {

    return this.activities.filter(activity => {

      const search =
        this.searchText.toLowerCase();


      const matchesSearch =

        activity.description
          .toLowerCase()
          .includes(search)

        ||

        // activity.responsiblePerson
        //   .toLowerCase()
        //   .includes(search)

        // ||

        activity.activityType
          .toLowerCase()
          .includes(search);


      const matchesProject =

        this.selectedProject === 'All'

      //  ||

        // activity.projectName ===
        // this.selectedProject;


      const matchesType =

        this.selectedType === 'All'

        ||

        activity.activityType ===
        this.selectedType;


      const matchesStatus =

        this.selectedStatus === 'All'

        ||

        activity.status ===
        this.selectedStatus;


      return (

        matchesSearch &&

        matchesProject &&

        matchesType &&

        matchesStatus

      );

    });

  }


  // ================= Modal =================

  openAddActivity(): void {

    this.showAddActivityModal = true;

  }


  closeAddActivity(): void {

    this.showAddActivityModal = false;

  }


  // ================= POST =================

  saveActivity(): void {

    if (
      !this.activity.date ||
      !this.activity.time ||
      !this.activity.description
    ) {

      alert('Please fill required fields.');

      return;

    }


    const payload = {

      project_id:
        this.activity.projectId,

      responsible_user_id:
        this.activity.responsibleUserId,

      activity_type:
        this.getApiActivityType(
          this.activity.activityType
        ),

      activity_date:
        this.activity.date,

      activity_time:
        this.activity.time,

      description:
        this.activity.description,

      attachment_url:
        null

    };


    this.activityLogService
      .createActivityLog(payload)
      .subscribe({

        next: (data) => {

          console.log(
            'Activity created:',
            data
          );


          // GET response ko UI me add karenge
const newActivity: Activity = {
  id: data.site_activity_id,

  projectId: data.project_id,

  responsibleUserId: data.responsible_user_id,

  date: this.formatDate(
    data.activity_date
  ),

  time: this.formatTime(
    data.activity_time
  ),

  activityType: this.formatActivityType(
    data.activity_type
  ),

  description: data.description,

  attachmentUrl: data.attachment_url,

  status: 'Completed',

  remarks: ''
};


          this.activities.unshift(
            newActivity
          );


          this.resetActivityForm();

          this.showAddActivityModal = false;

        },

        error: (error) => {

          console.error(
            'Failed to create activity:',
            error
          );

          alert(
            'Failed to create activity.'
          );

        }

      });

  }


  // ================= DELETE =================

  deleteActivity(id: number): void {

    const confirmDelete =
      confirm(
        'Are you sure you want to delete this activity?'
      );


    if (!confirmDelete) {

      return;

    }


    this.activityLogService
      .deleteActivityLog(id)
      .subscribe({

        next: (response) => {

          console.log(
            'Activity deleted:',
            response
          );


          this.activities =
            this.activities.filter(
              activity =>
                activity.id !== id
            );

        },

        error: (error) => {

          console.error(
            'Failed to delete activity:',
            error
          );

          alert(
            'Failed to delete activity.'
          );

        }

      });

  }


  // ================= Reset Form =================

  resetActivityForm(): void {

    this.activity = {

      date: '',

      projectName: '',

      projectId: 1,

      time: '',

      activityType: 'Activity Type',

      description: '',

      responsiblePerson: '',

      responsibleUserId: 4,

      status: 'Completed',

      remarks: ''

    };


    this.photoPreview = null;

    this.selectedPhoto = null;

  }


  // ================= Photo =================

  onPhotoSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;


    if (
      input.files &&
      input.files.length > 0
    ) {

      this.selectedPhoto =
        input.files[0];


      const reader =
        new FileReader();


      reader.onload = () => {

        this.photoPreview =
          reader.result as string;

      };


      reader.readAsDataURL(
        this.selectedPhoto
      );

    }

  }


  // ================= API Activity Type =================

  getApiActivityType(
    type: string
  ): string {

    const typeMap: {
      [key: string]: string
    } = {

      'Client Visit':
        'CLIENT_VISIT',

      'Safety Training':
        'SAFETY_TRAINING',

      'Machinery Maintenance':
        'MACHINERY_MAINTENANCE',

      'Material delivery':
        'MATERIAL_DELIVERY',

      'Government Inspection':
        'GOVERNMENT_INSPECTION',

      'Quality audit':
        'QUALITY_AUDIT',

      'Accident':
        'ACCIDENT_REPORT',

      'Meeting':
        'CONTRACTOR_MEETING',

      'Equipment Service':
        'EQUIPMENT_SERVICING'

    };


    return typeMap[type] || 'OTHER';

  }


  // ================= API → UI Type =================

  formatActivityType(
    type: string
  ): string {

    const typeMap: {
      [key: string]: string
    } = {

      CLIENT_VISIT:
        'Client Visit',

      SAFETY_TRAINING:
        'Safety Training',

      MACHINERY_MAINTENANCE:
        'Machinery Maintenance',

      MATERIAL_DELIVERY:
        'Material delivery',

      GOVERNMENT_INSPECTION:
        'Government Inspection',

      QUALITY_AUDIT:
        'Quality audit',

      ACCIDENT_REPORT:
        'Accident',

      CONTRACTOR_MEETING:
        'Meeting',

      EQUIPMENT_SERVICING:
        'Equipment Service'

    };


    return typeMap[type] || type;

  }


  // ================= Date =================

  formatDate(date: string): string {

    if (!date) {

      return '';

    }


    const dateObject =
      new Date(date);


    return dateObject.toLocaleDateString(
      'en-GB',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }
    );

  }


  // ================= Time =================

  formatTime(time: string): string {

    if (!time) {

      return '';

    }


    const parts =
      time.split(':');


    const hour =
      Number(parts[0]);


    const minute =
      parts[1];


    const suffix =
      hour >= 12 ? 'PM' : 'AM';


    const displayHour =
      hour % 12 || 12;


    return `${displayHour}:${minute} ${suffix}`;

  }

}