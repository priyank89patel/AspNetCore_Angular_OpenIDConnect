import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/config.service';
import { HomeModule } from './home/home.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { TopSecretModule } from './top-secret/top-secret.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    AccountModule,
    TopSecretModule,   
    AppRoutingModule,
    ShellModule,
    SharedModule,
    NgxSpinnerModule,
    RouterModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
