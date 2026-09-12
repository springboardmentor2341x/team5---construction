import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable, tap } from 'rxjs';
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c

export interface LoginRequest {
  email: string;
  password: string;
  remember_me: boolean;
}

export interface LoginResponse {
  message: string;
  access_token: string;
  token_type: string;
  role: string;
  full_name: string;
  expires_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      data
<<<<<<< HEAD
    );
  }
=======
    ).pipe(
      tap((response) => {

        // JWT token save
        localStorage.setItem(
          'access_token',
          response.access_token
        );

        // User role save
        localStorage.setItem(
          'role',
          response.role
        );

        // User name save
        localStorage.setItem(
          'full_name',
          response.full_name
        );

        console.log('Token saved:', response.access_token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    localStorage.removeItem('full_name');
  }
>>>>>>> a25601018d2b438034d0eae4f16f47f716fe060c
}