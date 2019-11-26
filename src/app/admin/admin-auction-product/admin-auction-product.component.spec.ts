import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuctionProductComponent } from './admin-auction-product.component';

describe('AdminAuctionProductComponent', () => {
  let component: AdminAuctionProductComponent;
  let fixture: ComponentFixture<AdminAuctionProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuctionProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuctionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
