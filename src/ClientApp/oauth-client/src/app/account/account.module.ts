import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../core/authentication/auth.service';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthService
  ]
})
export class AccountModule { }
