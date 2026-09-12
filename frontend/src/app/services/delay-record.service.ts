import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DelayRecord {
  report_id: number;
  reason_for_delay: string;
  duration_hours: number | string;
  impact_on_project_timeline: string;
  description: string;
  delay_id: number;
  created_at: string;
  updated_at: string | null;
}

export interface CreateDelayRecord {
  report_id: number;
  reason_for_delay: string;
  duration_hours: number;
  impact_on_project_timeline: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DelayRecordService {

  private http = inject(HttpClient);

  private apiUrl =
    'http://127.0.0.1:8000/delay-records';

  // GET /delay-records/
  getAllDelayRecords(): Observable<DelayRecord[]> {
    return this.http.get<DelayRecord[]>(
      `${this.apiUrl}/`
    );
  }

  // POST /delay-records/
  createDelayRecord(
    data: CreateDelayRecord
  ): Observable<DelayRecord> {
    return this.http.post<DelayRecord>(
      `${this.apiUrl}/`,
      data
    );
  }

  // DELETE /delay-records/{delay_id}
  deleteDelayRecord(
    delayId: number
  ): Observable<string> {
    return this.http.delete<string>(
      `${this.apiUrl}/${delayId}`
    );
  }
}