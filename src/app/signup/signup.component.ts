import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { LegalComponent } from '../legal/legal.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, LegalComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupData = { firstname: '', lastname: '', email: '', password: '' , acceptTerms: false};

  constructor(private authService: AuthService) {}

  onSignup(): void {
    this.authService.signup(this.signupData.firstname, this.signupData.lastname, this.signupData.email, this.signupData.password)
      .subscribe({
        next: (response) => {
          console.log('Signup successful:', response);
          // Handle successful signup (e.g., redirect to login)
        },
        error: (error) => {
          console.error('Signup error:', error);
          // Handle signup error
        }
      });
  }
}
