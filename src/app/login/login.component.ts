import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../input/user';
import { Router } from '@angular/router';
// import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errorRequired = false;
  invalidUser = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User('', '');
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.auth.login(this.user.username, this.user.password).subscribe(user => {
      console.log(user.result.token);
      localStorage.setItem('token', user.result.token);
      localStorage.setItem('objectId', user.result.objectId);
      console.log(user);
      this.invalidUser = false;
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      if (err.status === 401) {
        this.invalidUser = true;
      }
    });
  }
}
