import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

// used to create fake backend
import { FakeBackendProvider } from './mocks/fake-backend-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Module Imports */
import { HomeModule }  from '../modules/home/home.module';
import { AccountModule }  from '../modules/account/account.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule, 
    HomeModule,
    AccountModule,   
    AppRoutingModule    
  ],
  providers: [
     // provider used to create fake backend
     FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
