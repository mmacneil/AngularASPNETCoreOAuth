import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserRegistration }    from '../../shared/models/user.registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistration: UserRegistration = { name: '', email: '', password: '' };

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

}
