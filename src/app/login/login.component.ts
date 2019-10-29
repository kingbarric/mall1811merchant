import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  msg = '';
  invalid =false;
  success = false;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const data = {
      email: this.form.controls.username.value,
      password: this.form.controls.password.value
    }

    console.log(data);
    this.auth.login('authenticate/login', data)
      .then((e: any) => {

        if (e.code === 0) {

          if (e.userType === 'merchant') {
            localStorage.setItem('email', e.email);
            localStorage.setItem('objectid', e.token);
            localStorage.setItem('username', e.username);
            this.route.navigate(["/dashboard/home"]);
            this.msg ='success..., logging you in....';
            this.success = true;
            this.invalid =false;
          } else {
            this.msg = 'Invalid login credentials';
            this.invalid =true;
          }
        } else {
          this.msg = 'Invalid username or password';
          //  alert('invalid email  or password');
          this.invalid =true;

        }
        console.log(e);
      })
  }
}
