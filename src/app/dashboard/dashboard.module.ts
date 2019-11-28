import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DashboardHomeComponent } from "../dashboard-home/dashboard-home.component";
import { ProductsComponent } from "../products/products.component";
import { ProductImagesComponent } from "../product-images/product-images.component";
import { ProductEditComponent } from "../product-edit/product-edit.component";
import { ProductsOnsaleComponent } from "../products-onsale/products-onsale.component";
import { ProductsAuctionComponent } from "../products-auction/products-auction.component";
import { ProductsBidsComponent } from "../products-bids/products-bids.component";
import { ProductWonbidsComponent } from "../product-wonbids/product-wonbids.component";
import { ProductsOrderComponent } from "../products-order/products-order.component";
import { CompletedOrderComponent } from "../completed-order/completed-order.component";
import { TicketsComponent } from "../tickets/tickets.component";
import { ProfileComponent } from "../profile/profile.component";
import { ProductsInventoryComponent } from "../products-inventory/products-inventory.component";
import { ProductAddComponent } from "../product-add/product-add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductSettingsComponent } from "../product-settings/product-settings.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { CKEditorModule } from "ngx-ckeditor";
import { AuthGuard } from '../guards/auth.guard';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AddProductComponent } from '../add-product/add-product.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    canActivate: [AuthGuard],
    data: { allowedusertypes: ["merchant"] },
    pathMatch: "full"
  },
  {
    path: "home",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: DashboardHomeComponent
  },
  {
    path: "product",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductsComponent
  },
  {
    path: "add-product",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductAddComponent
  },
  {
    path: "product-inventory",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductsInventoryComponent
  },
  {
    path: "product-image",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductImagesComponent
  },
  {
    path: "product-edit",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductEditComponent
  },
  {
    path: "product-settings",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductSettingsComponent
  },
  {
    path: "product-onsale",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductsOnsaleComponent
  },
  {
    path: "product-auction",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductsAuctionComponent
  },
  {
    path: "product-bids",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductsBidsComponent
  },
  {
    path: "product-won-bids",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductWonbidsComponent
  },
  {
    path: "product-order",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProductsOrderComponent
  },
  {
    path: "completed-order",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: CompletedOrderComponent
  },
  {
    path: "tickets",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: TicketsComponent
  },
  {
    path: "profile",
    data: { allowedusertypes: ["merchant"] },
    canActivate: [AuthGuard],
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardHomeComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductsOnsaleComponent,
    ProductsAuctionComponent,
    ProductsBidsComponent,
    ProductsOrderComponent,
    CompletedOrderComponent,
    TicketsComponent,
    ProfileComponent,
    ProductImagesComponent,
    ProductEditComponent,
    ProductWonbidsComponent,
    ProductsInventoryComponent,
    ProductSettingsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CKEditorModule,
    ImageCropperModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}
