import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  baseUrl: string;
  headers: HttpHeaders;
  coreUrl = 'http://localhost:8081/Ecommerce181JavaWebApi/';

  constructor(private http: HttpClient, private utilService: UtilService) {
    this.baseUrl = 'http://localhost:8081/Ecommerce181JavaWebApi/api/';
    this.setHeaderWithToken();
  }

  ngOnInit() {
  }

  setHeaderWithToken() {
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorisation': `Token ${this.utilService.getToken()}`
      }
    );
  }

  findAll(url) {
    return this.http.get(`${this.baseUrl}${url}`, { headers: this.headers }).toPromise();
  }

  postAll(url, data) {
    return this.http.post(`${this.baseUrl}${url}`, data, { headers: this.headers }).toPromise();
  }

  postUpload(url, data) {
    const head = new HttpHeaders(
      {
      //  'Content-Type': 'multipart/form-data',
        'Authorisation': `Token ${this.utilService.getToken()}`
      }
    );
    return this.http.post(`${this.baseUrl}${url}`, data, { headers: head }).toPromise();
  }
}
