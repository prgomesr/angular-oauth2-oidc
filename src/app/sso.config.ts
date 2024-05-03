import {AuthConfig} from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8080',
  redirectUri: window.location.origin + '/index.html',
  postLogoutRedirectUri: window.location.origin + '/home',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  clientId: 'proteu-web',
  responseType: 'code',
  scope: 'openid READ WRITE',
  showDebugInformation: true,
  useSilentRefresh: true
}
