import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-user-won-bids",
  templateUrl: "./admin-user-won-bids.component.html",
  styleUrls: ["./admin-user-won-bids.component.scss"]
})
export class AdminUserWonBidsComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.wonBids();
  }

  wonBids() {
    this.crudService
      .findAll("bidding/findbidwinnings")
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
