import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-products-auction',
  templateUrl: './products-auction.component.html',
  styleUrls: ['./products-auction.component.scss']
})
export class ProductsAuctionComponent implements OnInit {

  products = [];
  pro;
  filter:any
  constructor(private crudService: CrudService, private router: Router, private utilService: UtilService) { }
  p: number = 1;
  ngOnInit() {
    this.findAll();
  }


  findAll() {
    const pro = this.crudService.fetchAllProductFromApi();

    this.crudService.findAll('pub/auctionproduct/viewallbymerchant').then((e: any) => {
      this.products = e;
      console.log(this.products)

    })
    // pro.forEach((e) => {
    //   if (e.isUpforauction === true) {
    //     console.log(e.isUpforauction);
    //     this.products.push(e);
    //   }
    // });
  }
}
