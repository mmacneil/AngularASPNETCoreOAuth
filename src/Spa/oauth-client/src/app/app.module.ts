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
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,  
    HttpClientModule, 
    HomeModule,
    AccountModule,   
    AppRoutingModule,
    SharedModule,
    ShellModule  
  ],
  providers: [
     // provider used to create fake backend
     FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
