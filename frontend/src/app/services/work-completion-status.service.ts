import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WorkCategoryProgress {
  category: string;
  progress_percentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkCompletionStatusService {

  private http = inject(HttpClient);

  private apiUrl =
    'https://buildtrack-backend-obv7.onrender.com/milestones/site-engineer/work-category-progress';

  getWorkCategoryProgress(): Observable<WorkCategoryProgress[]> {
    return this.http.get<WorkCategoryProgress[]>(this.apiUrl);
  }
}