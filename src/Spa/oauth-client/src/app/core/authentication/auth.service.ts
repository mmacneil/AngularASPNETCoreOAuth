import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BaseService} from "../../shared/base.service";
import { ConfigService } from '../../shared/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService  {

  constructor(private http: HttpClient, private configService: ConfigService) { 
    super();
    alert(configService.getApiURI());
  }

  login() {    
    return this.http.post('/users/authenticate',"");
  }
}
