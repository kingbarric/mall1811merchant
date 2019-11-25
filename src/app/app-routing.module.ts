import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "merchant",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(mod => mod.DashboardModule)
  },
  {
    path: "admin",
    canActivate: [AuthGuard],
    canActivateChild:[AuthGuard],
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
