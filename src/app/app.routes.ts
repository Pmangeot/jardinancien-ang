import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TipsComponent } from './tips/tips.component';
import { PlantsComponent } from './plants/plants.component';
import { AlbumComponent } from './album/album.component';
import { LegalComponent } from './legal/legal.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlantsoffComponent } from './plantsoff/plantsoff.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'plants',
    component: PlantsComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'plantsoff', component:PlantsoffComponent }
    ]
  },
  { path: 'conseils', component: TipsComponent },
  { path: 'photos', component: AlbumComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: MainComponent },

];
