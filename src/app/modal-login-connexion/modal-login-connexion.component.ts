import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // replace with the path to your auth service

@Component({
  standalone: true,
  selector: 'app-modal-login-connexion',
  templateUrl: './modal-login-connexion.component.html',
  styleUrls: ['./modal-login-connexion.component.scss']
})
export class ModalLoginConnexionComponent implements OnInit {
  isLogin = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/reservation']);
    }
  }

  toggleForm(): void {
    this.isLogin = !this.isLogin;
  }

  onLogin(): void {
    // handle login logic here
  }

  onSignup(): void {
    // handle signup logic here
  }
}
