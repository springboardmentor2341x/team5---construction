import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}