import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-userbid-cash-request",
  templateUrl: "./admin-userbid-cash-request.component.html",
  styleUrls: ["./admin-userbid-cash-request.component.scss"]
})
export class AdminUserbidCashRequestComponent implements OnInit {
  cashRequest: any[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.getCashRequest();
  }

  getCashRequest() {
    this.crudService
      .findAll("woncashrequest/getallforadmin")
      .then((res: any) => {
        this.cashRequest = res;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
