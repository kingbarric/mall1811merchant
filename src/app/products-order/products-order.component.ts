import { Component, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service";
import { Router } from "@angular/router";
import { UtilService } from "../services/util.service";

@Component({
  selector: 'app-products-order',
  templateUrl: './products-order.component.html',
  styleUrls: ['./products-order.component.scss']
})
export class ProductsOrderComponent implements OnInit {

  data = [];
  filter: any;
  pro;
  constructor(
    private crudService: CrudService,
    private router: Router,
    private utilService: UtilService
  ) {}
  p: number = 1;
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.crudService.findAll("productorder/viewallfrommerchant").then((e: any) => {
      console.log(e);
      this.data = e;
      this.data.reverse();
      return this.data;
      //  this.utilService.saveAllProducts(this.products);
    });
  }

}
