import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Milestone {
  milestone_id: number;
  project_id: number;
  milestone_name: string;
  description: string | null;
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Delayed';
  progress_percentage: number;
  planned_start_date: string;
  planned_end_date: string;
  actual_start_date: string | null;
  actual_end_date: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface MilestoneCreate {
  project_id: number;
  milestone_name: string;
  description?: string | null;
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Delayed';
  progress_percentage: number;
  planned_start_date: string;
  planned_end_date: string;
  actual_start_date?: string | null;
  actual_end_date?: string | null;
}

export interface MilestoneUpdate {
  milestone_name?: string;
  description?: string | null;
  status?: 'Not Started' | 'In Progress' | 'Completed' | 'Delayed';
  progress_percentage?: number;
  planned_start_date?: string;
  planned_end_date?: string;
  actual_start_date?: string | null;
  actual_end_date?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  private apiUrl = 'http://127.0.0.1:8000/milestones';

  constructor(private http: HttpClient) {}

  // GET all milestones
  getAllMilestones(): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(
      `${this.apiUrl}/`
    );
  }

  
  // GET milestones of a particular project
  getMilestonesByProject(projectId: number): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(
      `${this.apiUrl}/project/${projectId}`
    );
  }

  // GET single milestone
  getMilestone(id: number): Observable<Milestone> {
    return this.http.get<Milestone>(
      `${this.apiUrl}/${id}`
    );
  }

  // CREATE milestone
  createMilestone(
    milestone: MilestoneCreate
  ): Observable<Milestone> {
    return this.http.post<Milestone>(
      `${this.apiUrl}/`,
      milestone
    );
  }

  // UPDATE milestone
  updateMilestone(
    id: number,
    milestone: MilestoneUpdate
  ): Observable<Milestone> {
    return this.http.put<Milestone>(
      `${this.apiUrl}/${id}`,
      milestone
    );
  }

  // DELETE milestone
  deleteMilestone(id: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}