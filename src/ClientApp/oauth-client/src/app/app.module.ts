import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule, 
    CoreModule,
    HomeModule,
    AccountModule,
   // TopSecretModule,   
    AppRoutingModule,
    ShellModule,   
    SharedModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
