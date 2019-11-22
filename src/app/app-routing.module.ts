import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(mod => mod.DashboardModule)
  },
  {
    path: "admin",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
