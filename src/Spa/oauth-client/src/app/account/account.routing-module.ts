import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Shell } from './../shell/shell.service';

const routes: Routes = [
Shell.childRoutes([
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }    
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule { }