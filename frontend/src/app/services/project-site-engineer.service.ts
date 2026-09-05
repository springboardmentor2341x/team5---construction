import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


export interface ProjectSiteEngineer {
  project_site_engineer_id: number;
  project_id: number;
  site_engineer_id: number;
  assigned_date: string;
  end_date?: string | null;
  assignment_status?: string | null;
}

export interface Projectty {
  project_code: string;
  name: string;
  description: string;
  category: string;
  location: string;
  estimated_budget: number;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold' | 'Cancelled';
  planned_start_date: string;
  expected_completion_date: string;
  project_manager_id: number;
  client_id: number;
  project_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

export interface Milestone {
  milestone_name: string|null;
  description: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
  progress_percentage: string;
  planned_start_date: string;
  planned_end_date: string;
  actual_start_date: string | null;
  actual_end_date: string | null;
  milestone_id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectSiteEngineerService {
    constructor(private http: HttpClient) {}

      private milestoneapiUrl = 'http://127.0.0.1:8000/milestones'
     

    getmilestonedetail():Observable<Milestone[] > {
      return this.http.get<Milestone[]>(this.milestoneapiUrl);

    }

    getmilestonedetailbyId(id:number):Observable<Milestone > {
      return this.http.get<Milestone>(`${this.milestoneapiUrl}/${id}`);

    }
      private apiUrl = 'http://127.0.0.1:8000/project-site-engineers';

  

  getAllAssignments(): Observable<ProjectSiteEngineer[]> {
    return this.http.get<ProjectSiteEngineer[] >(
      `${this.apiUrl}/`
    );
  }

  getAssignment(id: number): Observable<ProjectSiteEngineer> {
    return this.http.get<ProjectSiteEngineer>(
      `${this.apiUrl}/${id}`
    );
  }

  createAssignment(
    assignment: Omit<ProjectSiteEngineer, 'project_site_engineer_id'>
  ): Observable<ProjectSiteEngineer> {
    return this.http.post<ProjectSiteEngineer>(
      `${this.apiUrl}/`,
      assignment
    );
  }

  updateAssignment(
    id: number,
    assignment: Partial<ProjectSiteEngineer>
  ): Observable<ProjectSiteEngineer> {
    return this.http.put<ProjectSiteEngineer>(
      `${this.apiUrl}/${id}`,
      assignment
    );
  }

  deleteAssignment(id: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}