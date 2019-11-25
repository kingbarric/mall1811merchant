import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserBidsComponent } from './admin-user-bids.component';

describe('AdminUserBidsComponent', () => {
  let component: AdminUserBidsComponent;
  let fixture: ComponentFixture<AdminUserBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
