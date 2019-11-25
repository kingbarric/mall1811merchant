import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-purchased-product",
  templateUrl: "./admin-purchased-product.component.html",
  styleUrls: ["./admin-purchased-product.component.scss"]
})
export class AdminPurchasedProductComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.purchasedProduct();
  }

  purchasedProduct() {
    this.crudService
      .findAll("")
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
