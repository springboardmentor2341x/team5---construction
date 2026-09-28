import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private apiUrl = 'https://buildtrack-backend-obv7.onrender.com/project-manager/dashboard';

  constructor(private http: HttpClient) {}

  getDashboard() {
    const token = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(
      `${this.apiUrl}`,
      { headers }
    );
  }
}