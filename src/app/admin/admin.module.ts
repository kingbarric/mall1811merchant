import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
      },
      {
        path: "categories",
        component: AdminCategoryComponent
      },
      {
        path: "sub-categories",
        component: AdminSubCategoryComponent
      },
      {
        path: "products",
        component: AdminProductComponent
      },
      {
        path: "products-on-sale",
        component: AdminProductOnSaleComponent
      },
      {
        path: "purchased-products",
        component: AdminPurchasedProductComponent
      },
      {
        path: "auction-products",
        component: AdminAuctionProductComponent
      },
      {
        path: "approved-live-auction",
        component: AdminApprovedLiveAuctionComponent
      },
      {
        path: "tickets",
        component: AdminTicketsComponent
      },
      {
        path: "user-bids",
        component: AdminUserBidsComponent
      },
      {
        path: "user-won-bids",
        component: AdminUserWonBidsComponent
      },
      {
        path: "userbids-cash-request",
        component: AdminUserbidCashRequestComponent
      },
      {
        path: "merchants",
        component: AdminMerchantsComponent
      },
      {
        path: "logistics",
        component: AdminLogisticsComponent
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
    AdminLogisticsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [],
  bootstrap: [AdminComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AdminModule {}
