import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   if (this.oauthService.hasValidAccessToken())
    //     this.router.navigateByUrl('/home').then();
    // }, 800);
  }

  login() {
    console.log('clicando...');
    this.oauthService.initImplicitFlow();
  }

  get token() {
    return this.oauthService.getIdentityClaims();
  }

}
