import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  project_id: number;
  project_code: string;
  name: string;
  description?: string | null;
  category?: string | null;
  location?: string | null;
  estimated_budget?: string | null;
  priority?: string | null;
  status?: string | null;
  planned_start_date?: string | null;
  expected_completion_date?: string | null;
  project_manager_id?: number | null;
  client_id?: number | null;
  created_at: string;
  updated_at: string;

   // Dummy frontend field
   progress?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://127.0.0.1:8000/projects';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/`);
  }

  getProject(id: number):Observable<Project>{
    return this.http.get<Project>(`${this.apiUrl}/${id}`)
  }
}