import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";
import { Router } from "@angular/router";
import { UtilService } from 'src/app/services/util.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: "app-admin-product-on-sale",
  templateUrl: "./admin-product-on-sale.component.html",
  styleUrls: ["./admin-product-on-sale.component.scss"]
})
export class AdminProductOnSaleComponent implements OnInit {
  products;
  filter: any;
  p: any;
  product: any;
  totalPages: Array<number>;
  totalElements = 29;
  size = 10;
  pageNumber = 0
  first = true;
  last = false;
  numberOfElements = 10;
  contentEmpty = false;
  adminMarkup = 0;
  form: FormGroup;
  textApprove;
  proId = 0; constructor(private crudService: CrudService, private router: Router, private util: UtilService) { }

  ngOnInit() {

    this.findAllProduct();
  }

  findAllProduct() {
    this.crudService
      .findAll(`productonsale/findall/${this.pageNumber}/${this.size}`)
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

  showApprove(t) {
    return !t ? 'Approve' : 'Disapprove';
  }

  setMarkup(id, markup) {
    this.proId = id;
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

        this.util.dynamicToast(res.code, res.message);
        console.log(res);

      })
      .catch((err: any) => {
        this.util.toast('error', err.message);
        console.log(err);
      });
  }

  updateApprove(status, id,index) {
    const data = {
      id: id,
      approved: !status
    };
    console.log(data);
    this.crudService
      .postAll("productonsale/saveapproval", data)
      .then((res: any) => {

        this.util.dynamicToast(res.code, res.message);
        if(res.code==0){
          this.products[index].approved =data.approved;
        }
     //   console.log(res);

      })
      .catch((err: any) => {
        this.util.toast('error', err.message);
        console.log(err);
      });
  }

  toggleState(status,id,index) {
    const to = this.util.confirm('are you sure you want change status');
    Swal.fire({
      title: "Please confirm",
      text: 'are you sure you want to ' + this.showApprove(status),
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.showApprove(status)
    }).then(result => {
      console.log(result)
       if(result.value){
        this.updateApprove(status,id,index);
        
       }
    });
  }
}