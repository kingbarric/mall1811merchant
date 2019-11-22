import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  navbarState: string = "open";
  constructor() {}

  ngOnInit() {}

  openNav() {
    if (this.navbarState === "open") {
      this.navbarState = "close";
    } else {
      this.navbarState = "open";
    }
  }
}
