import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, SignupComponent, LoginComponent, RouterModule],
  templateUrl: './plants.component.html',
  styleUrls: ['../../styles/reset.scss','../../styles/_variables.scss','./plants.component.scss']
})

export class PlantsComponent {
  isLogin = false;
  login = true;

  signupData = { firstname: '', lastname: '', email: '', password: '' };
  loginData = { email: '', password: '' };

  constructor() {}

  toggleForm(): void {
    this.login = !this.login;
  }




}
