import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { CrudService } from "src/app/services/crud.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-admin-product-settings",
  templateUrl: "./admin-product-settings.component.html",
  styleUrls: ["./admin-product-settings.component.scss"]
})
export class AdminProductSettingsComponent implements OnInit, OnDestroy {
  product: any = {};
  // markup: number = 0;
  constructor(private crudService: CrudService) {}
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.product = JSON.parse(localStorage.getItem("product"));
  }

  updateMarkup() {
    const data = {
      id: this.product.id,
      adminMarkupPercentage: this.product.adminMarkupPercentage
    };
    this.crudService
      .postAll("product/updateproductadminmarkup", data)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    localStorage.removeItem("product");
  }
}
