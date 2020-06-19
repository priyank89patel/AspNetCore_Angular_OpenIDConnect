import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User, UserManagerSettings, UserManager } from 'oidc-client';
import { ConfigService } from 'src/app/shared/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionExpiringComponent } from 'src/app/account/session-expiring/session-expiring.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(private http: HttpClient, private configService: ConfigService,
    private modalService:NgbModal) {
    super();

    //Register access token expiring event
    this.manager.events.addAccessTokenExpiring(this.showSessionExpiringPopup.bind(this));
    this.manager.getUser().then(user => {
      this.user = user;
      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }

  login() {
    return this.manager.signinRedirect();
  }

  async completeAuthentication() {
    this.user = await this.manager.signinRedirectCallback();
    this._authNavStatusSource.next(this.isAuthenticated());
  }

  register(userRegistration: any) {
    return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(catchError(this.handleError));
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  async signOut() {
    await this.manager.signoutRedirect();
  }

  async silentRenew() {
    await this.manager.signinSilent();
  }

  showSessionExpiringPopup(){
    this.modalService.open(SessionExpiringComponent);
  }
}



export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:5000',
    client_id: 'angular_spa',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200',
    response_type: 'code',
    scope: 'openid profile email api.read',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: false,
    silent_redirect_uri: 'http://localhost:4200/assets/silent_refresh.html'
  };
}

