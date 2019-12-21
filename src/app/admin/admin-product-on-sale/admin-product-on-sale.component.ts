import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-product-on-sale",
  templateUrl: "./admin-product-on-sale.component.html",
  styleUrls: ["./admin-product-on-sale.component.scss"]
})
export class AdminProductOnSaleComponent implements OnInit {
  products: any[] = [];
  p: any;
  filter: any;
  constructor(private crudService: CrudService, private router: Router) {}

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

  productSettings(pro) {
    const product = {
      ...pro.productId,
      pro
    };
    console.log(product);
    this.router.navigate(["admin/view-product"]).then(() => {
      localStorage.setItem("product", JSON.stringify(product));
    });
  }
  editProduct(pro) {}
}
