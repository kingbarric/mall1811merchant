import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-products-onsale',
  templateUrl: './products-onsale.component.html',
  styleUrls: ['./products-onsale.component.scss']
})
export class ProductsOnsaleComponent implements OnInit {
  products = [];
  pro;
  filter:any
  constructor(private crudService: CrudService, private router: Router, private utilService: UtilService) { }
  p: number = 1;
  ngOnInit() {
    this.findAll();
  }


  findAll() {
   // const pro = this.utilService.fetchAllProduct();
    this.crudService.findAll('pub/productonsale/viewallfrommerchant').then((e: any) => {
      console.log(e);
      this.products = e;
      console.log(this.products);
    })
    // pro.forEach((e) => {
    //   if (e.isUpforsale == true) {
    //     console.log(e.isUpforsale);
    //     this.products.push(e);
    //   }
    // });
  }

}
