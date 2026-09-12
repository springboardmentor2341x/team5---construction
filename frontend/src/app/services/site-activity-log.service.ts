import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SiteActivityLog {
  project_id: number;
  responsible_user_id: number;
  activity_type: string;
  activity_date: string;
  activity_time: string;
  description: string;
  attachment_url: string | null;
  site_activity_id: number;
  created_at: string;
  updated_at: string | null;
}

export interface SiteActivityLogCreate {
  project_id: number;
  responsible_user_id: number;
  activity_type: string;
  activity_date: string;
  activity_time: string;
  description: string;
  attachment_url?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class SiteActivityLogService {

  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/site-activity-logs';

  // GET - Get all site activity logs
  getAllActivityLogs(): Observable<SiteActivityLog[]> {
    return this.http.get<SiteActivityLog[]>(
      `${this.apiUrl}/`
    );
  }

  // POST - Create site activity log
  createActivityLog(
    activity: SiteActivityLogCreate
  ): Observable<SiteActivityLog> {
    return this.http.post<SiteActivityLog>(
      `${this.apiUrl}/`,
      activity
    );
  }

  // DELETE - Delete site activity log
  deleteActivityLog(
    logId: number
  ): Observable<string> {
    return this.http.delete<string>(
      `${this.apiUrl}/${logId}`
    );
  }
}