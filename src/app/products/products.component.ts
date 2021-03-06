import { Component, OnInit } from "@angular/core";
import { CrudService } from "../services/crud.service";
import { Router } from "@angular/router";
import { UtilService } from "../services/util.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products = [];
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
    this.crudService.findAll("product/viewallbymerchant").then((e: any) => {
      console.log(e);
      this.products = e;
      this.products.reverse();
      return this.products;
      //  this.utilService.saveAllProducts(this.products);
    });
  }

  editProduct(pro) {
    this.utilService.saveProduct(pro);
    this.router.navigate(["merchant/add-product"]).then(e => {});
  }

  productSettings(pro) {
    //
    this.utilService.saveProduct(pro);
    this.router.navigate(["merchant/product-settings"]).then(e => {});
  }
}
