import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./util.service";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  baseUrl: string;
  headers: HttpHeaders;
  products = [];
  imagePath = "https://mall1811webapi.herokuapp.com/api/";
  constructor(private http: HttpClient, private utilService: UtilService) {
    //this.baseUrl = "http://localhost:8084/api/";
    //this.baseUrl = 'https://service.mall1811.com/api/'
    this.baseUrl = "https://mall1811webapi.herokuapp.com/api/";
    this.setHeaderWithToken();
  }

  setHeaderWithToken() {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorisation: `Token ${this.utilService.getToken()}`
    });
  }

  findAll(url) {
    return this.http
      .get(`${this.baseUrl}${url}`, { headers: this.headers })
      .toPromise();
  }

  postAll(url, data) {
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.headers })
      .toPromise();
  }

  postUpload(url, data) {
    const head = new HttpHeaders({
      //  'Content-Type': 'multipart/form-data',
      Authorisation: `Token ${this.utilService.getToken()}`
    });
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: head })
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
}
