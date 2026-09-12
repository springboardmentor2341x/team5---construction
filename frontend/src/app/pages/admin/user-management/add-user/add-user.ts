import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, CreateUser } from '../../../../services/user';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
errorMessage = '';
  showSuccessPopup = false;

  userData: CreateUser = {
    
    full_name: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: '',
    role: 'Administrator',
    employee_id: '',
    department: '',
    address: '',
    profile_picture: ''

  };
  constructor(  private userService: UserService, private router: Router,
    private cdr:ChangeDetectorRef
  ) {}

   addUser() {

    console.log('Sending user:', this.userData);

    this.userService.addUser(this.userData).subscribe({

      next: (response) => {

        console.log('User added successfully:', response);

        this.showSuccessPopup = true;
this.cdr.detectChanges()
      },

      error: (error) => {

        console.error('Add user error:', error);
         if (error.error?.detail?.length > 0) {
    this.errorMessage = error.error.detail[0].msg;
  } else {
    this.errorMessage = 'Something went wrong. Please try again.';
  }

  this.cdr.detectChanges()
      }

    });

  }
  closePopup() {

    this.showSuccessPopup = false;

    this.router.navigate(['/admin/user-details']);

  }

}