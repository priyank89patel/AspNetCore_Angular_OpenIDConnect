import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopSecretRoutingModule } from './top-secret-routing.module';
import { IndexComponent } from './index/index.component';
import { TopSecretService } from './top-secret.service';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [IndexComponent],
  providers:[TopSecretService],
  imports: [
    CommonModule,
    TopSecretRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class TopSecretModule { }
