import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { UtilService } from "./util.service";
import { CrudService } from "./crud.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl: string;
  headers: any;

  isLoggedIn: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient,
    utilService: UtilService,
    private crudService: CrudService,
    private router: Router
  ) {
    this.baseUrl = "https://mall1811webapi.herokuapp.com/";
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "No-Auth"
    });

    this.isLoggedIn = new BehaviorSubject<boolean>(null);

    if (utilService.getToken()) {
      this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
    }
  }

  registerUser(url, data): Promise<object> {
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.headers })
      .toPromise();
  }

  login(url, data): Promise<object> {
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.headers })
      .toPromise();
  }

  logInStatus() {
    return this.isLoggedIn;
  }

  setLoginStatus(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
