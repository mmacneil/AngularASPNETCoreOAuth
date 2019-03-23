import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule }   from '../shared/shared.module';

import { AccountRoutingModule } from './account.routing-module';
import { AuthService }  from '../core/authentication/auth.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    SharedModule  
  ]
})
export class AccountModule { }
