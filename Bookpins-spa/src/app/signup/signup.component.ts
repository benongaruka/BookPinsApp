import { Component, OnInit } from '@angular/core';
import { TokenPayload } from '../_models/TokenPayload';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  }
  constructor(private authService: AuthenticationService, private router: Router) { }

  register() {
    this.authService.register(this.credentials).subscribe(() => {
      console.log('Successfully registered');
    }, (err) => {
      console.error(err);
    });
  }

}
