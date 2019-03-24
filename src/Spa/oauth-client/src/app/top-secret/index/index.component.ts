import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/authentication/auth.service';
import { TopSecretService } from '../top-secret.service';

@Component({
  selector: 'top-secret-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  claims='';

  constructor(private authService: AuthService, private topSecretService: TopSecretService) { }

  ngOnInit() {
   this.topSecretService.fetchTopSecretData(this.authService.authorizationHeaderValue).subscribe(
   result => {         
      console.log(result);
   });
  }
}
