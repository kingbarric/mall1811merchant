import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-purchased-product",
  templateUrl: "./admin-purchased-product.component.html",
  styleUrls: ["./admin-purchased-product.component.scss"]
})
export class AdminPurchasedProductComponent implements OnInit {
  purchasedProducts: any[] = [];
  p: any;
  filter: any;
  productDetails: any[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.purchasedProduct();
  }

  purchasedProduct() {
    this.crudService
      .findAll("productorder/viewall")
      .then((res: any) => {
        this.purchasedProducts = res;
        console.log(this.purchasedProducts);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  checkPro() {
    setTimeout(() => {
      console.log(this.productDetails);
    }, 2000);
  }
}
