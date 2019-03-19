import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import {BaseService} from "../../shared/base.service";
import { ConfigService } from '../../shared/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService  {

  constructor(private http: HttpClient, private configService: ConfigService) { 
    super();
    this.baseUrl = this.configService.getApiURI();    
  }

  login() {    
    return this.http.post('/users/authenticate',"");
  }

  register(userRegistration: any) {    
    return this.http.post(this.baseUrl + '/accounts', userRegistration).pipe(catchError(this.handleError));
  }
}
