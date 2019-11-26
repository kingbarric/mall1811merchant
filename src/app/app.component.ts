import { Component, OnInit } from "@angular/core";
import { UtilService } from './services/util.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  loading: boolean;
  constructor(private utilService:UtilService) {
    this.loading = this.utilService.toggleLoading;
     }

  ngOnInit() {
    window.scroll(0, 0);
    this.loaderStatus();
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }

  loaderStatus() {
    this.utilService.loadingState().subscribe((res: boolean) => {
      this.loading = res;
      console.log();
    });
  }
}
