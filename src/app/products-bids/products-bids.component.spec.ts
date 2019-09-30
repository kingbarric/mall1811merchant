import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBidsComponent } from './products-bids.component';

describe('ProductsBidsComponent', () => {
  let component: ProductsBidsComponent;
  let fixture: ComponentFixture<ProductsBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
