import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
  @Input() product: {};
  merchant;
  constructor() { }


  ngOnInit() {
    console.log(this.product);
   // this.merchant = this.product.merchantId.profileI
  }
setProduct(pro){
this.product =pro;
}

showText(t) {
  return t ? 'YES' : 'NO';
}
}
