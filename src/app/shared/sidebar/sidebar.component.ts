// src/app/shared/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule to use ngClass

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule]  // Import CommonModule for ngClass
})
export class SidebarComponent {
  isSidebarOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;  // Toggle the sidebar state
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.isSidebarOpen = false; // Close the sidebar after navigation
  }
}
