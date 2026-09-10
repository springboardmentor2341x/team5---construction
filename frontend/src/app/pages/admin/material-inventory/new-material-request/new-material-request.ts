import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-material-request',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './new-material-request.html',
  styleUrl: './new-material-request.css'
})
export class NewMaterialRequest {

  request = {
    material: '',
    project: '',
    quantity: null,
    unit: '',
    requiredDate: '',
    priority: '',
    remarks: ''
  };

  showSuccessPopup = false;

  submitRequest() {
    this.showSuccessPopup = true;
  }

  closePopup() {
    this.showSuccessPopup = false;
  }
}