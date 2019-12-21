import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminCategoryComponent } from "./admin-category/admin-category.component";
import { AdminSubCategoryComponent } from "./admin-sub-category/admin-sub-category.component";
import { AdminProductComponent } from "./admin-product/admin-product.component";
import { AdminProductOnSaleComponent } from "./admin-product-on-sale/admin-product-on-sale.component";
import { AdminPurchasedProductComponent } from "./admin-purchased-product/admin-purchased-product.component";
import { AdminAuctionProductComponent } from "./admin-auction-product/admin-auction-product.component";
import { AdminApprovedLiveAuctionComponent } from "./admin-approved-live-auction/admin-approved-live-auction.component";
import { AdminUserBidsComponent } from "./admin-user-bids/admin-user-bids.component";
import { AdminUserWonBidsComponent } from "./admin-user-won-bids/admin-user-won-bids.component";
import { AdminUserbidCashRequestComponent } from "./admin-userbid-cash-request/admin-userbid-cash-request.component";
import { AdminMerchantsComponent } from "./admin-merchants/admin-merchants.component";
import { AdminTicketsComponent } from "./admin-tickets/admin-tickets.component";
import { AdminLogisticsComponent } from "./admin-logistics/admin-logistics.component";
import { AuthGuard } from "../guards/auth.guard";
import { AdminProductSettingsComponent } from "./admin-product-settings/admin-product-settings.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AdminViewProductsComponent } from "./admin-view-products/admin-view-products.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { allowedusertypes: ["admin"] },
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        pathMatch: "full"
      },
      {
        path: "dashboard",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminDashboardComponent
      },
      {
        path: "categories",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminCategoryComponent
      },
      {
        path: "sub-categories",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminSubCategoryComponent
      },
      {
        path: "products",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminProductComponent
      },
      {
        path: "products-on-sale",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminProductOnSaleComponent
      },
      {
        path: "purchased-products",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminPurchasedProductComponent
      },
      {
        path: "auction-products",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminAuctionProductComponent
      },
      {
        path: "approved-live-auction",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminApprovedLiveAuctionComponent
      },
      {
        path: "tickets",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminTicketsComponent
      },
      {
        path: "user-bids",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminUserBidsComponent
      },
      {
        path: "user-won-bids",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminUserWonBidsComponent
      },
      {
        path: "userbids-cash-request",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminUserbidCashRequestComponent
      },
      {
        path: "merchants",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminMerchantsComponent
      },
      {
        path: "logistics",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminLogisticsComponent
      },
      {
        path: "products/setting",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminProductSettingsComponent
      },
      {
        path: "view-product",
        canActivate: [AuthGuard],
        data: { allowedusertypes: ["admin"] },
        component: AdminViewProductsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminCategoryComponent,
    AdminSubCategoryComponent,
    AdminProductComponent,
    AdminProductOnSaleComponent,
    AdminPurchasedProductComponent,
    AdminAuctionProductComponent,
    AdminApprovedLiveAuctionComponent,
    AdminUserBidsComponent,
    AdminUserWonBidsComponent,
    AdminUserbidCashRequestComponent,
    AdminMerchantsComponent,
    AdminTicketsComponent,
    AdminLogisticsComponent,
    AdminProductSettingsComponent,
    ProductDetailsComponent,
    AdminViewProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
    // FormControl
  ],
  providers: [],
  bootstrap: [AdminComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AdminModule {}
