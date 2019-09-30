import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOnsaleComponent } from './products-onsale.component';

describe('ProductsOnsaleComponent', () => {
  let component: ProductsOnsaleComponent;
  let fixture: ComponentFixture<ProductsOnsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsOnsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
