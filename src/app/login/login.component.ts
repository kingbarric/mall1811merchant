import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { Router } from "@angular/router";
import { UtilService } from "../services/util.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  signupForm: FormGroup;
  msg = "";
  invalid = false;
  success = false;
  btnState: boolean = false;
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });

    this.signupForm = this.formBuilder.group(
      {
        email: new FormControl("", [Validators.required]),
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        confirmPass: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required]),
        lastname: new FormControl("", [Validators.required]),
        firstname: new FormControl("", [Validators.required])
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPass.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  login() {
    this.btnState = true;
    const data = {
      email: this.form.controls.username.value,
      password: this.form.controls.password.value
    };

    console.log(data);
    this.auth
      .login("auth/login", data)
      .then((res: any) => {
        if (res.code == 0) {
          this.utilService.setToken(res.token);
          this.utilService.setUserObject(res);
          this.router.navigate(["/dashboard"]);
        }
        this.btnState = false;
      })
      .catch((err: any) => {
        console.log(err);
        if (err.error.code == -1) {
          this.msg = "Invalid Username or Password";
          this.success = false;
          this.invalid = true;
        } else {
          this.msg = "An error occured please try again";
        }
        this.btnState = false;
      });
  }

  signup() {
    this.btnState = true;
    const data = {
      email: this.signupForm.controls.email.value,
      password: this.signupForm.controls.password.value,
      username: this.signupForm.controls.username.value,
      lastName: this.signupForm.controls.lastname.value,
      phone: this.signupForm.controls.phone.value,
      userType: "merchant",
      firstName: this.signupForm.controls.firstname.value
    };
    this.auth
      .registerUser("auth/authenticate/reg", data)
      .then((res: any) => {
        console.log(res);
        if (res.code == 0) {
          this.msg = res.message;
          this.success = true;
          this.invalid = false;
        } else {
          this.msg = res.message;
          this.success = false;
          this.invalid = true;
        }
        this.btnState = false;
      })
      .catch((err: any) => {
        console.log(err);
        this.btnState = false;
      });
    console.log(data);
  }
}
