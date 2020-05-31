import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  name: string;
  isAuthenticated: boolean;
  subscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.authNavStatus$
      .subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
  }

  async signOut() {
    await this.authService.signOut();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
