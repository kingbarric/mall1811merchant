import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {}
}
