import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from '../dashboard-home/dashboard-home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductImagesComponent } from '../product-images/product-images.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductsOnsaleComponent } from '../products-onsale/products-onsale.component';
import { ProductsAuctionComponent } from '../products-auction/products-auction.component';
import { ProductsBidsComponent } from '../products-bids/products-bids.component';
import { ProductWonbidsComponent } from '../product-wonbids/product-wonbids.component';
import { ProductsOrderComponent } from '../products-order/products-order.component';
import { CompletedOrderComponent } from '../completed-order/completed-order.component';
import { TicketsComponent } from '../tickets/tickets.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProductsInventoryComponent } from '../products-inventory/products-inventory.component';
import { ProductAddComponent } from '../product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSettingsComponent } from '../product-settings/product-settings.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CKEditorModule } from 'ngx-ckeditor';

const routes: Routes = [
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardHomeComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'add-product', component: ProductAddComponent},
  {path: 'product-inventory', component: ProductsInventoryComponent}, 
  {path: 'product-image', component: ProductImagesComponent},
  {path: 'product-edit', component: ProductEditComponent},
  {path: 'product-settings', component: ProductSettingsComponent},
  {path: 'product-onsale', component: ProductsOnsaleComponent},
  {path: 'product-auction', component: ProductsAuctionComponent},
  {path: 'product-bids', component: ProductsBidsComponent},
  {path: 'product-won-bids', component: ProductWonbidsComponent},
  {path: 'product-order', component: ProductsOrderComponent},
  {path: 'completed-order', component: CompletedOrderComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'profile', component: ProfileComponent}, 
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
    ProductSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CKEditorModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
