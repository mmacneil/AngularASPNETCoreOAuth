 
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../../core/services/auth.service';
import { Credentials }    from '../../../shared/models/credentials';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  credentials: Credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }

    // TODO: Remove this when we're done
    // diagnostic property to return a JSON representation of the model.
    get diagnostic() { return JSON.stringify(this.credentials); }

    onSubmit() {    
      
      this.spinner.show();

      this.authService.login()
      .pipe(finalize(() => {
        this.spinner.hide();
      }))  
      .subscribe(
      result => {         
         if(result) {
           // success
         }
      },
      error => {
        this.error = error.error.message;        
      });
    }   

    ngOnInit() {
    }
}


 