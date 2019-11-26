import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  navbarState: string = "open";
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  openNav() {
    if (this.navbarState === "open") {
      this.navbarState = "close";
    } else {
      this.navbarState = "open";
    }
  }

  logout() {
    this.authService.logout();
  }
}
