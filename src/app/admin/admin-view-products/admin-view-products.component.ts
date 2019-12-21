import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-view-products",
  templateUrl: "./admin-view-products.component.html",
  styleUrls: ["./admin-view-products.component.scss"]
})
export class AdminViewProductsComponent implements OnInit {
  product: any = {};
  approve: boolean = false;
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

  updateSale() {
    const data = { productId: this.product.id, approved: this.approve };
    console.log(data);
    this.crudService
      .postAll("pub/productonsale/save ", data)
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
