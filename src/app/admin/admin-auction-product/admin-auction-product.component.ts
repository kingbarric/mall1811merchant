import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from "sweetalert2";


interface ProSettings {
  bidType: string;
  auctionAmount: number;
  approved: boolean;
  minBidAmount: number;
  maxBidAmount: number;
  displayRange: number;
  id: number;
  worthAmount: number;
}
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
  adminMarkup = 0;
  proId = 0;
  form: FormGroup;
  proSets: ProSettings = {} as ProSettings;

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
    console.log(' pross: ', this.product);
    this.proSets.approved = pro.approved;
    this.proSets.auctionAmount = pro.auctionAmount;
    this.proSets.bidType = pro.bidType;
    this.proSets.displayRange = pro.displayRange;
    this.proSets.maxBidAmount = pro.maxBidAmount;
    this.proSets.minBidAmount = pro.minBidAmount;
    this.proSets.id = pro.id;
    this.proSets.worthAmount = pro.worthAmount;
  }


  updateMarkup() {
    const sets = this.proSets;
    console.log(this.proSets);
    if (sets.approved) {
      // Ready to publish
      if (sets.worthAmount <= 0) {
        this.util.dynamicToast(1, 'Worth Amount can not be 0 or empty');
        return;
      }

      if (sets.bidType === 'BIDTYPE_B') {
        if (sets.maxBidAmount <= 0) {
          this.util.dynamicToast(1, 'Max Bid Amount can not be 0 or empty');
          return;
        }
        if (sets.minBidAmount <= 0) {
          this.util.dynamicToast(1, 'Min Bid Amount can not be 0 or empty');
          return;
        }
        if (sets.displayRange <= 0) {
          this.util.dynamicToast(1, 'Display Range  can not be 0 or empty');
          return;
        }
      }
    }

    Swal.fire({
      title: "Please confirm",
      text: 'Are you sure you want Update? ',
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok"
    }).then(result => {
      if(result.value==true){
            this.crudService
      .postAll('auctionproduct/adminupdate', this.proSets)
      .then((res: any) => {

        this.util.dynamicToast(res.code, res.message);
        console.log(res);
        this.findAllProduct();

      })
      .catch((err: any) => {
        this.util.toast('error', err.message);
        console.log(err);
      });
      }
    });

  }
 
}