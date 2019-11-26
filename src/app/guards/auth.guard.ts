import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { CrudService } from "../services/crud.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private crudService: CrudService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedusertypes = next.data.allowedusertypes;
    const isAuthorized = this.crudService.isAuthorized(allowedusertypes);
    if (this.crudService.isAuthenticated()) {
      if (isAuthorized) {
        console.log("allowed access");
        return true;
      }
    }
    this.router.navigate(["/"]);
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedusertypes = next.data.allowedusertypes;
    const isAuthorized = this.crudService.isAuthorized(allowedusertypes);
    if (this.crudService.isAuthenticated()) {
      if (isAuthorized) {
        console.log("allowed access");
        return true;
      }
    }
    this.router.navigate(["/"]);
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.crudService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(["/"]);
    return false;
  }
}
