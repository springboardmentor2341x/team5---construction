import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    MatIconModule
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {}