import { NgModule, Optional, SkipSelf } from '@angular/core';
 
import { AuthService } from './authentication/auth.service';
 

@NgModule({
  imports: [
  ],
  providers: [
    AuthService    
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}