import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {authGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
];
