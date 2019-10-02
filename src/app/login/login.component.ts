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
  msg=''
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form =  new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(){
    const data = {
      email: this.form.controls.username.value,
      password: this.form.controls.password.value
    }

    console.log(data);
    this.auth.login('authenticate/login',data)
    .then((e:any)=>{
      /*code: 0
email: "sandy@yahoo.com"
message: "Login successful"
token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW0iLCJ1c2VySWQiOiI0NiIsInJvbGUiOiJtZXJjaGFudCIsImVtYWlsIjoic2FuZHlAeWFob28uY29tIiwidXNlclR5cGVJZCI6Mn0.zaiIkLGLN3QUthUZsI9KxNll6h47dS9zCC1CIZfUheX_v1VLS1zaRZKxOa1VDLxALzM6l_UR3JgPVNfchyc4rw"
userType: "merchant"
username: "sam"
      */
     if(e.code===0){
       //login success
       if(e.userType=='merchant'){
         localStorage.setItem('email',e.email);
         localStorage.setItem('objectid',e.token);
         localStorage.setItem('username',e.username);
        this.route.navigate(["/dashboard/home"]);
       }else{
       
       }
     }else{
      this.msg ='Invalid email or password';
    //  alert('invalid email  or password')
     }
      console.log(e);
    })
  }
}
