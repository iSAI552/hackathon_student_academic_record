import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // To hold the error message

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    console.log('Attempting login...');
    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful!');
      // Login successful, navigate to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login failed.');
      // Set the error message to be displayed in the template
      this.errorMessage = 'Invalid username or password';
    }
  }
}
