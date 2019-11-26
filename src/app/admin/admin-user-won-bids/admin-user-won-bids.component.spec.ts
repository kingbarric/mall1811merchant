import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserWonBidsComponent } from './admin-user-won-bids.component';

describe('AdminUserWonBidsComponent', () => {
  let component: AdminUserWonBidsComponent;
  let fixture: ComponentFixture<AdminUserWonBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserWonBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserWonBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
