import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./util.service";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  header: any;
  baseUrl: string;
  basePath:string;
  // headers: HttpHeaders;
  products = [];
  imagePath = "https://mall1811webapi.herokuapp.com/api/";
  constructor(private http: HttpClient, private utilService: UtilService) {
    // this.baseUrl = "https://mall1811webapi.herokuapp.com/api/";
    this.basePath =  "http://localhost:8082/";
    this.baseUrl = this.basePath+"api/";
    this.header = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + this.utilService.getToken()
    });
  }

  // setHeaderWithToken() {
  //   this.headers = new HttpHeaders({
  //     "Content-Type": "application/json",
  //     Authorisation: `Bearer ${this.utilService.getToken()}`
  //   });
  // }

  findAll(url) {
    return this.http
      .get(`${this.baseUrl}${url}`, { headers: this.header })
      .toPromise();
  }

  postAll(url, data) {
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.header })
      .toPromise();
  }

  postUpload(url, data) {
    const head = new HttpHeaders({
      //  'Content-Type': 'multipart/form-data',
      Authorisation: `Token ${this.utilService.getToken()}`
    });
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.header })
      .toPromise();
  }

  fetchAllProductFromApi() {
    this.findAll("product/viewallbymerchant").then((e: any) => {
      console.log(e);
      this.products = e;
      this.products.reverse();
      return this.products;
      //  this.utilService.saveAllProducts(this.products);
    });

    return null;
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }

  isAuthorized(allowedusertypes: string[]): any {
    let user = localStorage.hasOwnProperty("user");
    if (allowedusertypes == null || allowedusertypes.length === 0) {
      console.log("empty allowed access");
      return true;
    }
    if (user) {
      const authUserType = this.utilService.getUserObject().userType;
      return allowedusertypes.includes(authUserType);
    }
    return false;
  }
}
