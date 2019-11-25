import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-auction-product",
  templateUrl: "./admin-auction-product.component.html",
  styleUrls: ["./admin-auction-product.component.scss"]
})
export class AdminAuctionProductComponent implements OnInit {
  constructor(private curdService: CrudService) {}

  ngOnInit() {
    this.getAuctionProduct();
  }
  getAuctionProduct() {
    this.curdService
      .findAll("pub/auctionproduct/viewall")
      .then((res: any) => console.log(res))
      .catch((err: any) => {
        console.log(err);
      });
  }
}
