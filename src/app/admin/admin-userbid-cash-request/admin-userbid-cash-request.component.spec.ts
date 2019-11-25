import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserbidCashRequestComponent } from './admin-userbid-cash-request.component';

describe('AdminUserbidCashRequestComponent', () => {
  let component: AdminUserbidCashRequestComponent;
  let fixture: ComponentFixture<AdminUserbidCashRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserbidCashRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserbidCashRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
