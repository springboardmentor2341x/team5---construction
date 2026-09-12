import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProjectSchedule {
  schedule_id: number;
  project_id: number;
  phase_name: string;
  sequence_order: number;
  estimated_duration_days: number | null;
  planned_start_date: string | null;
  planned_end_date: string | null;
  actual_start_date: string | null;
  actual_end_date: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectScheduleCreate {
  project_id: number;
  phase_name: string;
  sequence_order: number;
  estimated_duration_days?: number | null;
  planned_start_date?: string | null;
  planned_end_date?: string | null;
  actual_start_date?: string | null;
  actual_end_date?: string | null;
  status?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectScheduleService {

  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/project-schedules';

  // GET
  getAllSchedules(): Observable<ProjectSchedule[]> {
    return this.http.get<ProjectSchedule[]>(`${this.apiUrl}/`);
  }

  // POST
  createSchedule(
    schedule: ProjectScheduleCreate
  ): Observable<ProjectSchedule> {
    return this.http.post<ProjectSchedule>(
      `${this.apiUrl}/`,
      schedule
    );
  }

  // DELETE
  deleteSchedule(scheduleId: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${scheduleId}`
    );
  }
}