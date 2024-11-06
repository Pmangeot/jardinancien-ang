import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  @Output() loginSuccess = new EventEmitter<void>();


  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.loginData.username, this.loginData.password)
      .subscribe({
        next: (tokens) => {
          console.log('Login successful, tokens:', tokens);
          this.loginSuccess.emit();

          // Route vers la page principale ou autre logique après le login
          // Par exemple : this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login error:', error);
          // Handle login error
        }
      });

  }
}
