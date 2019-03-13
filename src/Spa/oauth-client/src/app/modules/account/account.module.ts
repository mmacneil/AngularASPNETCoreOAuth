import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AccountRouting } from './account.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountRouting
  ]
})
export class AccountModule { }
