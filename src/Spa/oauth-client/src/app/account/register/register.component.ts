import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../core/authentication/auth.service';

import { UserRegistration }    from '../../shared/models/user.registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistration: UserRegistration = { name: '', email: '', password: '' };
  submitted: boolean = false;

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

}
