import { of } from 'rxjs';

export class MockAuthService {  
    
    authNavStatus$ = of(true);

    register(userRegistration: any) {    
        return of('');
      }

    isAuthenticated(): boolean {
       return false;
      }  
      
      get authorizationHeaderValue(): string {
        return '';
      }
}