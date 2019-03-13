import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Module Imports */
import { AccountModule }  from '../modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccountModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
