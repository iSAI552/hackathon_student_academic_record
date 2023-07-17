import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  authService: AuthService; // Declare authService as public property

  constructor(private auth: AuthService, private router: Router) {
    this.authService = auth; // Assign the authService instance to the public property
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
