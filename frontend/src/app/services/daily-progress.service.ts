import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DailyProgressCreate {
  milestone_id: number;
  site_engineer_id: number;
  project_contractor_id: number;
  report_date: string;
  activity_performed?: string;
  progress_percentage: number;
  weather_condition?: string;
  safety_observations?: string;
  quality_remarks?: string;
  additional_comments?: string;
}

export interface DailyProgressResponse extends DailyProgressCreate {
  report_id: number;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DailyProgressService {

  private apiUrl = 'http://127.0.0.1:8000/daily-progress';

  constructor(private http: HttpClient) {}

  createReport(
    report: DailyProgressCreate
  ): Observable<DailyProgressResponse> {
    return this.http.post<DailyProgressResponse>(
      `${this.apiUrl}/`,
      report
    );
  }

  getReports(): Observable<DailyProgressResponse[]> {
    return this.http.get<DailyProgressResponse[]>(
      `${this.apiUrl}/`
    );
  }
  getReportById(reportId:number): Observable<DailyProgressResponse>{
    return this.http.get<DailyProgressResponse>(`${this.apiUrl}/${reportId}`);
  }

  deleteReport(reportId: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${reportId}`
    );
  }
}