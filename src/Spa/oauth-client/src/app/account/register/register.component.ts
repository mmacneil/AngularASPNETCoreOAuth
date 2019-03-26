import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../core/authentication/auth.service';
import { UserRegistration }    from '../../shared/models/user.registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  success: boolean;
  error: string;
  userRegistration: UserRegistration = { name: '', email: '', password: ''};
  submitted: boolean = false;

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) {
  }
    // TODO: Remove this when we're done
    // diagnostic property to return a JSON representation of the model.
    get diagnostic() { return JSON.stringify(this.userRegistration); }

  ngOnInit() {
  }

  onSubmit() { 

    this.spinner.show();

    this.authService.register(this.userRegistration)
      .pipe(finalize(() => {
        this.spinner.hide();
      }))  
      .subscribe(
      result => {         
         if(result) {
           this.success = true;
         }
      },
      error => {
        this.error = error;       
      });
  }
}
