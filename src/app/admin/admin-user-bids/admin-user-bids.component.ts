import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-user-bids",
  templateUrl: "./admin-user-bids.component.html",
  styleUrls: ["./admin-user-bids.component.scss"]
})
export class AdminUserBidsComponent implements OnInit {
  usersbid: any[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.userBids();
  }

  userBids() {
    this.crudService
      .findAll("bidding/viewall")
      .then((res: any) => {
        this.usersbid = res
        console.log(res);
      })
      .catch((res: any) => {
        console.log(res);
      });
  }
}
