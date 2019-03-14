import { Component, OnInit } from '@angular/core';

import { Credentials }    from '../../../shared/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = { email: '', password: '' };

  constructor() { }

    // TODO: Remove this when we're done
    // diagnostic property to return a JSON representation of the model.
    get diagnostic() { return JSON.stringify(this.credentials); }

    onSubmit() { 
      alert("creds = " + this.credentials.email + " " + this.credentials.password); 
    }

  ngOnInit() {
  }
}


 