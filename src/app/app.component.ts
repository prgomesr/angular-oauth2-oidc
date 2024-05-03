import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {OAuthService, OAuthSuccessEvent} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./sso.config";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testes-ui';

  constructor(private oauthService: OAuthService,
              private router: Router) {
    this.configureSingleSingOn();
  }

  configureSingleSingOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then();

    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthSuccessEvent && event.type === 'token_received') {
        console.log('redirecionando para pagina apos login....');
        this.router.navigateByUrl('/home').then();
      }
    });
  }

}
