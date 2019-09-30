import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsInventoryComponent } from './products-inventory/products-inventory.component';
import { ProductsOnsaleComponent } from './products-onsale/products-onsale.component';
import { ProductsAuctionComponent } from './products-auction/products-auction.component';
import { ProductsBidsComponent } from './products-bids/products-bids.component';
import { ProductsOrderComponent } from './products-order/products-order.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHomeComponent,
    ProductsComponent,
    ProductsInventoryComponent,
    ProductsOnsaleComponent,
    ProductsAuctionComponent,
    ProductsBidsComponent,
    ProductsOrderComponent,
    CompletedOrderComponent,
    TicketsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
