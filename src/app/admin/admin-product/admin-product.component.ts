import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-product",
  templateUrl: "./admin-product.component.html",
  styleUrls: ["./admin-product.component.scss"]
})
export class AdminProductComponent implements OnInit {
  products: any[] = [];
  filter: any;
  p: any;
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.crudService
      .findAll("product/viewall")
      .then((res: any) => {
        this.products = res;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  productSettings(pro) {
    console.log(pro);
    this.router
      .navigate(["admin/products/setting"])
      .then(() => localStorage.setItem("product", JSON.stringify(pro)));
  }
  editProduct(pro) {}
}
