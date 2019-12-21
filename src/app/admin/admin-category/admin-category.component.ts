import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-category",
  templateUrl: "./admin-category.component.html",
  styleUrls: ["./admin-category.component.scss"]
})
export class AdminCategoryComponent implements OnInit {
  categories: any[] = [];
  description: string = "";
  name: string = "";
  priceMarkupPercentage: number = 0;
  btnBusy: boolean = false;
  p: any;
  filter: any;
  category: {} = {};
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

  addCategory() {
    this.btnBusy = true;
    const data = {
      description: this.description,
      // imageIcon: "string",
      name: this.name,
      priceMarkupPercentage: this.priceMarkupPercentage
    };
    console.log(data);
    this.crudService
      .postAll("pub/productcategories/save", data)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        this.btnBusy = false;
        this.getCategory();
      });
  }

  editCategory() {
    this.btnBusy = true;
    console.log(this.category)
    this.crudService
      .postAll("pub/productcategories/save", this.category)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        this.btnBusy = false;
        this.getCategory();
      });
  }

  categoryductSettings(category) {}
  editProduct(category) {}
}
