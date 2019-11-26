import { Component, OnInit } from "@angular/core";
import { CrudService } from "../services/crud.service";
import { UtilService } from "../services/util.service";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  products = [];
  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.findAll();
  }
  async findAll() {
    // await this.crudService.fetchAllProductFromApi();
  }

  logout() {
    this.authService.logout();
  }
}
