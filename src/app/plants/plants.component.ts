import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { PlantsoffComponent } from "../plantsoff/plantsoff.component";


@Component({
  selector: 'app-plants',
  standalone: true,  // Indiquer que ce composant est autonome
  imports: [CommonModule, SignupComponent, LoginComponent, RouterModule, PlantsoffComponent],  // Ajouter FormsModule aux imports
  templateUrl: './plants.component.html',
  styleUrls: ['../../styles/reset.scss','../../styles/_variables.scss','./plants.component.scss']
})

export class PlantsComponent {

  signupData = { firstname: '', lastname: '', email: '', password: '' };
  loginData = { email: '', password: '' };

  constructor() {}

}
