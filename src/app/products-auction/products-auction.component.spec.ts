import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAuctionComponent } from './products-auction.component';

describe('ProductsAuctionComponent', () => {
  let component: ProductsAuctionComponent;
  let fixture: ComponentFixture<ProductsAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
