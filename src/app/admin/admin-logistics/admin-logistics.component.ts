import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-logistics",
  templateUrl: "./admin-logistics.component.html",
  styleUrls: ["./admin-logistics.component.scss"]
})
export class AdminLogisticsComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.getlogistics();
  }

  getlogistics() {
    this.crudService
      .findAll("logistics/findall")
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
