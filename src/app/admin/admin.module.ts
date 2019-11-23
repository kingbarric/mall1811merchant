import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [],
  bootstrap: [AdminComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AdminModule {}
