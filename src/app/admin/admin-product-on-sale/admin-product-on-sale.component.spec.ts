import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductOnSaleComponent } from './admin-product-on-sale.component';

describe('AdminProductOnSaleComponent', () => {
  let component: AdminProductOnSaleComponent;
  let fixture: ComponentFixture<AdminProductOnSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductOnSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
