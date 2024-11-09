import { Component, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { ReservationPageComponent } from '../reservation-page/reservation-page.component';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, SignupComponent, LoginComponent, RouterModule, ReservationPageComponent],
  templateUrl: './plants.component.html',
  styleUrls: ['../../styles/reset.scss','../../styles/_variables.scss','./plants.component.scss']
})

export class PlantsComponent implements OnInit {
  isLogin = false;
  login = true;
  private isLoggedInSubscription: Subscription;

  signupData = { firstname: '', lastname: '', email: '', password: '' };
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService) {
    this.isLoggedInSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLogin = isLoggedIn;
      console.log('isLogin:', this.isLogin);
    });
  }



  ngOnInit() {
    this.isLoggedInSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLogin = isLoggedIn;
      console.log('isLogin:', this.isLogin);
    });
  }

  onLoginSuccess(): void {
    this.isLogin = true;
  }

  toggleForm(): void {
    this.login = !this.login;
  }

}
