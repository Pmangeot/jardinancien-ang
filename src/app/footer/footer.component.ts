import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['../../styles/reset.scss','../../styles/_variables.scss', './footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) { }

  navigateToLegal() {
    this.router.navigate(['/legal']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

}
