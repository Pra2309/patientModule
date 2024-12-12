// src/app/shared/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true 
})
export class NavbarComponent {
  constructor(private router: Router) {}

  toggleSidebar() {
    // Implement the toggle logic for the sidebar here
  }
}
