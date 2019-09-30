import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWonbidsComponent } from './product-wonbids.component';

describe('ProductWonbidsComponent', () => {
  let component: ProductWonbidsComponent;
  let fixture: ComponentFixture<ProductWonbidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWonbidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWonbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
