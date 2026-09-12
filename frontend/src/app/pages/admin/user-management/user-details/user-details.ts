import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserService, User } from '../../../../services/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule
  ],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails implements OnInit {

  showDeletePopup = false;
  showSuccessPopup = false;
  selectedUserId: number | null = null;

  users: User[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {

    this.loading = true;
    this.errorMessage = '';

    this.userService.getAllUsers().subscribe({

      next: (data) => {

        console.log('Users:', data);

        this.users = data;
        this.loading = false;
          this.cdr.detectChanges()
      },

      error: (error) => {

        console.error('Get users error:', error);

        this.errorMessage = 'Unable to load users.';
        this.loading = false;

      }

    });

  }

 openDeletePopup(userId: number): void {
  this.selectedUserId = userId;
  this.showDeletePopup = true;
}

cancelDelete(): void {
  this.showDeletePopup = false;
  this.selectedUserId = null;
}

 

deleteUser(): void {

  if (this.selectedUserId === null) {
    return;
  }

  this.userService.deleteUser(this.selectedUserId).subscribe({
    next: (response) => {

      console.log('User deleted successfully:', response);

      this.users = this.users.filter(
        user => user.user_id !== this.selectedUserId
      );

      this.showDeletePopup = false;
      this.showSuccessPopup = true;
      this.selectedUserId = null;
    },

    error: (error) => {

      console.error('Delete user error:', error);

      this.showDeletePopup = false;
      this.selectedUserId = null;

      if (error.error?.detail) {
        this.errorMessage = Array.isArray(error.error.detail)
          ? error.error.detail[0]?.msg
          : error.error.detail;
      } else {
        this.errorMessage = 'Unable to delete user.';
      }
    }
  });
}

  closeSuccessPopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/admin/user-details']);

  }

  get activeUsers(): number {
  return this.users.filter(user => user.status === 'Active').length;
}

get pendingUsers(): number {
  return this.users.filter(user => user.status === 'Pending').length;
}

get inactiveUsers(): number {
  return this.users.filter(user => user.status === 'Inactive').length;
}

}