/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrl: './menu-vertical.component.css'
})
export class MenuVerticalComponent {
  constructor(private router: Router) {}

  isCollapsed = false;
  menuItems = [
    { name: 'Home', route: '/dashboard', icon: 'fas fa-home' },
    { name: 'Users', route: '/dashboard/users', icon: 'fas fa-users' },
    { name: 'Photos', route: '/dashboard/photos', icon: 'fas fa-images' },
    { name: 'Family Tree', route: '/dashboard/family-three', icon: 'fas fa-tree' }
  ];

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    // Implement your logout logic here
    this.router.navigate(['/']); // Redirect to home or login page
  }
}
