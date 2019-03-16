import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule }   from './shared/shared.module';

// used to create fake backend
import { FakeBackendProvider } from './core/mocks/fake-backend-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Module Imports */
import { HomeModule }  from './home/home.module';
import { AccountModule }  from './account/account.module';
import { HeaderComponent } from './core/header/header.component';

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
    AppRoutingModule,
    SharedModule  
  ],
  providers: [
     // provider used to create fake backend
     FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
