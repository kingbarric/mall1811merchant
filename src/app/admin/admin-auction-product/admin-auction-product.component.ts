import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-admin-auction-product",
  templateUrl: "./admin-auction-product.component.html",
  styleUrls: ["./admin-auction-product.component.scss"]
})
export class AdminAuctionProductComponent implements OnInit {
  products;
  filter: any;
  p: any;
  product;
  totalPages: Array<number>;
  totalElements = 29;
  size = 10;
  pageNumber = 0
  first = true;
  last = false;
  numberOfElements = 10;
  contentEmpty = false;
  adminMarkup=0;
  proId=0;
  form: FormGroup;
   constructor(private crudService: CrudService, private router: Router, private util: UtilService) { }

  ngOnInit() {
     
    this.findAllProduct();
  }

  findAllProduct() {
    this.crudService
      .findAll(`auctionproduct/findall/${this.pageNumber}/${this.size}`)
      .then((res: any) => {
        this.products = res.content;
        this.totalPages = new Array(res.totalPages);
        this.contentEmpty = res.empty;
        this.first = res.first;
        this.last = res.last;
        this.totalElements = res.totalElements;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  goNext(event) {
    if (!this.last) {
      event.preventDefault();
      this.pageNumber = this.pageNumber + 1;
      this.findAllProduct();
    }
  }

  goPrevious(event) {
    if (!this.first) {
      event.preventDefault();
      this.pageNumber = this.pageNumber - 1;
      this.findAllProduct();
    }
  }

  gotoPage(pageNo, event) {
    event.preventDefault();
    this.pageNumber = pageNo;
    this.findAllProduct();
  }

  showText(t) {
    return t ? 'YES' : 'NO';
  }

  setMarkup(id,markup){
    this.proId=id;
    this.adminMarkup = markup;
  }
  productSettings(pro) {
    console.log(pro);
    this.router
      .navigate(["admin/products/setting"])
      .then(() => localStorage.setItem("product", JSON.stringify(pro)));
  }
  editProduct(pro) { }

  setProduct(pro) {
    this.product = pro;
  }


  updateMarkup() {
    const data = {
      id: this.proId,
      adminMarkupPercentage: this.adminMarkup
    };
    console.log(data);
    this.crudService
      .postAll("product/updateproductadminmarkup", data)
      .then((res: any) => {

        this.util.dynamicToast(res.code,res.message);
        console.log(res);
        
      })
      .catch((err: any) => {
        this.util.toast('error',err.message);
        console.log(err);
      });
  }

   
}