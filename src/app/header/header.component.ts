import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['../../styles/reset.scss','../../styles/_variables.scss', './header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }


  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToPlants() {
    this.router.navigate(['/plants']);
  }

  navigateToConseils() {
    this.router.navigate(['/conseils']);
  }

  navigateToPhotos() {
    this.router.navigate(['/photos']);
  }
}

