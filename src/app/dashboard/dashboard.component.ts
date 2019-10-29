import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { UtilService } from '../services/util.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products = [];
  constructor(private crudService: CrudService, private utilService: UtilService, private route: Router) {

  }

  ngOnInit() {
   // this.findAll();
  }
  async findAll() {
   // await this.crudService.fetchAllProductFromApi();
  }

  loggout() {
 //   localStorage.removeItem('token');
   // localStorage.clear();
  window.location.href ="/login";
 // this.route.navigate['/login'];
    //console.log('loggout button')
  }
}
