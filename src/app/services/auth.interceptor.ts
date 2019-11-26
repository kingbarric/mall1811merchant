import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpInterceptor,
  HttpEvent,
  HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { finalize } from "rxjs/operators";
import { UtilService } from "./util.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private util: UtilService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get("Authorization") == "No-Auth") {
      this.util.showLoading();
      return next
        .handle(req.clone())
        .pipe(finalize(() => this.util.hideLoading()));
    }
    if (localStorage.getItem("token") !== null) {
      this.util.showLoading();
      const clonedreq = req.clone({
        headers: req.headers.set(
          "Authorization",
          `Bearer ${this.util.getToken()}`
        )
      });
      return next.handle(clonedreq).pipe(
        tap(
          succ => {},
          err => {
            console.log(err);
          }
        ),
        finalize(() => this.util.hideLoading())
      );
    } else {
      new Error("an error occured");
      this.router.navigate(["/login"]);
    }
  }
}
