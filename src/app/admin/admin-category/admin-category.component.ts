import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-category",
  templateUrl: "./admin-category.component.html",
  styleUrls: ["./admin-category.component.scss"]
})
export class AdminCategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.crudService
      .findAll("pub/productcategories/viewall")
      .then((res: any) => {
        this.categories = res;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
