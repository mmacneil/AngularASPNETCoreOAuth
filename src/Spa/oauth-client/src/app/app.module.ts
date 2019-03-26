import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// used to create fake backend
import { FakeBackendProvider } from './shared/mocks/fake-backend-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfigService } from './shared/config.service';

import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


/* Module Imports */
import { CoreModule } from './core/core.module';
import { HomeModule }  from './home/home.module';
import { AccountModule }  from './account/account.module';
import { ShellModule } from './shell/shell.module';
import { TopSecretModule } from './top-secret/top-secret.module';
import { SharedModule }   from './shared/shared.module';

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
    TopSecretModule,   
    AppRoutingModule,
    ShellModule,   
    SharedModule    
  ],
  providers: [
    ConfigService,
    // provider used to create fake backend
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
