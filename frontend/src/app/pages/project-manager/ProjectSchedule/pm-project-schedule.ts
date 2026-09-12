import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, TitleStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  ProjectScheduleService,
  ProjectSchedule,
  ProjectScheduleCreate
} from '../../../services/project-schedule.service';

interface Schedule {
  schedule_id: number;
  project_id: number;
  taskName: string;
  startDate: string;
  endDate: string;
  duration: string;
  engineer: string;
  status: string;
  sequence_order: number;
}

@Component({
  selector: 'app-project-schedule',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './pm-project-schedule.html',
  styleUrls: ['./pm-project-schedule.css']
})
export class ProjectScheduleComponent implements OnInit {

  private scheduleService = inject(ProjectScheduleService);
constructor(private cdr:ChangeDetectorRef){}
  schedules: Schedule[] = [];

  loading = false;
  saving = false;

  errorMessage = '';
  successMessage = '';

  // Jis project ke liye schedule create karna hai
  // projectId = 3;

  // Add Schedule form
  newSchedule = {
    projectId: 0,
    taskName: '',
    startDate: '',
    endDate: '',
    duration: 0,
    engineer: '',
    status: 'Not Started'
  };

  ngOnInit(): void {
    this.loadSchedules();
  }

  // =========================
  // GET SCHEDULES
  // =========================

  loadSchedules(): void {

    this.loading = true;
    this.errorMessage = '';

    this.scheduleService.getAllSchedules().subscribe({

      next: (data: ProjectSchedule[]) => {

        console.log('Project Schedules:', data);

        this.schedules = data.map((schedule) => ({

          schedule_id: schedule.schedule_id,

          project_id: schedule.project_id,

          taskName: schedule.phase_name,

          startDate: this.formatDate(
            schedule.planned_start_date
          ),

          endDate: this.formatDate(
            schedule.planned_end_date
          ),

          duration: schedule.estimated_duration_days
            ? `${schedule.estimated_duration_days} Days`
            : '-',

          engineer: 'Not Assigned',

          status: schedule.status || 'Not Started',

          sequence_order: schedule.sequence_order

        }));

        this.loading = false;
        this.cdr.detectChanges()
      },

      error: (error) => {

        console.error('Error loading schedules:', error);

        this.errorMessage =
          error?.error?.detail ||
          'Unable to load project schedules.';

        this.loading = false;
      }

    });
  }

  // =========================
  // POST CREATE SCHEDULE
  // =========================

  saveSchedule(): void {

    this.errorMessage = '';
    this.successMessage = '';

    // Basic validation
    if (
       !this.newSchedule.projectId ||
      !this.newSchedule.taskName ||
      !this.newSchedule.startDate ||
      !this.newSchedule.endDate ||
      !this.newSchedule.duration
    ) {

      this.errorMessage =
        'Please fill all required schedule fields.';

      return;
    }

    this.saving = true;

    const scheduleData: ProjectScheduleCreate = {

    project_id: Number(this.newSchedule.projectId),

      phase_name: this.newSchedule.taskName,

      sequence_order: this.schedules.length + 1,

      estimated_duration_days:
        Number(this.newSchedule.duration),

      planned_start_date:
        this.newSchedule.startDate,

      planned_end_date:
        this.newSchedule.endDate,

      actual_start_date:
        null,

      actual_end_date:
        null,

      status:
        this.newSchedule.status

    };

    console.log(
      'Creating Schedule:',
      scheduleData
    );

    this.scheduleService
      .createSchedule(scheduleData)
      .subscribe({

        next: (response: ProjectSchedule) => {

          console.log(
            'Schedule created successfully:',
            response
          );

          // Newly created schedule table me immediately show hoga
          this.schedules.push({

            schedule_id:
              response.schedule_id,

            project_id:
              response.project_id,

            taskName:
              response.phase_name,

            startDate:
              this.formatDate(
                response.planned_start_date
              ),

            endDate:
              this.formatDate(
                response.planned_end_date
              ),

            duration:
              response.estimated_duration_days
                ? `${response.estimated_duration_days} Days`
                : '-',

            engineer:
              'Not Assigned',

            status:
              response.status || 'Not Started',

            sequence_order:
              response.sequence_order

          });

          this.schedules = [...this.schedules];

          this.saving = false;

          this.successMessage =
            'Schedule created successfully!';

          // Form reset
          this.resetForm();
          this.cdr.detectChanges()

        },

        error: (error) => {

          console.error(
            'Create schedule error:',
            error
          );

          this.errorMessage =
            error?.error?.detail ||
            'Unable to create schedule.';

          this.saving = false;
        }

      });

      this.cdr.detectChanges()
  }

  // =========================
  // RESET FORM
  // =========================

  resetForm(): void {

    this.newSchedule = {
      projectId: 0,

      taskName: '',

      startDate: '',

      endDate: '',

      duration: 0,

      engineer: '',

      status: 'Not Started'

    };

  }

  // =========================
  // DELETE
  // =========================

  deleteSchedule(index: number): void {

    const schedule =
      this.schedules[index];

    this.scheduleService
      .deleteSchedule(schedule.schedule_id)
      .subscribe({

        next: () => {

          this.schedules =
            this.schedules.filter(
              (_, i) => i !== index
            );

          this.successMessage =
            'Schedule deleted successfully.';
this.cdr.detectChanges()
        },

        error: (error) => {

          console.error(
            'Delete schedule error:',
            error
          );

          this.errorMessage =
            error?.error?.detail ||
            'Unable to delete schedule.';

        }

      });
  }

  // =========================
  // DATE FORMAT
  // =========================

  formatDate(
    date: string | null
  ): string {

    if (!date) {
      return '-';
    }

    const d = new Date(date);

    const day =
      String(d.getDate()).padStart(2, '0');

    const month =
      String(d.getMonth() + 1).padStart(2, '0');

    const year =
      d.getFullYear();

    return `${day}-${month}-${year}`;
  }
}