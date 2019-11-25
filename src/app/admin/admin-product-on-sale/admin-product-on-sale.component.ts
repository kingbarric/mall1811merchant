import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-product-on-sale",
  templateUrl: "./admin-product-on-sale.component.html",
  styleUrls: ["./admin-product-on-sale.component.scss"]
})
export class AdminProductOnSaleComponent implements OnInit {
  products: any[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.crudService
      .findAll("pub/productonsale/viewall")
      .then((res: any) => {
        this.products = res;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
