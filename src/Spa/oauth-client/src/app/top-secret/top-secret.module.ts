import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { IndexComponent } from './index/index.component';

import { TopSecretService }  from '../top-secret/top-secret.service';

import { TopSecretRoutingModule } from './top-secret.routing-module';

@NgModule({
  declarations: [IndexComponent],
  providers: [ TopSecretService],
  imports: [
    CommonModule,  
    TopSecretRoutingModule,
    SharedModule
  ]
})
export class TopSecretModule { }
