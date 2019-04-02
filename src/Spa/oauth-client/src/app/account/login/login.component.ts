import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }    
  
    title = "Login";
    
    login() {     
      this.spinner.show();
      this.authService.login();
    }   

    ngOnInit() {
    }
}


 