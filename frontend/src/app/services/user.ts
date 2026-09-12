import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  user_id: number;
  full_name: string;
  email: string;
  mobile: string;
  role: string;
  department: string | null;
  employee_id: string | null;
  status: string;
}

export interface CreateUser {

  full_name: string;
  email: string;
  mobile: string;
  password: string;
  confirm_password: string;
  role: string;
  employee_id: string;
  department: string;
  address: string;
  profile_picture: string;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient
  ) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiUrl}/admin/users`
    );
  }

  addUser(userData: CreateUser) {
     return this.http.post(`${this.apiUrl}/admin/users`, userData);
  }
  deleteUser(userId: number) {
  return this.http.delete(`${this.apiUrl}/admin/users/${userId}`);
}
}