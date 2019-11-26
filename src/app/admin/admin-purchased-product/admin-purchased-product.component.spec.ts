import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPurchasedProductComponent } from './admin-purchased-product.component';

describe('AdminPurchasedProductComponent', () => {
  let component: AdminPurchasedProductComponent;
  let fixture: ComponentFixture<AdminPurchasedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPurchasedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPurchasedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
