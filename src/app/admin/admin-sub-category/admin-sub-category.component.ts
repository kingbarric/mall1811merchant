import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: "app-admin-sub-category",
  templateUrl: "./admin-sub-category.component.html",
  styleUrls: ["./admin-sub-category.component.scss"]
})
export class AdminSubCategoryComponent implements OnInit {
  subCategory: any[] = [];
  description: string = "";
  name: string = "";
  btnBusy: boolean = false;
  filter: any;
  p: any;
  subCategoryObj: any = {};
  category: any[] = [];
  categoryId: number;
  constructor(private crudService: CrudService) {
    this.getCat();
  }

  ngOnInit() {
    this.getSubCategory();
  }

  getSubCategory() {
    this.crudService
      .findAll("pub/productcategories/viewallsubcategories")
      .then((res: any) => {
        this.subCategory = res;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  getCat() {
    this.crudService
      .findAll("pub/productcategories/viewall")
      .then((res: any) => {
        this.category = res;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  addSubCategory() {
    this.btnBusy = true;
    const data = {
      description: this.description,
      categoryId: this.categoryId,
      name: this.name
    };
    console.log(data);
    this.crudService
      .postAll("pub/productcategories/savesubcategory", data)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        this.btnBusy = false;
        this.getSubCategory();
      });
  }

  editSubCategory() {
    this.subCategoryObj["categoryId"] = this.categoryId;
    this.btnBusy = true;
       this.crudService
      .postAll("pub/productcategories/savesubcategory",  this.subCategoryObj)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        this.btnBusy = false;
        this.getSubCategory();
      });
    // console.log(this.subCategoryObj);
  }

  productSettings(pro) {}
  editProduct(pro) {}
  categoryductSettings(sub) {}
}
